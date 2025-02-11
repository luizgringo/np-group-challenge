import { CardTypeMapping } from "../types/card";

export const cardTypeMappingConst: CardTypeMapping = {
    dataVizCards: 'dataviz',
    featuredCards: 'featured',
    kpiCards: 'kpi',
    layoutCards: 'layouts',
    storyboardCards: 'storyboard',
    trendingCards: 'trending'
} as const;