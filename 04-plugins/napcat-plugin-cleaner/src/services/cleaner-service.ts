import fs from 'fs';
import path from 'path';
import { pluginState } from '../core/state';
import { computeNtHash, getDateSubdirs } from '../core/utils';
import type { CleanStats, CleanOptions, CleanablePaths } from '../types';

/**
 * 获取用户数据目录的 nt_data 路径
 */
export function getNtDataPath(dataPath: string, uin: string): string | null {
    if (pluginState.isWindows) {
        // Windows: {dataPath}/{uin}/nt_qq/nt_data
        const ntDataPath = path.join(dataPath, uin, 'nt_qq', 'nt_data');
        if (fs.existsSync(ntDataPath)) {
            return ntDataPath;
        }
        return null;
    } else {
        // Linux: dataPath 已经是 QQ 下的路径,如 /app/.config/QQ，直接拼接 nt_qq_{hash}
        const cachedHashDir = pluginState.uinToHashDirMap.get(uin);
        if (cachedHashDir) {
            const ntDataPath = path.join(cachedHashDir, 'nt_data');
            if (fs.existsSync(ntDataPath)) {
                return ntDataPath;
            }
        }

        // 尝试通过 uid 计算 hash
        const uid = pluginState.uinToUidMap.get(uin);
        if (uid) {
            const hash = computeNtHash(uid);
            const hashDir = path.join(dataPath, `nt_qq_${hash}`);
            const ntDataPath = path.join(hashDir, 'nt_data');
            if (fs.existsSync(ntDataPath)) {
                pluginState.uinToHashDirMap.set(uin, hashDir);
                return ntDataPath;
            }
        }

        // 如果没有找到，扫描所有 nt_qq_* 目录
        if (fs.existsSync(dataPath)) {
            try {
                const entries = fs.readdirSync(dataPath, { withFileTypes: true });
                for (const entry of entries) {
                    if (entry.isDirectory() && /^nt_qq_[a-f0-9]{32}$/.test(entry.name)) {
                        const hashDir = path.join(dataPath, entry.name);
                        const ntDataPath = path.join(hashDir, 'nt_data');
                        if (fs.existsSync(ntDataPath)) {
                            if (!pluginState.uinToHashDirMap.has(uin)) {
                                pluginState.uinToHashDirMap.set(uin, hashDir);
                            }
                            return ntDataPath;
                        }
                    }
                }
            } catch {
                // ignore
            }
        }
        return null;
    }
}

/**
 * 获取用户的 nt_temp 路径 (Linux only)
 */
function getNtTempPath(dataPath: string, uin: string): string | null {
    if (pluginState.isWindows) {
        return null;
    }
    const cachedHashDir = pluginState.uinToHashDirMap.get(uin);
    if (cachedHashDir) {
        const ntTempPath = path.join(cachedHashDir, 'nt_temp');
        if (fs.existsSync(ntTempPath)) {
            return ntTempPath;
        }
    }
    return null;
}

/**
 * 获取 NapCat 目录路径
 */
function getNapCatPath(dataPath: string): string {
    return path.join(dataPath, 'NapCat');
}

/**
 * 获取所有需要清理的目录(太多乱七八糟的目录了,写一起吧)
 */
export function getCleanablePaths(dataPath: string, uin: string): CleanablePaths {
    const ntDataPath = getNtDataPath(dataPath, uin);

    const result: CleanablePaths = {
        video: [],
        videoThumb: [],
        ptt: [],
        pic: [],
        file: [],
        log: [],
        logCache: [],
        ntTemp: [],
        napCatData: [],
        napCatTemp: [],
    };

    if (!ntDataPath) {
        return result;
    }

    // 视频目录
    const videoBase = path.join(ntDataPath, 'Video');
    const videoDirs = getDateSubdirs(videoBase);
    result.video = videoDirs.flatMap(dir => {
        const oriPath = path.join(dir, 'Ori');
        return fs.existsSync(oriPath) ? [oriPath] : [dir];
    });
    result.videoThumb = videoDirs.flatMap(dir => {
        const thumbPath = path.join(dir, 'Thumb');
        const thumbTempPath = path.join(dir, 'ThumbTemp');
        const paths: string[] = [];
        if (fs.existsSync(thumbPath)) paths.push(thumbPath);
        if (fs.existsSync(thumbTempPath)) paths.push(thumbTempPath);
        return paths;
    });

    // 语音目录
    const pttBase = path.join(ntDataPath, 'Ptt');
    const pttDirs = getDateSubdirs(pttBase);
    result.ptt = pttDirs.flatMap(dir => {
        const oriPath = path.join(dir, 'Ori');
        const oriTempPath = path.join(dir, 'OriTemp');
        const paths: string[] = [];
        if (fs.existsSync(oriPath)) paths.push(oriPath);
        if (fs.existsSync(oriTempPath)) paths.push(oriTempPath);
        return paths.length > 0 ? paths : [dir];
    });

    // 图片目录
    const picBase = path.join(ntDataPath, 'Pic');
    const picDirs = getDateSubdirs(picBase);
    result.pic = picDirs.flatMap(dir => {
        const oriPath = path.join(dir, 'Ori');
        return fs.existsSync(oriPath) ? [oriPath] : [dir];
    });

    // 文件目录
    const fileOri = path.join(ntDataPath, 'File', 'Ori');
    const fileThumb = path.join(ntDataPath, 'File', 'Thumb');
    const fileThumbTemp = path.join(ntDataPath, 'File', 'ThumbTemp');
    if (fs.existsSync(fileOri)) result.file.push(fileOri);
    if (fs.existsSync(fileThumb)) result.file.push(fileThumb);
    if (fs.existsSync(fileThumbTemp)) result.file.push(fileThumbTemp);

    // 日志目录
    const logPath = path.join(ntDataPath, 'log');
    if (fs.existsSync(logPath)) result.log.push(logPath);

    // 日志缓存目录
    const logCachePath = path.join(ntDataPath, 'log-cache');
    if (fs.existsSync(logCachePath)) result.logCache.push(logCachePath);

    // nt_temp 目录 (Linux)
    const ntTempPath = getNtTempPath(dataPath, uin);
    if (ntTempPath) result.ntTemp.push(ntTempPath);

    // NapCat 目录
    const napCatPath = getNapCatPath(dataPath);
    const napCatDataPath = path.join(napCatPath, 'data');
    const napCatTempPath = path.join(napCatPath, 'temp');
    if (fs.existsSync(napCatDataPath)) result.napCatData.push(napCatDataPath);
    if (fs.existsSync(napCatTempPath)) result.napCatTemp.push(napCatTempPath);

    return result;
}

/**
 * 清理目录中的文件
 */
export function cleanDirectory(dirPath: string, retainDays: number): { files: number; size: number } {
    let files = 0;
    let size = 0;

    if (!fs.existsSync(dirPath)) {
        return { files, size };
    }

    const now = Date.now();
    const retainMs = retainDays * 24 * 60 * 60 * 1000;

    try {
        const entries = fs.readdirSync(dirPath, { withFileTypes: true });
        for (const entry of entries) {
            const fullPath = path.join(dirPath, entry.name);
            if (entry.isFile()) {
                try {
                    const stat = fs.statSync(fullPath);
                    if (now - stat.mtimeMs > retainMs) {
                        size += stat.size;
                        fs.unlinkSync(fullPath);
                        files++;
                    }
                } catch (e) {
                    pluginState.log('warn', `无法删除文件: ${fullPath}`, e);
                }
            } else if (entry.isDirectory()) {
                const subStats = cleanDirectory(fullPath, retainDays);
                files += subStats.files;
                size += subStats.size;
                // 尝试删除空目录
                try {
                    const remaining = fs.readdirSync(fullPath);
                    if (remaining.length === 0) {
                        fs.rmdirSync(fullPath);
                    }
                } catch {
                    // ignore
                }
            }
        }
    } catch (e) {
        pluginState.log('warn', `无法读取目录: ${dirPath}`, e);
    }

    return { files, size };
}

/**
 * 获取目录统计，支持时间过滤
 */
function getDirStatsWithFilter(dirPath: string, now: number, retainMs: number): { files: number; size: number } {
    let files = 0;
    let size = 0;

    if (!fs.existsSync(dirPath)) {
        return { files, size };
    }

    try {
        const entries = fs.readdirSync(dirPath, { withFileTypes: true });
        for (const entry of entries) {
            const fullPath = path.join(dirPath, entry.name);
            if (entry.isFile()) {
                try {
                    const stat = fs.statSync(fullPath);
                    if (retainMs <= 0 || (now - stat.mtimeMs > retainMs)) {
                        files++;
                        size += stat.size;
                    }
                } catch {
                    // ignore
                }
            } else if (entry.isDirectory()) {
                const subStats = getDirStatsWithFilter(fullPath, now, retainMs);
                files += subStats.files;
                size += subStats.size;
            }
        }
    } catch {
        // ignore
    }

    return { files, size };
}

/**
 * 扫描可清理的缓存
 */
export function scanCache(dataPath: string, uin: string, retainDays: number = 0): CleanStats {
    const paths = getCleanablePaths(dataPath, uin);
    const stats: CleanStats = {
        totalFiles: 0,
        totalSize: 0,
        categories: {
            video: { files: 0, size: 0 },
            videoThumb: { files: 0, size: 0 },
            ptt: { files: 0, size: 0 },
            pic: { files: 0, size: 0 },
            file: { files: 0, size: 0 },
            log: { files: 0, size: 0 },
            logCache: { files: 0, size: 0 },
            ntTemp: { files: 0, size: 0 },
            napCatData: { files: 0, size: 0 },
            napCatTemp: { files: 0, size: 0 },
        },
    };

    const now = Date.now();
    const retainMs = retainDays * 24 * 60 * 60 * 1000;

    for (const [category, dirs] of Object.entries(paths)) {
        for (const dir of dirs) {
            const dirStats = getDirStatsWithFilter(dir, now, retainMs);
            const cat = stats.categories[category];
            if (cat) {
                cat.files += dirStats.files;
                cat.size += dirStats.size;
            }
            stats.totalFiles += dirStats.files;
            stats.totalSize += dirStats.size;
        }
    }

    return stats;
}

/**
 * 执行清理
 */
export function executeClean(dataPath: string, uin: string, options: CleanOptions): CleanStats {
    const paths = getCleanablePaths(dataPath, uin);
    const stats: CleanStats = {
        totalFiles: 0,
        totalSize: 0,
        categories: {
            video: { files: 0, size: 0 },
            videoThumb: { files: 0, size: 0 },
            ptt: { files: 0, size: 0 },
            pic: { files: 0, size: 0 },
            file: { files: 0, size: 0 },
            log: { files: 0, size: 0 },
            logCache: { files: 0, size: 0 },
            ntTemp: { files: 0, size: 0 },
            napCatData: { files: 0, size: 0 },
            napCatTemp: { files: 0, size: 0 },
        },
    };

    const categoryEnabled: Record<string, boolean> = {
        video: options.enableVideo,
        videoThumb: options.enableVideoThumb,
        ptt: options.enablePtt,
        pic: options.enablePic,
        file: options.enableFile,
        log: options.enableLog,
        logCache: options.enableLogCache,
        ntTemp: options.enableNtTemp,
        napCatData: options.enableNapCatData,
        napCatTemp: options.enableNapCatTemp,
    };

    for (const [category, dirs] of Object.entries(paths)) {
        if (!categoryEnabled[category]) continue;
        for (const dir of dirs) {
            const cleanResult = cleanDirectory(dir, options.retainDays);
            const cat = stats.categories[category];
            if (cat) {
                cat.files += cleanResult.files;
                cat.size += cleanResult.size;
            }
            stats.totalFiles += cleanResult.files;
            stats.totalSize += cleanResult.size;
        }
    }

    return stats;
}

/**
 * 获取 dataPath 下所有 QQ 账号目录
 */
export function getAllAccounts(dataPath: string): string[] {
    if (pluginState.isWindows) {
        if (!fs.existsSync(dataPath)) {
            return [];
        }
        try {
            const entries = fs.readdirSync(dataPath, { withFileTypes: true });
            return entries
                .filter(e => e.isDirectory() && /^\d{5,11}$/.test(e.name))
                .map(e => e.name);
        } catch {
            return [];
        }
    } else {
        // Linux: 优先使用 uinToUidMap
        const accounts: string[] = [];

        pluginState.uinToUidMap.forEach((uid, uin) => {
            if (!pluginState.uinToHashDirMap.has(uin)) {
                const hash = computeNtHash(uid);
                const hashDir = path.join(dataPath, `nt_qq_${hash}`);
                if (fs.existsSync(hashDir)) {
                    pluginState.uinToHashDirMap.set(uin, hashDir);
                }
            }

            if (pluginState.uinToHashDirMap.has(uin)) {
                accounts.push(uin);
            }
        });

        return accounts;
    }
}
