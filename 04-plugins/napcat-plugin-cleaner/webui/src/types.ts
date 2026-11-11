export interface Stats {
    totalSize: string
    totalFiles: number
    estimatedCleanSize: string
    categories: {
        [key: string]: {
            files: number
            size: string
            estimatedCleanSize: string
        }
    }
}

export interface Account {
    uin: string
    isCurrent: boolean
    stats: Stats
}

export interface CleanerConfig {
    enableVideo: boolean
    enableVideoThumb: boolean
    enablePtt: boolean
    enablePic: boolean
    enableFile: boolean
    enableLog: boolean
    enableLogCache: boolean
    enableNtTemp: boolean
    enableNapCatData: boolean
    enableNapCatTemp: boolean
    retainDays: number
}

export interface ScheduleTask {
    id: string
    name: string
    cronHour: number
    cronMinute: number
    frequency: 'daily' | 'weekly' | 'interval'
    frequencyValue: number
    retainDays: number
    options: CleanerConfig
    accounts: string[]
    enabled: boolean
    lastRun?: number
    lastResult?: string
}

export interface ApiResponse<T> {
    code: number
    message: string
    data: T
}

export const CATEGORY_LABELS: Record<string, string> = {
    video: '视频文件',
    videoThumb: '视频封面',
    ptt: '语音消息',
    pic: '图片缓存',
    file: '普通文件',
    log: '程序日志',
    logCache: '日志缓存',
    ntTemp: 'QQ临时文件',
    napCatData: 'NapCat 数据',
    napCatTemp: 'NapCat 临时文件'
};
