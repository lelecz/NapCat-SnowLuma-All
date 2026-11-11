import { ReactNode } from 'react';
import { Sidebar, TabId } from './Sidebar';

interface LayoutProps {
    children: ReactNode;
    activeTab: TabId;
    onTabChange: (tab: TabId) => void;
    version?: string;
}

export function Layout({ children, activeTab, onTabChange, version }: LayoutProps) {
    return (
        <div className="flex h-full min-h-0 overflow-hidden bg-[#f8f9fa] dark:bg-[#0c0c0e] text-gray-900 dark:text-gray-100 font-sans selection:bg-primary/20 selection:text-primary">
            <Sidebar activeTab={activeTab} onTabChange={onTabChange} version={version} />

            <div className="flex-1 flex flex-col min-h-0 overflow-hidden relative">
                {children}
            </div>
        </div>
    );
}
