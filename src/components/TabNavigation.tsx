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
                    onClick={() => onTabChange(tab.toLowerCase().replace(' ', ''))}
                    className={`flex-1 mx-1 px-6 py-2 rounded-lg transition-colors ${
                        activeTab === tab.toLowerCase().replace(' ', '')
                            ? 'bg-white text-black font-bold'
                            : 'text-gray-600 hover:bg-gray-200 font-medium'
                    }`}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
} 