import { BaseTabContent } from '../BaseTabContent';

interface KPIProps {
    searchTerm: string;
}

export function KPI({ searchTerm }: KPIProps) {
    return (
        <BaseTabContent
            type="kpiCards"
            title="Indicators"
            description="Metrics and KPIs for performance monitoring"
            searchTerm={searchTerm}
        />
    );
} 