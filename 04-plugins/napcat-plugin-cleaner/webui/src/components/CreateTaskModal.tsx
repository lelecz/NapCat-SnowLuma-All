import { useState, useEffect } from 'react';
import { ScheduleTask, Account, CleanerConfig } from '../types';
import { X, Calendar, Clock, Save } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CreateTaskModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (task: Partial<ScheduleTask>) => Promise<void>;
    accounts: Account[];
    defaultConfig: CleanerConfig;
}

export function CreateTaskModal({ isOpen, onClose, onSave, accounts, defaultConfig }: CreateTaskModalProps) {
    const [name, setName] = useState('自动清理任务');
    const [cronHour, setCronHour] = useState(3);
    const [cronMinute, setCronMinute] = useState(0);
    const [frequency, setFrequency] = useState<'daily' | 'weekly' | 'interval'>('daily');
    const [frequencyValue, setFrequencyValue] = useState(1);
    const [selectedAccounts, setSelectedAccounts] = useState<string[]>(accounts.map(a => a.uin));
    const [config, setConfig] = useState<CleanerConfig>(defaultConfig);

    useEffect(() => {
        if (isOpen) {
            setConfig(defaultConfig);
            setSelectedAccounts(accounts.map(a => a.uin));
            setName('自动清理任务');
            setCronHour(3);
            setCronMinute(0);
        }
    }, [isOpen, defaultConfig, accounts]);

    const handleSave = async () => {
        if (!name.trim()) return;

        await onSave({
            name,
            cronHour,
            cronMinute,
            frequency,
            frequencyValue: frequency === 'daily' ? 0 : frequencyValue,
            retainDays: config.retainDays,
            options: config,
            accounts: selectedAccounts,
            enabled: true
        });
        onClose();
    };

    const toggleAccount = (uin: string) => {
        setSelectedAccounts(prev =>
            prev.includes(uin) ? prev.filter(x => x !== uin) : [...prev, uin]
        );
    };

    const configOptions = [
        { key: 'enableVideo', label: '清理视频' },
        { key: 'enableVideoThumb', label: '清理视频封面' },
        { key: 'enablePtt', label: '清理语音' },
        { key: 'enablePic', label: '清理图片缓存' },
        { key: 'enableFile', label: '清理收发文件' },
        { key: 'enableLog', label: '清理运行日志' },
        { key: 'enableLogCache', label: '清理日志缓存' },
        { key: 'enableNtTemp', label: '清理QQ临时文件' },
        { key: 'enableNapCatData', label: '清理 NapCat 核心数据' },
        { key: 'enableNapCatTemp', label: '清理 NapCat 临时文件' },
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={onClose}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="bg-white dark:bg-[#1e1e20] rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col border border-gray-100 dark:border-gray-800 relative z-10 [&::-webkit-scrollbar]:hidden [scrollbar-width:none] [-ms-overflow-style:none]"
                    >
                        <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800 sticky top-0 bg-white dark:bg-[#1e1e20] z-10">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">新建定时任务</h2>
                            <button
                                onClick={onClose}
                                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>


                        <div className="p-6 space-y-8">
                            {/* 基本信息 */}
                            <section>
                                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                                    <Clock className="w-4 h-4" /> 基本信息
                                </h3>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">任务名称</label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        placeholder="例如：每日自动清理"
                                        className="input-field"
                                    />
                                </div>
                            </section>

                            {/* 账号选择 */}
                            <section>
                                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">选择账号</h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    {accounts.map(acc => {
                                        const isSelected = selectedAccounts.includes(acc.uin);
                                        return (
                                            <div
                                                key={acc.uin}
                                                onClick={() => toggleAccount(acc.uin)}
                                                className={`
                                            p-3 rounded-lg border text-sm cursor-pointer flex items-center justify-between transition-all
                                            ${isSelected
                                                        ? 'bg-primary/5 border-primary text-primary font-medium'
                                                        : 'bg-gray-50 dark:bg-gray-800/50 border-transparent hover:border-gray-300 dark:hover:border-gray-600 text-gray-700 dark:text-gray-300'
                                                    }
                                        `}
                                            >
                                                <span>{acc.uin}</span>
                                                <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${isSelected ? 'bg-primary border-primary' : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800'}`}>
                                                    {isSelected && <span className="text-white text-xs">✓</span>}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </section>

                            {/* 执行计划 */}
                            <section>
                                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                                    <Calendar className="w-4 h-4" /> 执行计划
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">执行频率</label>
                                        <select
                                            value={frequency}
                                            onChange={e => setFrequency(e.target.value as any)}
                                            className="input-field cursor-pointer"
                                        >
                                            <option value="daily">每天</option>
                                            <option value="weekly">每周</option>
                                            <option value="interval">间隔天数</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">执行时间 (24h)</label>
                                        <div className="flex items-center gap-2">
                                            <input
                                                type="number"
                                                min="0"
                                                max="23"
                                                value={cronHour}
                                                onChange={e => setCronHour(parseInt(e.target.value))}
                                                className="input-field text-center font-mono"
                                                placeholder="HH"
                                            />
                                            <span className="text-gray-400 font-bold">:</span>
                                            <input
                                                type="number"
                                                min="0"
                                                max="59"
                                                value={cronMinute}
                                                onChange={e => setCronMinute(parseInt(e.target.value))}
                                                className="input-field text-center font-mono"
                                                placeholder="MM"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {frequency === 'weekly' && (
                                    <div className="mt-4">
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">选择星期</label>
                                        <div className="flex gap-2">
                                            {['日', '一', '二', '三', '四', '五', '六'].map((day, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => setFrequencyValue(idx)}
                                                    className={`
                                                flex-1 py-2 rounded-lg text-sm font-medium border transition-all
                                                ${frequencyValue === idx
                                                            ? 'bg-primary text-white border-primary shadow-sm'
                                                            : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
                                                        }
                                            `}
                                                >
                                                    {day}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {frequency === 'interval' && (
                                    <div className="mt-4 flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg border border-gray-100 dark:border-gray-800">
                                        <span>每隔</span>
                                        <input
                                            type="number"
                                            min="1"
                                            max="24"
                                            value={frequencyValue}
                                            onChange={(e) => {
                                                let val = parseInt(e.target.value) || 1;
                                                if (val > 24) val = 24; // 超过24天自动截断为24。以防止schedule-service.ts中的msUntilNextRun出现int32溢出
                                                setFrequencyValue(val);
                                            }}
                                            className="w-20 input-field text-center py-1.5"
                                        />
                                        <span>天执行一次</span>
                                    </div>
                                )}
                            </section>

                            {/* 清理配置 */}
                            <section>
                                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">清理配置</h3>

                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">文件保留天数 (0表示不保留)</label>
                                    <input
                                        type="number"
                                        min="0"
                                        max="365"
                                        value={config.retainDays}
                                        onChange={e => setConfig({ ...config, retainDays: parseInt(e.target.value) || 0 })}
                                        className="input-field font-mono"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    {configOptions.map((opt) => (
                                        <label key={opt.key} className="flex items-center p-3 rounded-lg border border-gray-100 dark:border-gray-800 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                            <input
                                                type="checkbox"
                                                checked={!!config[opt.key as keyof CleanerConfig]}
                                                onChange={(e) => setConfig({ ...config, [opt.key]: e.target.checked })}
                                                className="w-4 h-4 text-primary rounded border-gray-300 focus:ring-primary mr-3"
                                            />
                                            <span className="text-sm text-gray-700 dark:text-gray-300">{opt.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </section>
                        </div>

                        <div className="p-6 border-t border-gray-100 dark:border-gray-800 flex justify-end gap-3 bg-white dark:bg-[#1e1e20] sticky bottom-0 rounded-b-xl z-20">
                            <button
                                onClick={onClose}
                                className="btn btn-secondary"
                            >
                                取消
                            </button>
                            <button
                                onClick={handleSave}
                                className="btn btn-primary"
                            >
                                <Save className="w-4 h-4" />
                                保存任务
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
