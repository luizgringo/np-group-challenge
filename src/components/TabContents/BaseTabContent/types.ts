import { CardType } from '../../../types';

export interface BaseTabContentProps {
    type: CardType;
    title: string;
    description: string;
    searchTerm: string;
    useTrendingCard?: boolean;
} 