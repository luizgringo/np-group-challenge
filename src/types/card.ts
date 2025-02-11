import { MockData } from './mock';

export type CardType = Exclude<keyof typeof MockData, 'kpiQuestions'>;

export interface Card {
    title: string;
    description: string;
    longDescription: string;
    tags: string[];
    lastUpdated: string;
    contentType: string;
    used: number;
    pagesNumber: number;
}

export interface CardTypeMapping {
    dataVizCards: 'dataviz';
    featuredCards: 'featured';
    kpiCards: 'kpi';
    layoutCards: 'layouts';
    storyboardCards: 'storyboard';
    trendingCards: 'trending';
}