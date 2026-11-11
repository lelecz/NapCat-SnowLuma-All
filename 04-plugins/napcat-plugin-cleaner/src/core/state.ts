import type { PluginLogger } from 'napcat-types/napcat-onebot/network/plugin-manger';
import type { CleanerPluginConfig, CleanOptions } from '../types';
import { defaultCleanOptions } from '../types';
import os from 'os';

// 全局状态管理（单例模式）
class PluginState {
    private _logger: PluginLogger | null = null;
    private _dataPath: string = '';
    private _configPath: string = '';
    private _config: CleanerPluginConfig = {
        defaultOptions: { ...defaultCleanOptions },
        scheduleTasks: [],
    };

    // uin -> uid 的映射
    private _uinToUidMap: Map<string, string> = new Map();
    // uin -> hash目录 的映射
    private _uinToHashDirMap: Map<string, string> = new Map();
    // 定时器存储
    private _scheduleTimers: Map<string, NodeJS.Timeout> = new Map();
    // 当前账号 uid
    private _currentUid: string = '';

    // 平台检测
    readonly isWindows = os.platform() === 'win32';

    // getter/setter
    get logger() { return this._logger; }
    set logger(val) { this._logger = val; }

    get dataPath() { return this._dataPath; }
    set dataPath(val) { this._dataPath = val; }

    get configPath() { return this._configPath; }
    set configPath(val) { this._configPath = val; }

    get config() { return this._config; }
    set config(val) { this._config = val; }

    get currentUid() { return this._currentUid; }
    set currentUid(val) { this._currentUid = val; }

    get uinToUidMap() { return this._uinToUidMap; }
    get uinToHashDirMap() { return this._uinToHashDirMap; }
    get scheduleTimers() { return this._scheduleTimers; }

    // 日志方法
    log(level: 'info' | 'warn' | 'error', ...args: any[]) {
        if (!this._logger) return;
        switch (level) {
            case 'info': this._logger.info(...args); break;
            case 'warn': this._logger.warn(...args); break;
            case 'error': this._logger.error(...args); break;
        }
    }

    // 更新配置
    updateConfig(partial: Partial<CleanerPluginConfig>) {
        this._config = { ...this._config, ...partial };
    }

    // 更新默认选项
    updateDefaultOptions(options: Partial<CleanOptions>) {
        this._config.defaultOptions = { ...this._config.defaultOptions, ...options };
    }
}

// 导出单例
export const pluginState = new PluginState();
