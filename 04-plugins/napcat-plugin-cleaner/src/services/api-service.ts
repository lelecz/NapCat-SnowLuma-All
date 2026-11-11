import { pluginState } from '../core/state';
import { formatSize, saveConfig } from '../core/utils';
import { scanCache, executeClean, getAllAccounts } from './cleaner-service';
import {
    createScheduleTask,
    updateScheduleTask,
    deleteScheduleTask,
    runTaskNow,
} from './schedule-service';
import type { CleanOptions } from '../types';

/**
 * 注册所有 API 路由
 */
export function registerApiRoutes(router: any, selfUin: string): void {
    // API: 获取所有账号
    router.get('/accounts', (_req, res) => {
        try {
            const dataPath = pluginState.dataPath;
            const accounts = getAllAccounts(dataPath);

            pluginState.log('info', `[/accounts] dataPath=${dataPath}, currentUin=${selfUin}`);
            pluginState.log('info', `[/accounts] getAllAccounts 返回: ${accounts.length} 个账号`);

            const accountStats = accounts.map(uin => {
                const stats = scanCache(dataPath, uin, 0);
                return {
                    uin,
                    isCurrent: uin === selfUin,
                    stats: {
                        totalFiles: stats.totalFiles,
                        totalSize: formatSize(stats.totalSize),
                        estimatedCleanSize: '0 B',
                        categories: Object.fromEntries(
                            Object.entries(stats.categories).map(([k, v]) => [k, {
                                files: v.files,
                                size: formatSize(v.size),
                                estimatedCleanSize: '0 B',
                            }])
                        ),
                    },
                };
            });

            res.json({
                code: 0,
                data: {
                    dataPath,
                    currentUin: selfUin,
                    accounts: accountStats,
                },
            });
        } catch (e: any) {
            res.status(500).json({ code: -1, message: e.message });
        }
    });

    // API: 获取指定账号的详细缓存统计
    router.get('/stats/:uin', (req, res) => {
        try {
            const uin = req.params['uin'] ?? '';
            const retainDays = parseInt(req.query['retainDays'] as string) || 0;

            if (!uin) {
                res.status(400).json({ code: -1, message: 'uin参数缺失' });
                return;
            }
            const dataPath = pluginState.dataPath;
            const stats = scanCache(dataPath, uin, 0);
            const estimatedClean = retainDays > 0 ? scanCache(dataPath, uin, retainDays) : null;

            res.json({
                code: 0,
                data: {
                    uin,
                    stats,
                    estimatedClean,
                    formattedStats: {
                        totalFiles: stats.totalFiles,
                        totalSize: formatSize(stats.totalSize),
                        estimatedCleanSize: estimatedClean ? formatSize(estimatedClean.totalSize) : '0 B',
                        categories: Object.fromEntries(
                            Object.entries(stats.categories).map(([k, v]) => [k, {
                                files: v.files,
                                size: formatSize(v.size),
                                sizeBytes: v.size,
                                estimatedCleanSize: estimatedClean && estimatedClean.categories[k] ? formatSize(estimatedClean.categories[k].size) : '0 B',
                            }])
                        ),
                    },
                },
            });
        } catch (e: any) {
            res.status(500).json({ code: -1, message: e.message });
        }
    });

    // API: 执行清理
    router.post('/clean', (req, res) => {
        try {
            const dataPath = pluginState.dataPath;
            const body = req.body as {
                accounts?: string[];
                options?: Partial<CleanOptions>;
            };

            let accounts = body.accounts || [selfUin];
            if (accounts.length === 0) {
                accounts = getAllAccounts(dataPath);
            }

            const options: CleanOptions = { ...pluginState.config.defaultOptions, ...(body.options || {}) };

            pluginState.log('info', `开始清理缓存，账号: ${accounts.join(', ')}，保留 ${options.retainDays} 天`);

            const results: any[] = [];
            let totalFiles = 0;
            let totalSize = 0;

            for (const uin of accounts) {
                const result = executeClean(dataPath, uin, options);
                totalFiles += result.totalFiles;
                totalSize += result.totalSize;
                results.push({
                    uin,
                    stats: result,
                    formatted: {
                        totalFiles: result.totalFiles,
                        totalSize: formatSize(result.totalSize),
                        categories: Object.fromEntries(
                            Object.entries(result.categories).map(([k, v]) => [k, {
                                files: v.files,
                                size: formatSize(v.size),
                            }])
                        ),
                    },
                });
            }

            pluginState.log('info', `清理完成: 删除 ${totalFiles} 个文件，释放 ${formatSize(totalSize)}`);

            res.json({
                code: 0,
                message: `清理完成: 删除 ${totalFiles} 个文件，释放 ${formatSize(totalSize)}`,
                data: {
                    totalFiles,
                    totalSize: formatSize(totalSize),
                    results,
                },
            });
        } catch (e: any) {
            pluginState.log('error', '清理失败:', e);
            res.status(500).json({ code: -1, message: e.message });
        }
    });

    // API: 获取配置
    router.get('/config', (_req, res) => {
        res.json({
            code: 0,
            data: pluginState.config,
        });
    });

    // API: 保存默认选项
    router.post('/config/options', (req, res) => {
        try {
            const options = req.body as Partial<CleanOptions>;
            pluginState.updateDefaultOptions(options);
            saveConfig();
            res.json({ code: 0, message: '默认选项已保存' });
        } catch (e: any) {
            res.status(500).json({ code: -1, message: e.message });
        }
    });

    // API: 获取定时任务列表
    router.get('/schedules', (_req, res) => {
        res.json({
            code: 0,
            data: pluginState.config.scheduleTasks,
        });
    });

    // API: 添加定时任务
    router.post('/schedules', (req, res) => {
        try {
            const body = req.body;
            const task = createScheduleTask(body);
            res.json({ code: 0, message: '定时任务已添加', data: task });
        } catch (e: any) {
            res.status(500).json({ code: -1, message: e.message });
        }
    });

    // API: 更新定时任务
    router.post('/schedules/:id', (req, res) => {
        try {
            const { id } = req.params;
            const body = req.body;

            const task = updateScheduleTask(id!, body);
            if (!task) {
                res.status(404).json({ code: -1, message: '任务不存在' });
                return;
            }

            res.json({ code: 0, message: '定时任务已更新', data: task });
        } catch (e: any) {
            res.status(500).json({ code: -1, message: e.message });
        }
    });

    // API: 删除定时任务
    router.delete('/schedules/:id', (req, res) => {
        try {
            const { id } = req.params;
            const success = deleteScheduleTask(id!);
            if (!success) {
                res.status(404).json({ code: -1, message: '任务不存在' });
                return;
            }
            res.json({ code: 0, message: '定时任务已删除' });
        } catch (e: any) {
            res.status(500).json({ code: -1, message: e.message });
        }
    });

    // API: 立即执行定时任务
    router.post('/schedules/:id/run', (req, res) => {
        try {
            const { id } = req.params;
            const result = runTaskNow(id!);
            if (!result.success) {
                res.status(404).json({ code: -1, message: '任务不存在' });
                return;
            }
            res.json({
                code: 0,
                message: `任务执行完成: 删除 ${result.totalFiles} 文件, 释放 ${result.totalSize}`,
                data: result.task,
            });
        } catch (e: any) {
            res.status(500).json({ code: -1, message: e.message });
        }
    });
}
