import { Account } from '../types';
import { User, Check, Search, Filter } from 'lucide-react';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccountListProps {
    accounts: Account[];
    selectedAccounts: string[];
    onToggleAccount: (uin: string) => void;
}

export function AccountList({ accounts, selectedAccounts, onToggleAccount }: AccountListProps) {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredAccounts = useMemo(() => {
        return accounts.filter(acc =>
            acc.uin.includes(searchTerm)
        );
    }, [accounts, searchTerm]);

    const cardStyles = "bg-white dark:bg-[#1e1e20] rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm";

    if (accounts.length === 0) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`${cardStyles} p-6 flex flex-col items-center justify-center text-center h-full`}
            >
                <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full mb-3">
                    <User className="w-6 h-6 text-gray-400" />
                </div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">无账号</h3>
                <p className="text-xs text-gray-500 mt-1">未检测到登录账号</p>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`${cardStyles} flex flex-col h-full overflow-hidden`}
        >
            {/* Header */}
            <div className="flex-shrink-0 px-5 py-4 border-b border-gray-100 dark:border-gray-800">
                <div className="flex items-center justify-between mb-3">
                    <div>
                        <h3 className="font-bold text-gray-900 dark:text-gray-100 text-base">账号列表</h3>
                        <p className="text-xs text-gray-500 mt-0.5">选择目标账号进行清理</p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 text-xs px-2 py-1 rounded-md text-gray-500 font-mono">
                        {selectedAccounts.length}/{accounts.length}
                    </div>
                </div>

                {/* Search Bar */}
                <div className="relative">
                    <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                        type="text"
                        placeholder="搜索账号..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-gray-50 dark:bg-gray-800/50 border border-transparent focus:bg-white dark:focus:bg-gray-800 border-gray-100 dark:border-gray-800 focus:border-primary/20 rounded-lg pl-9 pr-3 py-1.5 text-xs text-gray-900 dark:text-gray-100 placeholder-gray-400 transition-all outline-none"
                    />
                </div>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto min-h-0 [&::-webkit-scrollbar]:hidden [scrollbar-width:none] [-ms-overflow-style:none]">
                {filteredAccounts.length > 0 ? (
                    <div className="divide-y divide-gray-50 dark:divide-gray-800/30">
                        <AnimatePresence>
                            {filteredAccounts.map((acc) => {
                                const isSelected = selectedAccounts.includes(acc.uin);
                                return (
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        key={acc.uin}
                                        onClick={() => onToggleAccount(acc.uin)}
                                        className={`
                                            group flex items-center px-5 py-3 cursor-pointer transition-colors relative
                                            ${isSelected
                                                ? 'bg-primary/5'
                                                : 'hover:bg-gray-50 dark:hover:bg-gray-800/30'
                                            }
                                        `}
                                    >
                                        {/* Selection Indicator Bar */}
                                        {isSelected && (
                                            <motion.div
                                                layoutId="activeBar"
                                                className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary"
                                            />
                                        )}

                                        {/* Avatar */}
                                        <div className={`
                                        w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center mr-3 transition-colors text-sm font-medium
                                        ${isSelected
                                                ? 'bg-primary text-white shadow-sm shadow-primary/20'
                                                : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 group-hover:bg-white group-hover:shadow-sm dark:group-hover:bg-gray-700'
                                            }
                                    `}>
                                            <User className="w-4 h-4" />
                                        </div>

                                        {/* Info */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2">
                                                <span className={`text-sm font-medium font-mono truncate transition-colors ${isSelected ? 'text-primary' : 'text-gray-700 dark:text-gray-200'}`}>
                                                    {acc.uin}
                                                </span>
                                                {acc.isCurrent && (
                                                    <span className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-[10px] px-1.5 py-0.5 rounded-full font-medium">当前</span>
                                                )}
                                            </div>
                                            <div className="text-xs text-gray-400 mt-0.5 font-mono">
                                                占用: {acc.stats.totalSize}
                                            </div>
                                        </div>

                                        {/* Checkbox Visual */}
                                        <div className={`
                                        w-5 h-5 rounded-full border flex items-center justify-center transition-all ml-2
                                        ${isSelected
                                                ? 'bg-primary border-primary text-white scale-100 opacity-100'
                                                : 'border-gray-200 dark:border-gray-700 bg-transparent text-transparent scale-90 opacity-0 group-hover:opacity-50'
                                            }
                                    `}>
                                            <Check className="w-3 h-3" strokeWidth={3} />
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center h-40 text-gray-400">
                        <Filter className="w-8 h-8 mb-2 opacity-20" />
                        <span className="text-xs">未找到匹配账号</span>
                    </div>
                )}
            </div>

            {/* Footer gradient for visual overflow hint */}
            <div className="h-4 bg-gradient-to-t from-white dark:from-[#1e1e20] to-transparent pointer-events-none absolute bottom-0 left-0 right-0"></div>
        </motion.div>
    );
}
