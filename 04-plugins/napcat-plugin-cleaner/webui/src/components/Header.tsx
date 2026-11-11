interface HeaderProps {
    title: string;
    description?: string;
    actions?: React.ReactNode;
}

export function Header({ title, description, actions }: HeaderProps) {
    return (
        <header className="sticky top-0 z-20 bg-[#f8f9fa]/80 dark:bg-[#0c0c0e]/80 backdrop-blur-md px-8 py-6 mb-2 flex items-center justify-between border-b border-transparent transition-all">
            <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">{title}</h1>
                {description && <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{description}</p>}
            </div>
            {actions && <div className="flex gap-3">{actions}</div>}
        </header>
    );
}
