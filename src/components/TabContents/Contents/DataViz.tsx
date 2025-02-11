import { BaseTabContent } from '../BaseTabContent';

interface DataVizProps {
    searchTerm: string;
}

export function DataViz({ searchTerm }: DataVizProps) {
    return (
        <BaseTabContent
            type="dataVizCards"
            title="Data Visualization"
            description="Charts and dashboards for visual data analysis"
            searchTerm={searchTerm}
        />
    );
} 