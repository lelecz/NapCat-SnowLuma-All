import { useState, useEffect, useCallback } from 'react';
import { useTheme } from './hooks/useTheme';
import { request } from './utils/api';
import { Account, CleanerConfig, ScheduleTask } from './types';
import { Card } from './components/ui/Card';
import { Layout } from './components/Layout';
import { Header } from './components/Header';
import { AccountList } from './components/AccountList';
import { StatsTable } from './components/StatsTable';
import { ConfigPanel } from './components/ConfigPanel';
import { ScheduleList } from './components/ScheduleList';
import { CreateTaskModal } from './components/CreateTaskModal';
import { ToastContainer, ToastMessage, ToastType } from './components/ui/Toast';
import { ConfirmModal } from './components/ui/ConfirmModal';
import { Eraser, RefreshCw, Settings, Info, ArrowRight, ShieldCheck, Clock, HardDrive } from 'lucide-react';
import { TabId } from './components/Sidebar';

function App() {
    useTheme();
    // Data States
    const [loading, setLoading] = useState(true);
    const [accounts, setAccounts] = useState<Account[]>([]);
    const [selectedAccounts, setSelectedAccounts] = useState<string[]>([]);
    const [config, setConfig] = useState<CleanerConfig>({
        enableVideo: true,
        enableVideoThumb: true,
        enablePtt: true,
        enablePic: true,
        enableFile: false,
        enableLog: true,
        enableLogCache: true,
        enableNtTemp: true,
        enableNapCatData: false,
        enableNapCatTemp: true,
        retainDays: 7
    });
    const [schedules, setSchedules] = useState<ScheduleTask[]>([]);

    // UI States
    const [activeTab, setActiveTab] = useState<TabId>('dashboard');
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [cleaning, setCleaning] = useState(false);

    // Toast & Confirm States
    const [toasts, setToasts] = useState<ToastMessage[]>([]);
    const [confirmModal, setConfirmModal] = useState({
        isOpen: false,
        title: '',
        description: '',
        onConfirm: () => { },
        type: 'danger' as 'danger' | 'info'
    });

    // Toast Helpers
    const showToast = useCallback((text: string, type: ToastType = 'info') => {
        const id = Date.now().toString() + Math.random().toString();
        setToasts(prev => [...prev, { id, text, type }]);
    }, []);

    const removeToast = useCallback((id: string) => {
        setToasts(prev => prev.filter(t => t.id !== id));
    }, []);

    // Confirm Helper
    const openConfirm = (title: string, description: string, onConfirm: () => void, type: 'danger' | 'info' = 'danger') => {
        setConfirmModal({ isOpen: true, title, description, onConfirm, type });
    };

    // Initial Data Fetch
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        try {
            const [accRes, configRes, schedRes] = await Promise.all([
                request<{ accounts: Account[], currentUin: string }>('/accounts'),
                request<{ defaultOptions: CleanerConfig }>('/config'),
                request<ScheduleTask[]>('/schedules')
            ]);

            if (accRes.code === 0) {
                setAccounts(accRes.data.accounts);
                if (selectedAccounts.length === 0 && accRes.data.accounts.length > 0) {
                    const current = accRes.data.accounts.find(a => a.isCurrent);
                    setSelectedAccounts(current ? [current.uin] : [accRes.data.accounts[0].uin]);
                }
            }

            if (configRes.code === 0) setConfig(configRes.data.defaultOptions);
            if (schedRes.code === 0) setSchedules(schedRes.data);

        } catch (e) {
            showToast('数据加载失败，请检查网络或刷新页面', 'error');
        } finally {
            setLoading(false);
        }
    };

    // Re-fetch stats logic
    useEffect(() => {
        if (accounts.length > 0) {
            const timer = setTimeout(() => updateStats(), 500); // Debounce
            return () => clearTimeout(timer);
        }
    }, [config.retainDays, selectedAccounts]);

    const updateStats = async () => {
        if (selectedAccounts.length === 0) return;

        const newAccounts = [...accounts];
        for (const uin of selectedAccounts) {
            try {
                const res = await request<{ formattedStats: any }>(`/stats/${uin}?retainDays=${config.retainDays}`);
                if (res.code === 0) {
                    const idx = newAccounts.findIndex(a => a.uin === uin);
                    if (idx !== -1) {
                        newAccounts[idx] = { ...newAccounts[idx], stats: res.data.formattedStats };
                    }
                }
            } catch (e) {
                console.error(e);
            }
        }

        setAccounts(newAccounts);
    };

    const handleToggleAccount = (uin: string) => {
        setSelectedAccounts(prev =>
            prev.includes(uin) ? prev.filter(x => x !== uin) : [...prev, uin]
        );
    };

    const handleSaveDefaultConfig = async () => {
        try {
            await request('/config/options', {
                method: 'POST',
                body: JSON.stringify(config)
            });
            showToast('默认配置已保存', 'success');
        } catch (e) {
            showToast('保存配置失败', 'error');
        }
    };

    const handleClean = async () => {
        if (selectedAccounts.length === 0) {
            showToast('请先选择要清理的账号', 'error');
            return;
        }

        openConfirm(
            '确认立即清理？',
            `即将清理选中的 ${selectedAccounts.length} 个账号。此操作不可撤销，请确认文件保留策略无误。`,
            async () => {
                setCleaning(true);
                showToast('正在清理缓存文件，请稍候...', 'info');

                try {
                    const res = await request<{ totalSize: string }>('/clean', {
                        method: 'POST',
                        body: JSON.stringify({ accounts: selectedAccounts, options: config })
                    });

                    if (res.code === 0) {
                        showToast(`清理完成，释放空间: ${res.data.totalSize}`, 'success');
                        updateStats();
                    } else {
                        showToast(`清理失败: ${res.message}`, 'error');
                    }
                } catch (e) {
                    showToast('请求失败', 'error');
                } finally {
                    setCleaning(false);
                }
            },
            'info'
        );
    };

    const handleCreateTask = async (task: Partial<ScheduleTask>) => {
        try {
            await request('/schedules', {
                method: 'POST',
                body: JSON.stringify(task)
            });
            const res = await request<ScheduleTask[]>('/schedules');
            if (res.code === 0) {
                setSchedules(res.data);
                showToast('定时任务已添加', 'success');
                setIsCreateModalOpen(false);
            }
        } catch (e) {
            showToast('添加任务失败', 'error');
        }
    };

    const handleDeleteTask = (id: string) => {
        openConfirm(
            '删除定时任务',
            '确定要删除此定时任务吗？此操作无法撤销。',
            async () => {
                try {
                    await request(`/schedules/${id}`, { method: 'DELETE' });
                    setSchedules(prev => prev.filter(s => s.id !== id));
                    showToast('任务已删除', 'success');
                } catch (e) {
                    showToast('删除失败', 'error');
                }
            }
        );
    };

    const handleToggleTask = async (id: string, enabled: boolean) => {
        try {
            await request(`/schedules/${id}`, {
                method: 'POST',
                body: JSON.stringify({ enabled })
            });
            setSchedules(prev => prev.map(s => s.id === id ? { ...s, enabled } : s));
            showToast(enabled ? '任务已启用' : '任务已暂停', 'success');
        } catch (e) {
            showToast('更新状态失败', 'error');
        }
    };

    const handleRunTask = async (id: string) => {
        try {
            const res = await request(`/schedules/${id}/run`, { method: 'POST' });
            if (res.code === 0) {
                showToast('任务已触发', 'success');
                const schedRes = await request<ScheduleTask[]>('/schedules');
                if (schedRes.code === 0) setSchedules(schedRes.data);
            }
        } catch (e) {
            showToast('触发失败', 'error');
        }
    }

    if (loading && accounts.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#f3f4f6] dark:bg-[#09090b]">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-10 h-10 border-4 border-primary rounded-full border-t-transparent animate-spin"></div>
                    <p className="text-gray-500 font-medium animate-pulse">正在加载 NapCat 数据...</p>
                </div>
            </div>
        );
    }

    const pageTitles: Record<TabId, { title: string; desc: string }> = {
        dashboard: { title: '概览', desc: '查看插件运行状态' },
        files: { title: '文件管理', desc: '清理指定账号的缓存文件' },
        tasks: { title: '定时任务', desc: '自动化清理流程管理' },
        settings: { title: '插件设置', desc: '全局清理策略配置' }
    };

    return (
        <Layout
            activeTab={activeTab}
            onTabChange={setActiveTab}
            version={__APP_VERSION__}
        >

            <div className="flex flex-col h-full min-h-0">
                <Header
                    title={pageTitles[activeTab].title}
                    description={pageTitles[activeTab].desc}
                    actions={
                        <button
                            onClick={fetchData}
                            className="p-2 text-gray-500 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                            title="刷新数据"
                        >
                            <RefreshCw className="w-5 h-5" />
                        </button>
                    }
                />

                <div className={`px-4 md:px-8 pb-8 page-enter flex-1 min-h-0 ${activeTab === 'dashboard' ? 'overflow-y-auto custom-scrollbar' : 'overflow-hidden flex flex-col'
                    }`}>
                    {activeTab === 'dashboard' && (
                        <div className="max-w-5xl mx-auto space-y-6 w-full py-2">
                            {/* Welcome Card */}
                            <div className="relative overflow-hidden bg-white dark:bg-[#1e1e20] p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm group">
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <ShieldCheck className="w-32 h-32 text-primary rotate-12" />
                                </div>
                                <div className="relative z-10">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-3">
                                        欢迎使用 Cleaner
                                        <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">Plugin</span>
                                    </h2>
                                    <p className="text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
                                        这是一个专为 NapCat 设计的轻量级清理插件。您可以手动清理指定账号的缓存文件，或设置定时任务自动执行清理，释放您的磁盘空间。
                                    </p>
                                </div>
                            </div>

                            {/* Status Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Account Stats */}
                                <div className="bg-white dark:bg-[#1e1e20] rounded-2xl border border-gray-200 dark:border-gray-800 p-6 flex flex-col justify-between h-48 shadow-sm hover:shadow-md transition-shadow cursor-pointer group" onClick={() => setActiveTab('files')}>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">已检测账号</p>
                                            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mt-3 font-mono">{accounts.length}</h3>
                                        </div>
                                        <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-blue-500 group-hover:scale-110 transition-transform">
                                            <ShieldCheck className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <div className="flex items-center text-sm text-primary font-medium group-hover:underline">
                                        查看账号详情 <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>

                                {/* Task Stats */}
                                <div className="bg-white dark:bg-[#1e1e20] rounded-2xl border border-gray-200 dark:border-gray-800 p-6 flex flex-col justify-between h-48 shadow-sm hover:shadow-md transition-shadow cursor-pointer group" onClick={() => setActiveTab('tasks')}>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">定时任务</p>
                                            <div className="flex items-baseline gap-2 mt-3">
                                                <h3 className="text-4xl font-bold text-gray-900 dark:text-white font-mono">
                                                    {schedules.filter(s => s.enabled).length}
                                                </h3>
                                                <span className="text-sm font-medium text-gray-400">/ {schedules.length} 总计</span>
                                            </div>
                                        </div>
                                        <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-xl text-purple-500 group-hover:scale-110 transition-transform">
                                            <Clock className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <div className="flex items-center text-sm text-primary font-medium group-hover:underline">
                                        管理任务 <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>

                                {/* Quick Action */}
                                <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800/50 dark:to-[#1e1e20] rounded-2xl border border-gray-200 dark:border-gray-800 p-6 flex flex-col justify-between h-48 shadow-sm">
                                    <div>
                                        <h3 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                                            <HardDrive className="w-5 h-5 text-gray-400" />
                                            快速清理
                                        </h3>
                                        <p className="text-sm text-gray-500 leading-relaxed">
                                            立即前往文件管理页面，选择账号并释放空间。
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => setActiveTab('files')}
                                        className="w-full py-2.5 bg-primary hover:bg-[#e05a80] text-white rounded-lg font-bold transition-all shadow-lg shadow-primary/20 hover:shadow-primary/30 active:scale-[0.98] flex items-center justify-center gap-2"
                                    >
                                        前往清理
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'files' && (
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full min-h-0">
                            {/* Left Column - Stats (8/12 = 2/3) */}
                            <div className="lg:col-span-8 lg:h-full lg:min-h-0">
                                <StatsTable
                                    accounts={accounts}
                                    selectedAccounts={selectedAccounts}
                                    retainDays={config.retainDays}
                                    className="h-full"
                                />
                            </div>

                            {/* Right Column - Accounts & Actions (4/12 = 1/3) */}
                            <div className="lg:col-span-4 flex flex-col gap-4 lg:h-full lg:min-h-0">
                                {/* Account List - Takes remaining space */}
                                <div className="flex-1 min-h-0">
                                    <AccountList
                                        accounts={accounts}
                                        selectedAccounts={selectedAccounts}
                                        onToggleAccount={handleToggleAccount}
                                    />
                                </div>

                                {/* Cleanup Actions - Fixed height/content */}
                                <div className="flex-shrink-0">
                                    <Card
                                        title="清理操作"
                                        subtitle="执行清理与配置"
                                    >
                                        <div className="space-y-6">
                                            {/* Action Button */}
                                            <div>
                                                <p className="text-sm text-gray-500 mb-4">
                                                    将清理 <span className="text-primary font-bold">{selectedAccounts.length}</span> 个选中账号的文件。
                                                    <br />此操作不可撤销。
                                                </p>
                                                <button
                                                    onClick={handleClean}
                                                    disabled={cleaning || selectedAccounts.length === 0}
                                                    className={`
                                                    w-full py-3 rounded-lg font-bold text-white shadow-lg shadow-pink-500/20 transition-all transform active:scale-[0.98]
                                                    flex items-center justify-center gap-2
                                                    ${cleaning || selectedAccounts.length === 0
                                                            ? 'bg-gray-300 dark:bg-gray-700 cursor-not-allowed shadow-none'
                                                            : 'bg-primary hover:bg-[#e05a80]'
                                                        }
                                                `}
                                                >
                                                    {cleaning ? (
                                                        <>
                                                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                            <span>清理中...</span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Eraser className="w-4 h-4" />
                                                            <span>立即清理</span>
                                                        </>
                                                    )}
                                                </button>
                                            </div>

                                            {/* Config Summary & Link */}
                                            <div className="border-t border-gray-100 dark:border-gray-800 pt-4 space-y-3">
                                                <div className="flex justify-between items-center text-sm">
                                                    <span className="text-gray-500 flex items-center gap-1">
                                                        保留天数
                                                        <Info className="w-3 h-3 text-gray-400" />
                                                    </span>
                                                    <span className="font-mono font-bold text-gray-900 dark:text-gray-100">{config.retainDays} 天</span>
                                                </div>

                                                <button
                                                    onClick={() => setActiveTab('settings')}
                                                    className="w-full flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group mt-2"
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <Settings className="w-4 h-4 text-gray-500 group-hover:text-primary transition-colors" />
                                                        <div className="text-left">
                                                            <div className="text-sm font-medium text-gray-900 dark:text-gray-100">修改配置</div>
                                                        </div>
                                                    </div>
                                                    <div className="text-gray-400 group-hover:text-primary transition-colors text-lg">›</div>
                                                </button>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'tasks' && (
                        <div className="h-full min-h-0">
                            <ScheduleList
                                schedules={schedules}
                                onDelete={handleDeleteTask}
                                onToggle={handleToggleTask}
                                onRun={handleRunTask}
                                onCreate={() => setIsCreateModalOpen(true)}
                            />
                        </div>
                    )}

                    {activeTab === 'settings' && (
                        <div className="h-full min-h-0">
                            <ConfigPanel
                                config={config}
                                onChange={setConfig}
                                onSave={handleSaveDefaultConfig}
                            />
                        </div>
                    )}
                </div>
            </div>

            {/* Overlays */}
            <ToastContainer toasts={toasts} onRemove={removeToast} />

            <ConfirmModal
                isOpen={confirmModal.isOpen}
                onClose={() => setConfirmModal(prev => ({ ...prev, isOpen: false }))}
                onConfirm={confirmModal.onConfirm}
                title={confirmModal.title}
                description={confirmModal.description}
                type={confirmModal.type}
            />

            <CreateTaskModal
                isOpen={isCreateModalOpen}
                onClose={() => setIsCreateModalOpen(false)}
                onSave={handleCreateTask}
                accounts={accounts}
                defaultConfig={config}
            />
        </Layout>
    );
}

export default App;
