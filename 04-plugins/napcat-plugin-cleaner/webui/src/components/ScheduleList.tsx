import { ScheduleTask } from '../types';
import { Trash2, Play, Pause, Clock, Calendar, CheckCircle2, Timer, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ScheduleListProps {
    schedules: ScheduleTask[];
    onDelete: (id: string) => void;
    onToggle: (id: string, enabled: boolean) => void;
    onRun: (id: string) => void;
    onCreate: () => void;
}

export function ScheduleList({ schedules, onDelete, onToggle, onRun, onCreate }: ScheduleListProps) {
    const getFrequencyText = (task: ScheduleTask) => {
        if (task.frequency === 'weekly') {
            const days = ['日', '一', '二', '三', '四', '五', '六'];
            return `每周${days[task.frequencyValue] || ''}`;
        }
        if (task.frequency === 'interval') {
            return `每 ${task.frequencyValue} 天`;
        }
        return '每天';
    };

    if (schedules.length === 0) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white dark:bg-[#1e1e20] rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm min-h-[400px] flex flex-col items-center justify-center text-center p-8"
            >
                <div className="bg-primary/5 dark:bg-primary/10 p-6 rounded-full mb-6 ring-1 ring-primary/20">
                    <Timer className="w-12 h-12 text-primary/60" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">暂无定时任务</h3>
                <p className="text-sm text-gray-500 mb-8 max-w-sm mx-auto leading-relaxed">
                    创建定时任务，让清理工作自动化运行。您可以设置每天、每周或按间隔自动清理指定账号。
                </p>
                <button
                    onClick={onCreate}
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 gap-2 bg-primary text-white hover:bg-[#e05a80] shadow-lg shadow-primary/25 hover:shadow-primary/40 active:scale-[0.98]"
                >
                    <Plus className="w-4 h-4" />
                    创建第一个任务
                </button>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="h-full flex flex-col overflow-hidden bg-white dark:bg-[#1e1e20] rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm"
        >
            {/* Header */}
            <div className="flex-shrink-0 px-6 py-5 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-white dark:bg-[#1e1e20] z-10">
                <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                        <Timer className="w-5 h-5 text-primary" />
                        定时任务
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 ml-7">
                        共 {schedules.length} 个任务，{schedules.filter(s => s.enabled).length} 个运行中
                    </p>
                </div>
                <button
                    onClick={onCreate}
                    className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 gap-2 bg-primary text-white hover:bg-[#e05a80] shadow-md shadow-primary/20 hover:shadow-primary/30 active:scale-[0.98]"
                >
                    <Plus className="w-4 h-4" />
                    新建任务
                </button>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 [&::-webkit-scrollbar]:hidden [scrollbar-width:none] [-ms-overflow-style:none]">
                <AnimatePresence>
                    {schedules.map((task) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            key={task.id}
                            className={`
                            group relative rounded-xl border p-5 transition-all duration-200
                            ${task.enabled
                                    ? 'bg-white dark:bg-[#1e1e20] border-gray-200 dark:border-gray-700 hover:border-primary/30 hover:shadow-md hover:shadow-gray-100 dark:hover:shadow-none'
                                    : 'bg-gray-50/50 dark:bg-gray-800/20 border-gray-100 dark:border-gray-800'
                                }
                        `}
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex items-start gap-4">
                                    <div className={`
                                    mt-1 p-2.5 rounded-xl transition-colors
                                    ${task.enabled
                                            ? 'bg-primary/10 text-primary'
                                            : 'bg-gray-200/50 dark:bg-gray-700/50 text-gray-400'
                                        }
                                `}>
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-1.5">
                                            <h4 className={`font-bold text-base ${task.enabled ? 'text-gray-900 dark:text-gray-100' : 'text-gray-500 dark:text-gray-500'}`}>
                                                {task.name}
                                            </h4>
                                            <span className={`
                                            text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider font-bold border
                                            ${task.enabled
                                                    ? 'bg-green-50 text-green-600 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-900/30'
                                                    : 'bg-gray-100 text-gray-500 border-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700'
                                                }
                                        `}>
                                                {task.enabled ? '运行中' : '已暂停'}
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                                            <span className="flex items-center gap-1.5 bg-gray-50 dark:bg-gray-800/50 px-2 py-1 rounded-md border border-gray-100 dark:border-gray-800">
                                                <Calendar className="w-3.5 h-3.5 text-gray-400" />
                                                <span className="font-medium">{getFrequencyText(task)}</span>
                                                <span className="font-mono text-gray-400">|</span>
                                                <span className="font-mono">{task.cronHour}:{task.cronMinute.toString().padStart(2, '0')}</span>
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <span className="text-xs text-gray-400">保留</span>
                                                <span className="font-mono font-medium text-gray-700 dark:text-gray-300">{task.options.retainDays}</span>
                                                <span className="text-xs text-gray-400">天</span>
                                            </span>
                                        </div>

                                        <div className="mt-3 text-xs text-gray-400 flex items-center gap-1.5">
                                            <CheckCircle2 className="w-3 h-3" />
                                            上次运行: <span className="font-mono">{task.lastRun ? new Date(task.lastRun).toLocaleString() : '从未运行'}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                    <button
                                        onClick={() => onRun(task.id)}
                                        className="p-2 text-gray-500 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                                        title="立即运行一次"
                                    >
                                        <Play className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => onToggle(task.id, !task.enabled)}
                                        className="p-2 text-gray-500 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                                        title={task.enabled ? '暂停任务' : '启用任务'}
                                    >
                                        {task.enabled ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                                    </button>
                                    <div className="w-px h-4 bg-gray-200 dark:bg-gray-700 mx-1"></div>
                                    <div
                                        onClick={() => onDelete(task.id)}
                                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                                        title="删除任务"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}
