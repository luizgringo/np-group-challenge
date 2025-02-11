import { BaseTabContent } from '../BaseTabContent';

interface FeaturedProps {
    searchTerm: string;
}

export function Featured({ searchTerm }: FeaturedProps) {
    return (
        <BaseTabContent
            type="featuredCards"
            title="Featured"
            description="Content selected and curated by our team"
            searchTerm={searchTerm}
        />
    );
} 