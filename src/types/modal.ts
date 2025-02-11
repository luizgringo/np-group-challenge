export type ModalType = 'dataviz' | 'featured' | 'kpi' | 'layouts' | 'storyboard' | 'trending';

export const typeMap = {
    dataVizCards: 'dataviz',
    featuredCards: 'featured',
    kpiCards: 'kpi',
    layoutCards: 'layouts',
    storyboardCards: 'storyboard',
    trendingCards: 'trending'
} as const; 