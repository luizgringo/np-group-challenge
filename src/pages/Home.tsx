import { useState } from 'react';
import { Featured, KPI, Layouts, Storyboards, Trending, DataViz } from '../components/TabContents';
import { SearchBar } from '../components';

type TabType = 'featured' | 'kpi' | 'layouts' | 'storyboards' | 'dataviz';

export default function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeTab, setActiveTab] = useState<TabType>('featured');

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const handleClearSearch = () => {
        setSearchTerm('');
    };

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-4 text-center">Library</h1>
            <p className="text-gray-600 text-center p-4">
                Browse to the assets needed to report and present analysis
            </p>

            <div className="flex justify-between mb-8 bg-[#f1f4f8] p-2 rounded-lg">
                {(['Featured', 'KPI', 'Layouts', 'Storyboards', 'Data Viz'] as const).map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab.toLowerCase().replace(' ', '') as TabType)}
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

            <div className="w-full mx-auto mb-8">
                <SearchBar
                    value={searchTerm}
                    onChange={handleSearch}
                    onClear={handleClearSearch}
                />
            </div>

            <div className="mt-4 mb-8">
                {activeTab === 'featured' && <Featured searchTerm={searchTerm} />}
                {activeTab === 'kpi' && <KPI searchTerm={searchTerm} />}
                {activeTab === 'layouts' && <Layouts searchTerm={searchTerm} />}
                {activeTab === 'storyboards' && <Storyboards searchTerm={searchTerm} />}
                {activeTab === 'dataviz' && <DataViz searchTerm={searchTerm} />}
            </div>

            <div className="border-t border-gray-200 pt-8">
                <Trending />
            </div>
        </div>
    );
}