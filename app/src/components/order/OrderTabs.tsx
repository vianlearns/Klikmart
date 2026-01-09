interface Tab {
    id: string;
    label: string;
    count?: number;
}

interface OrderTabsProps {
    tabs: Tab[];
    activeTab: string;
    onTabChange: (tabId: string) => void;
}

export function OrderTabs({ tabs, activeTab, onTabChange }: OrderTabsProps) {
    return (
        <div className="flex border-b border-gray-200 dark:border-white/10 w-full overflow-x-auto hide-scrollbar">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => onTabChange(tab.id)}
                    className={`flex-shrink-0 px-4 py-3 relative text-sm font-medium whitespace-nowrap transition-colors ${activeTab === tab.id
                            ? 'text-primary font-bold'
                            : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                        }`}
                >
                    <span className="flex items-center gap-1">
                        {tab.label}
                        {tab.count !== undefined && tab.count > 0 && (
                            <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${activeTab === tab.id
                                    ? 'bg-primary text-white'
                                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                                }`}>
                                {tab.count}
                            </span>
                        )}
                    </span>
                    {activeTab === tab.id && (
                        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-primary rounded-t-full" />
                    )}
                </button>
            ))}
        </div>
    );
}
