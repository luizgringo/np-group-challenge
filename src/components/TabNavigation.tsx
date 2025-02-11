import { TABS } from '../constants/tabs';

interface TabNavigationProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
}

export function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
    return (
        <div className="flex justify-between mb-8 bg-[#f1f4f8] p-2 rounded-lg">
            {TABS.map((tab) => (
                <button
                    key={tab}
                    type="button"
                    onClick={() => onTabChange(tab.toLowerCase())}
                    className={`flex-1 py-2 px-4 text-sm font-medium rounded-lg transition-colors ${
                        activeTab === tab.toLowerCase()
                            ? 'bg-white text-gray-900 shadow-sm'
                            : 'text-gray-500 hover:text-gray-700'
                    }`}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
} 