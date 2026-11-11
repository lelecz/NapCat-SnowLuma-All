import { pluginState } from '../core/state';
import { formatSize, generateId, saveConfig } from '../core/utils';
import { executeClean, getAllAccounts } from './cleaner-service';
import type { ScheduleTask } from '../types';

/**
 * 清理定时器
 */
export function clearScheduleTimer(taskId: string): void {
    const timer = pluginState.scheduleTimers.get(taskId);
    if (timer) {
        clearInterval(timer);
        pluginState.scheduleTimers.delete(taskId);
    }
}

/**
 * 设置定时任务
 */
export function setupScheduleTask(task: ScheduleTask): void {
    clearScheduleTimer(task.id);

    if (!task.enabled) {
        return;
    }

    const now = new Date();
    let nextRun = new Date();

    // 基础时间设置
    nextRun.setHours(task.cronHour, task.cronMinute, 0, 0);

    // 如果基础时间已经过去，先尝试加一天
    if (nextRun.getTime() <= now.getTime()) {
        nextRun.setDate(nextRun.getDate() + 1);
    }

    // 根据频率调整
    const freq = task.frequency || 'daily';

    if (freq === 'weekly') {
        const targetDay = task.frequencyValue ?? 0;
        while (nextRun.getDay() !== targetDay) {
            nextRun.setDate(nextRun.getDate() + 1);
        }
    } else if (freq === 'interval') {
        const intervalDays = task.frequencyValue || 3;
        if (task.lastRun) {
            const lastRunDate = new Date(task.lastRun);
            const potentialNext = new Date(lastRunDate);
            potentialNext.setDate(potentialNext.getDate() + intervalDays);
            potentialNext.setHours(task.cronHour, task.cronMinute, 0, 0);

            if (potentialNext.getTime() > now.getTime()) {
                nextRun = potentialNext;
            }
        }
    }

    const msUntilNextRun = nextRun.getTime() - now.getTime();

    pluginState.log('info', `定时任务 [${task.name}] (${freq}) 将在 ${nextRun.toLocaleString()} 执行`);

    const timer = setTimeout(() => {
        runScheduleTask(task);
        // 重新设置
        const currentTask = pluginState.config.scheduleTasks.find(t => t.id === task.id);
        if (currentTask && currentTask.enabled) {
            setupScheduleTask(currentTask);
        }
    }, msUntilNextRun);

    pluginState.scheduleTimers.set(task.id, timer);
}

/**
 * 执行定时任务
 */
export function runScheduleTask(task: ScheduleTask): void {
    pluginState.log('info', `开始执行定时任务: ${task.name}`);

    let accounts = task.accounts;
    if (accounts.length === 0) {
        accounts = getAllAccounts(pluginState.dataPath);
    }

    let totalFiles = 0;
    let totalSize = 0;
    const results: string[] = [];

    for (const account of accounts) {
        try {
            const result = executeClean(pluginState.dataPath, account, task.options);
            totalFiles += result.totalFiles;
            totalSize += result.totalSize;
            results.push(`${account}: ${result.totalFiles}文件, ${formatSize(result.totalSize)}`);
        } catch (e) {
            pluginState.log('error', `清理账号 ${account} 失败:`, e);
            results.push(`${account}: 失败`);
        }
    }

    // 更新任务状态
    const foundTask = pluginState.config.scheduleTasks.find(t => t.id === task.id);
    if (foundTask) {
        foundTask.lastRun = new Date().toISOString();
        foundTask.lastResult = `删除 ${totalFiles} 文件, 释放 ${formatSize(totalSize)}`;
        saveConfig();
    }

    pluginState.log('info', `定时任务 [${task.name}] 完成: 删除 ${totalFiles} 文件, 释放 ${formatSize(totalSize)}`);
}

/**
 * 初始化所有定时任务
 */
export function initAllScheduleTasks(): void {
    for (const task of pluginState.config.scheduleTasks) {
        setupScheduleTask(task);
    }
}

/**
 * 清理所有定时器 (用于插件卸载)
 */
export function clearAllScheduleTimers(): void {
    Array.from(pluginState.scheduleTimers.keys()).forEach(id => {
        clearScheduleTimer(id);
    });
}

/**
 * 创建新的定时任务
 */
export function createScheduleTask(body: Omit<ScheduleTask, 'id'> & { retainDays?: number }): ScheduleTask {
    const options = { ...pluginState.config.defaultOptions, ...(body.options || {}) };
    if (typeof body.retainDays === 'number') {
        options.retainDays = body.retainDays;
    }

    const task: ScheduleTask = {
        id: generateId(),
        name: body.name || '新任务',
        accounts: body.accounts || [],
        options,
        cronHour: body.cronHour ?? 3,
        cronMinute: body.cronMinute ?? 0,
        frequency: body.frequency || 'daily',
        frequencyValue: body.frequencyValue ?? 0,
        enabled: body.enabled ?? true,
    };

    pluginState.config.scheduleTasks.push(task);
    saveConfig();
    setupScheduleTask(task);

    return task;
}

/**
 * 更新定时任务
 */
export function updateScheduleTask(id: string, body: Partial<ScheduleTask>): ScheduleTask | null {
    const index = pluginState.config.scheduleTasks.findIndex(t => t.id === id);
    if (index < 0) return null;

    const task = pluginState.config.scheduleTasks[index];
    if (!task) return null;

    Object.assign(task, body);
    saveConfig();
    setupScheduleTask(task);

    return task;
}

/**
 * 删除定时任务
 */
export function deleteScheduleTask(id: string): boolean {
    const index = pluginState.config.scheduleTasks.findIndex(t => t.id === id);
    if (index < 0) return false;

    clearScheduleTimer(id);
    pluginState.config.scheduleTasks.splice(index, 1);
    saveConfig();

    return true;
}

/**
 * 立刻执行指定任务
 */
export function runTaskNow(id: string): { success: boolean; task?: ScheduleTask; totalFiles?: number; totalSize?: string } {
    const task = pluginState.config.scheduleTasks.find(t => t.id === id);
    if (!task) {
        return { success: false };
    }

    let accounts = task.accounts;
    if (accounts.length === 0) {
        accounts = getAllAccounts(pluginState.dataPath);
    }

    let totalFiles = 0;
    let totalSize = 0;

    for (const account of accounts) {
        const result = executeClean(pluginState.dataPath, account, task.options);
        totalFiles += result.totalFiles;
        totalSize += result.totalSize;
    }

    task.lastRun = new Date().toISOString();
    task.lastResult = `删除 ${totalFiles} 文件, 释放 ${formatSize(totalSize)}`;
    saveConfig();

    return { success: true, task, totalFiles, totalSize: formatSize(totalSize) };
}
