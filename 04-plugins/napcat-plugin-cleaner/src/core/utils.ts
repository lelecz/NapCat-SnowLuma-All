import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { pluginState } from './state';

/**
 * 格式化文件大小
 */
export function formatSize(bytes: number): string {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

/**
 * 计算 Linux 路径的 hash: md5(md5(uid) + "nt_kernel")
 */
export function computeNtHash(uid: string): string {
    const md5Uid = crypto.createHash('md5').update(uid).digest('hex');
    const hash = crypto.createHash('md5').update(md5Uid + 'nt_kernel').digest('hex');
    return hash;
}

/**
 * 生成唯一ID
 */
export function generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substring(2, 8);
}

/**
 * 获取时间格式的子目录 (如 2025-05, 2026-01)
 */
export function getDateSubdirs(basePath: string): string[] {
    if (!fs.existsSync(basePath)) {
        return [];
    }
    try {
        const entries = fs.readdirSync(basePath, { withFileTypes: true });
        return entries
            .filter(e => e.isDirectory() && /^\d{4}-\d{2}$/.test(e.name))
            .map(e => path.join(basePath, e.name));
    } catch {
        return [];
    }
}

/**
 * 保存配置到文件
 */
export function saveConfig(): void {
    try {
        const configDir = path.dirname(pluginState.configPath);
        if (!fs.existsSync(configDir)) {
            fs.mkdirSync(configDir, { recursive: true });
        }
        fs.writeFileSync(pluginState.configPath, JSON.stringify(pluginState.config, null, 2), 'utf-8');
    } catch (e) {
        pluginState.log('error', '保存配置失败', e);
    }
}

/**
 * 加载配置文件
 */
export function loadConfig(): void {
    try {
        if (fs.existsSync(pluginState.configPath)) {
            const savedConfig = JSON.parse(fs.readFileSync(pluginState.configPath, 'utf-8'));
            pluginState.updateConfig(savedConfig);
        }
    } catch (e) {
        pluginState.log('warn', '加载配置失败', e);
    }
}
