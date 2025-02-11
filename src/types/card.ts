import type CardsMockData from '../data/CardsMockData.json';

export type CardType = keyof typeof CardsMockData;

export type BaseCard = {
    title: string;
    description: string;
    longDescription: string;
    tags: string[];
    lastUpdated: string;
    contentType: string;
    used: number;
    pagesNumber: number;
};

export type Card = BaseCard;

export interface CardTypeMapping {
    dataVizCards: 'dataviz';
    featuredCards: 'featured';
    kpiCards: 'kpi';
    layoutCards: 'layouts';
    storyboardCards: 'storyboards';
    trendingCards: 'trending';
}