import { CleanerConfig } from '../types';
import { Save, Info, Settings, Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface ConfigPanelProps {
    config: CleanerConfig;
    onChange: (newConfig: CleanerConfig) => void;
    onSave: () => void;
}

export function ConfigPanel({ config, onChange, onSave }: ConfigPanelProps) {
    const handleChange = (key: keyof CleanerConfig, value: any) => {
        onChange({ ...config, [key]: value });
    };

    const groups = [
        {
            title: '媒体文件',
            description: '清理聊天过程中产生的媒体缓存',
            items: [
                { key: 'enableVideo', label: '短视频' },
                { key: 'enableVideoThumb', label: '视频封面' },
                { key: 'enablePic', label: '图片缓存' },
                { key: 'enablePtt', label: '语音消息' },
            ]
        },
        {
            title: '系统数据',
            description: '清理运行日志及临时文件',
            items: [
                { key: 'enableFile', label: '收发文件' },
                { key: 'enableLog', label: '运行日志' },
                { key: 'enableLogCache', label: '日志缓存' },
                { key: 'enableNtTemp', label: 'QQ临时文件' },
            ]
        },
        {
            title: '核心数据',
            description: 'NapCat 核心数据 (请谨慎操作)',
            items: [
                { key: 'enableNapCatData', label: 'NapCat 核心数据' },
                { key: 'enableNapCatTemp', label: 'NapCat 临时文件' },
            ]
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-[#1e1e20] rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden flex flex-col h-full"
        >
            {/* Header */}
            <div className="flex-shrink-0 px-6 py-5 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-white dark:bg-[#1e1e20] z-10">
                <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                        <Settings className="w-5 h-5 text-primary" />
                        清理配置
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 ml-7">
                        配置全局默认清理策略
                    </p>
                </div>
                <button
                    onClick={onSave}
                    className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 gap-2 bg-white dark:bg-[#252528] text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 active:scale-[0.98]"
                >
                    <Save className="w-4 h-4" />
                    保存配置
                </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8 [&::-webkit-scrollbar]:hidden [scrollbar-width:none] [-ms-overflow-style:none]">

                {/* Retention Policy Card */}
                <div className="bg-gradient-to-r from-primary/5 to-transparent p-5 rounded-xl border border-primary/10">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                            <div className="font-bold text-gray-900 dark:text-gray-100 text-sm mb-1 flex items-center gap-2">
                                <Info className="w-4 h-4 text-primary" />
                                文件保留策略
                            </div>
                            <div className="text-xs text-gray-500">
                                仅删除早于指定天数的文件，设置为 0 则不保留任何文件
                            </div>
                        </div>
                        <div className="flex items-center gap-3 bg-white dark:bg-[#1e1e20] p-1.5 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                            <input
                                type="number"
                                min="0"
                                max="365"
                                value={config.retainDays}
                                onChange={(e) => handleChange('retainDays', parseInt(e.target.value) || 0)}
                                className="w-16 text-center font-mono font-bold text-lg bg-transparent border-none focus:ring-0 text-gray-900 dark:text-white p-0"
                            />
                            <span className="text-sm font-medium text-gray-500 pr-2 border-l border-gray-100 dark:border-gray-700 pl-3">天</span>
                        </div>
                    </div>
                </div>

                {/* Config Groups */}
                <div className="grid gap-8">
                    {groups.map((group, groupIndex) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: groupIndex * 0.1 }}
                            key={group.title}
                        >
                            <div className="mb-4">
                                <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100">{group.title}</h4>
                                <p className="text-xs text-gray-500 mt-0.5">{group.description}</p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {group.items.map((opt) => {
                                    const isChecked = !!config[opt.key as keyof CleanerConfig];
                                    return (
                                        <label
                                            key={opt.key}
                                            className={`
                                                group flex items-center p-3.5 rounded-xl border cursor-pointer transition-all duration-200
                                                ${isChecked
                                                    ? 'bg-primary/5 border-primary shadow-sm shadow-primary/5'
                                                    : 'bg-white dark:bg-[#252528] border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                                                }
                                            `}
                                        >
                                            <div className="relative flex items-center">
                                                <input
                                                    type="checkbox"
                                                    checked={isChecked}
                                                    onChange={(e) => handleChange(opt.key as keyof CleanerConfig, e.target.checked)}
                                                    className="peer sr-only"
                                                />
                                                <div className={`
                                                    w-5 h-5 rounded-md border flex items-center justify-center transition-all duration-200
                                                    ${isChecked
                                                        ? 'bg-primary border-primary text-white'
                                                        : 'bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-transparent group-hover:border-primary/50'
                                                    }
                                                `}>
                                                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                                                </div>
                                            </div>
                                            <span className={`ml-3 text-sm font-medium transition-colors ${isChecked ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}>
                                                {opt.label}
                                            </span>
                                        </label>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
