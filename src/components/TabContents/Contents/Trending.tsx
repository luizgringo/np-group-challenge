import { BaseTabContent } from '../BaseTabContent';

export function Trending() {
    return (
        <BaseTabContent
            type="trendingCards"
            title="Trending"
            description="Most relevant topics at the moment"
            searchTerm=""
            useTrendingCard
        />
    );
} 