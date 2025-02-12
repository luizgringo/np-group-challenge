import { useState } from 'react';
import NoResults from './NoResults';
import { BaseCard, TrendingCard } from './Cards';
import { AssetModal } from '../AssetModal';
import CardsMockData from '../../data/CardsMockData.json';
import type { Card, CardType } from '../../types/card';
import type { ModalType } from '../../types/modal';

interface BaseTabContentProps {
    type: CardType;
    title: string;
    description: string;
    searchTerm: string;
    useTrendingCard?: boolean;
}

export function BaseTabContent({ type, title, description, searchTerm, useTrendingCard = false }: BaseTabContentProps) {
    const [selectedCard, setSelectedCard] = useState<Card | null>(null);

    const cards = CardsMockData[type] as Card[];
    const CardComponent = useTrendingCard ? TrendingCard : BaseCard;

    const getModalType = (type: CardType): ModalType => {
        const modalTypeMap: Record<CardType, ModalType> = {
            dataVizCards: 'dataviz',
            featuredCards: 'featured',
            kpiCards: 'kpi',
            layoutCards: 'layouts',
            storyboardCards: 'storyboards',
            trendingCards: 'trending'
        };
        return modalTypeMap[type];
    };

    const filteredCards = cards.filter(
        (card: Card) =>
            card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            card.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            card.tags.some((tag: string) =>
                tag.toLowerCase().includes(searchTerm.toLowerCase())
            )
    );

    if (filteredCards.length === 0) {
        return <NoResults />;
    }

    return (
        <div className={useTrendingCard ? "border-gray-200 pt-6" : ""}>
            <div className="mb-6">
                {useTrendingCard ? (
                    <div className="flex items-center gap-2 mb-1">
                        <h2 className="text-2xl font-medium text-gray-900">{title}</h2>
                    </div>
                ) : (
                    <h2 className="text-2xl font-medium text-gray-900 mb-1">{title}</h2>
                )}
                <p className="text-gray-500">{description}</p>
            </div>
            <div className={`grid grid-cols-2 gap-${useTrendingCard ? '4' : '6'}`}>
                {filteredCards.map((card: Card) => (
                    <CardComponent 
                        key={`${card.title}-${card.lastUpdated}`}
                        {...card} 
                        onClick={() => setSelectedCard(card)}
                    />
                ))}
            </div>

            <AssetModal
                isOpen={!!selectedCard}
                onClose={() => setSelectedCard(null)}
                type={getModalType(type)}
                {...selectedCard || {
                    title: '',
                    description: '',
                    longDescription: '',
                    tags: [],
                    lastUpdated: '',
                    contentType: '',
                    used: 0,
                    pagesNumber: 0
                }}
            />
        </div>
    );
} 