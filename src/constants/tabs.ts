export const TABS = ['Featured', 'KPI', 'Layouts', 'Storyboards', 'Data Viz'] as const;

export type TabType = Lowercase<(typeof TABS)[number]> | 'dataviz'; 