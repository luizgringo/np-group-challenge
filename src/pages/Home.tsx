import { useState } from 'react';
import { Featured, KPI, Layouts, Storyboards, Trending, DataViz } from '../components/TabContents';
import { SearchBar } from '../components';
import { TabNavigation } from '../components';

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

    const handleTabChange = (tab: string) => {
        setActiveTab(tab.toLowerCase().replace(' ', '') as TabType);
    };

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-4 text-center">Library</h1>
            <p className="text-gray-600 text-center p-4">
                Browse to the assets needed to report and present analysis
            </p>

            <TabNavigation activeTab={activeTab} onTabChange={handleTabChange} />

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