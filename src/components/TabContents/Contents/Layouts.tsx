import { BaseTabContent } from '../BaseTabContent';

interface LayoutsProps {
    searchTerm: string;
}

export function Layouts({ searchTerm }: LayoutsProps) {
    return (
        <BaseTabContent
            type="layoutCards"
            title="Layouts"
            description="Templates and designs for your presentations"
            searchTerm={searchTerm}
        />
    );
} 