import { useState, useEffect } from 'react';
import { Account, CATEGORY_LABELS } from '../types';
import { HardDrive, ChevronDown, PieChart } from 'lucide-react';

interface StatsTableProps {
    accounts: Account[];
    selectedAccounts: string[];
    retainDays: number;
    className?: string;
}

export function StatsTable({ accounts, selectedAccounts, retainDays, className = '' }: StatsTableProps) {
    // Determine which account to show stats for
    // If we have selected accounts, show the first one by default, or the one previously viewed if it's still selected
    const [viewingUin, setViewingUin] = useState<string>('');

    // Update viewing UIN when selection changes
    useEffect(() => {
        if (selectedAccounts.length > 0) {
            if (!selectedAccounts.includes(viewingUin)) {
                setViewingUin(selectedAccounts[0]);
            }
        } else {
            setViewingUin('');
        }
    }, [selectedAccounts, viewingUin]);

    // Common card styles to replicate Card component look but allow custom layout
    const cardStyles = `bg-white dark:bg-[#1e1e20] rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm ${className}`;

    if (selectedAccounts.length === 0) {
        return (
            <div className={`${cardStyles} flex flex-col items-center justify-center text-center min-h-[400px]`}>
                <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-full mb-4">
                    <HardDrive className="w-8 h-8 text-gray-300 dark:text-gray-600" />
                </div>
                <div className="text-gray-500 dark:text-gray-400 font-medium">未选择账号</div>
                <div className="text-xs text-gray-400 mt-1">请在右侧选择账号以查看详细统计</div>
            </div>
        );
    }

    const viewingAccount = accounts.find(a => a.uin === viewingUin);

    return (
        <div className={`${cardStyles} flex flex-col h-full overflow-hidden`}>
            {/* Header - Fixed */}
            <div className="flex-shrink-0 px-6 pt-6 pb-2 bg-white dark:bg-[#1e1e20] z-20">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                            <PieChart className="w-5 h-5 text-primary" />
                            空间占用统计
                        </h3>
                        <p className="text-xs text-gray-500 mt-1 ml-7">
                            保留策略: <span className="font-mono text-primary font-bold">{retainDays}</span> 天
                        </p>
                    </div>
                    
                    {/* Account Selector */}
                    <div className="relative group">
                        <div className="relative">
                            <select 
                                value={viewingUin}
                                onChange={(e) => setViewingUin(e.target.value)}
                                className="appearance-none pl-4 pr-10 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 cursor-pointer min-w-[160px] hover:bg-gray-100 dark:hover:bg-gray-700 transition-all shadow-sm
                                [&>option]:bg-white [&>option]:dark:bg-[#1e1e20] [&>option]:text-gray-900 [&>option]:dark:text-gray-200 [&>option]:py-2"
                            >
                                {selectedAccounts.map(uin => (
                                    <option key={uin} value={uin} className="py-2">账号: {uin}</option>
                                ))}
                            </select>
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center w-5 h-5 bg-white dark:bg-gray-600 rounded-md shadow-sm border border-gray-100 dark:border-gray-500">
                                <ChevronDown className="w-3 h-3 text-gray-400 dark:text-gray-300" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Summary Stats - Soft Cards Design */}
                {viewingAccount && (
                    <div className="grid grid-cols-3 gap-3 pb-6">
                        <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-800/50">
                            <span className="text-[10px] text-gray-400 font-medium mb-1 block">总文件数</span>
                            <span className="text-xl font-bold text-gray-900 dark:text-white font-mono tracking-tight">{viewingAccount.stats.totalFiles}</span>
                        </div>
                        <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-800/50">
                            <span className="text-[10px] text-gray-400 font-medium mb-1 block">占用空间</span>
                            <span className="text-xl font-bold text-gray-900 dark:text-white font-mono tracking-tight">{viewingAccount.stats.totalSize}</span>
                        </div>
                        <div className="p-4 bg-primary/5 dark:bg-primary/10 rounded-2xl border border-primary/10">
                            <span className="text-[10px] text-primary/60 font-medium mb-1 block">预计释放</span>
                            <span className="text-xl font-bold text-primary font-mono tracking-tight">{viewingAccount.stats.estimatedCleanSize}</span>
                        </div>
                    </div>
                )}
            </div>

            {/* Stats Content */}
            {viewingAccount ? (
                <div className="flex flex-col flex-1 min-h-0 relative">
                    {/* Detailed Table - Scrollable with hidden scrollbar */}
                    <div className="flex-1 overflow-y-auto px-6 [&::-webkit-scrollbar]:hidden [scrollbar-width:none] [-ms-overflow-style:none]">
                        <table className="w-full text-left border-collapse">
                            <thead className="sticky top-0 bg-white dark:bg-[#1e1e20] z-10 shadow-[0_1px_0_0_rgba(0,0,0,0.03)] dark:shadow-[0_1px_0_0_rgba(255,255,255,0.05)]">
                                <tr>
                                    <th className="py-4 text-xs font-medium text-gray-400 font-normal">分类</th>
                                    <th className="py-4 text-right text-xs font-medium text-gray-400 font-normal">文件数</th>
                                    <th className="py-4 text-right text-xs font-medium text-gray-400 font-normal">大小</th>
                                    <th className="py-4 text-right text-xs font-medium text-primary/80 font-normal">可清理</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50 dark:divide-gray-800/30">
                                {Object.entries(CATEGORY_LABELS).map(([key, label]) => {
                                    const stats = viewingAccount.stats.categories[key] || { files: 0, size: '0 B', estimatedCleanSize: '0 B' };
                                    const isZero = stats.files === 0 && stats.size === '0 B';
                                    
                                    return (
                                        <tr key={key} className="group hover:bg-gray-50/50 dark:hover:bg-gray-800/20 transition-colors">
                                            <td className="py-3.5 text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-3">
                                                <div className={`w-2 h-2 rounded-full transition-colors ${isZero ? 'bg-gray-100 dark:bg-gray-800' : 'bg-primary/20 group-hover:bg-primary'}`}></div>
                                                <span className={isZero ? 'text-gray-400' : ''}>{label}</span>
                                            </td>
                                            <td className={`py-3.5 text-right text-sm font-mono ${isZero ? 'text-gray-300 dark:text-gray-700' : 'text-gray-600 dark:text-gray-400'}`}>{stats.files}</td>
                                            <td className={`py-3.5 text-right text-sm font-medium font-mono ${isZero ? 'text-gray-300 dark:text-gray-700' : 'text-gray-900 dark:text-gray-100'}`}>{stats.size}</td>
                                            <td className={`py-3.5 text-right text-sm font-medium font-mono ${isZero ? 'text-gray-300 dark:text-gray-700' : 'text-primary'}`}>{stats.estimatedCleanSize}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : (
                <div className="flex-1 flex items-center justify-center text-gray-400">
                    无法加载该账号数据
                </div>
            )}
        </div>
    );
}
