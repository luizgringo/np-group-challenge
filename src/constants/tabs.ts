export const TABS = ['Featured', 'KPI', 'Layouts', 'Storyboards', 'DataViz'] as const;

export type TabType = Lowercase<(typeof TABS)[number]>; 