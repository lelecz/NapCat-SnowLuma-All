import { ReactNode } from 'react';

interface CardProps {
    title?: ReactNode;
    subtitle?: ReactNode;
    children: ReactNode;
    className?: string;
    actions?: ReactNode;
}

export function Card({ title, subtitle, children, className = '', actions }: CardProps) {
    return (
        <div className={`bg-white dark:bg-[#1e1e20] rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm ${className}`}>
            {(title || actions) && (
                <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
                    <div>
                        {title && <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-base">{title}</h3>}
                        {subtitle && <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{subtitle}</p>}
                    </div>
                    {actions && <div className="flex items-center gap-2">{actions}</div>}
                </div>
            )}
            <div className="p-6">
                {children}
            </div>
        </div>
    );
}
