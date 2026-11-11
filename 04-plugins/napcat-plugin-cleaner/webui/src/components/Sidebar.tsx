import { Eraser, LayoutDashboard, Clock, Settings, Github, HardDrive } from 'lucide-react';

export type TabId = 'dashboard' | 'files' | 'tasks' | 'settings';

interface SidebarProps {
    activeTab: TabId;
    onTabChange: (tab: TabId) => void;
    version?: string;
}

export function Sidebar({ activeTab, onTabChange, version }: SidebarProps) {
    const navItems = [
        { id: 'dashboard' as const, label: '概览', icon: LayoutDashboard },
        { id: 'files' as const, label: '文件管理', icon: HardDrive },
        { id: 'tasks' as const, label: '定时任务', icon: Clock },
        { id: 'settings' as const, label: '配置', icon: Settings },
    ];

    return (
        <aside className="w-64 flex-shrink-0 bg-white dark:bg-[#1a1b1d] border-r border-gray-200 dark:border-gray-800 flex flex-col z-10 transition-all duration-300">
            {/* Logo */}
            <div className="h-16 flex items-center px-6 mb-2">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center text-white dark:text-black shadow-sm">
                        <Eraser className="w-5 h-5" />
                    </div>
                    <div>
                        <h1 className="font-bold text-base leading-tight tracking-tight text-gray-900 dark:text-white">Cleaner</h1>
                        <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">NapCat Plugin</p>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-3 py-2 space-y-1 overflow-y-auto custom-scrollbar">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.id;
                    return (
                        <div
                            key={item.id}
                            onClick={() => onTabChange(item.id)}
                            className={`
                                sidebar-item group flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer mb-0.5 mx-2 text-sm font-medium transition-all duration-200
                                ${isActive
                                    ? 'bg-primary/10 text-primary'
                                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'
                                }
                            `}
                        >
                            <Icon className={`w-5 h-5 transition-colors ${isActive ? 'text-primary' : 'text-gray-500 group-hover:text-gray-700 dark:text-gray-500 dark:group-hover:text-gray-300'}`} />
                            <span>{item.label}</span>
                        </div>
                    );
                })}
            </nav>

            {/* Footer */}
            <div className="p-4 border-t border-gray-100 dark:border-gray-800">
                <a
                    href="https://github.com/napneko/napcat-plugin-cleaner"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-3 py-2 text-xs text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 transition-colors rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50"
                >
                    <Github className="w-4 h-4" />
                    <span>插件主页</span>
                    <span className="ml-auto opacity-50">v{version}</span>
                </a>
            </div>
        </aside>
    );
}
