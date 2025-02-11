import { BaseTabContent } from '../BaseTabContent';

interface StoryboardsProps {
    searchTerm: string;
}

export function Storyboards({ searchTerm }: StoryboardsProps) {
    return (
        <BaseTabContent
            type="storyboardCards"
            title="Storyboards"
            description="Visual narratives and process flows"
            searchTerm={searchTerm}
        />
    );
} 