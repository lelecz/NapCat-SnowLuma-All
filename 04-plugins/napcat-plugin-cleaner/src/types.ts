/**
 * 清理选项配置
 */
export interface CleanOptions {
    enableVideo: boolean;
    enableVideoThumb: boolean;
    enablePtt: boolean;
    enablePic: boolean;
    enableFile: boolean;
    enableLog: boolean;
    enableLogCache: boolean;
    enableNtTemp: boolean;
    enableNapCatData: boolean;
    enableNapCatTemp: boolean;
    retainDays: number;
}

/**
 * 定时任务配置
 */
export interface ScheduleTask {
    id: string;
    name: string;
    accounts: string[]; // QQ号列表，空数组表示所有
    options: CleanOptions;
    cronHour: number; // 每天几点执行 (0-23)
    cronMinute: number; // 分钟 (0-59)
    frequency?: 'daily' | 'weekly' | 'interval';
    frequencyValue?: number; // 0-6 for weekly, N days for interval
    enabled: boolean;
    lastRun?: string;
    lastResult?: string;
}

/**
 * 插件配置
 */
export interface CleanerPluginConfig {
    defaultOptions: CleanOptions;
    scheduleTasks: ScheduleTask[];
}

/**
 * 清理统计
 */
export interface CleanStats {
    totalFiles: number;
    totalSize: number;
    categories: {
        [key: string]: {
            files: number;
            size: number;
        };
    };
}

/**
 * 清理路径集合
 */
export interface CleanablePaths {
    video: string[];
    videoThumb: string[];
    ptt: string[];
    pic: string[];
    file: string[];
    log: string[];
    logCache: string[];
    ntTemp: string[];
    napCatData: string[];
    napCatTemp: string[];
}

/**
 * 默认清理选项
 */
export const defaultCleanOptions: CleanOptions = {
    enableVideo: true,
    enableVideoThumb: true,
    enablePtt: true,
    enablePic: true,
    enableFile: true,
    enableLog: true,
    enableLogCache: true,
    enableNtTemp: true,
    enableNapCatData: false,
    enableNapCatTemp: true,
    retainDays: 7,
};
