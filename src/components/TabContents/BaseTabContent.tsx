import { useState } from 'react';
import NoResults from './NoResults';
import { BaseCard, TrendingCard } from './Cards';
import { AssetModal } from '../AssetModal';
import MockData from '../../data/MockData.json';
import { Card, CardType, typeMap } from '../../types';

interface BaseTabContentProps {
    type: CardType;
    title: string;
    description: string;
    searchTerm: string;
    useTrendingCard?: boolean;
}

export function BaseTabContent({ type, title, description, searchTerm, useTrendingCard = false }: BaseTabContentProps) {
    const [selectedCard, setSelectedCard] = useState<Card | null>(null);

    const cards = MockData[type as keyof typeof MockData] as Card[];
    const CardComponent = useTrendingCard ? TrendingCard : BaseCard;

    const filteredCards = cards.filter(
        (card) =>
            card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            card.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            card.tags.some((tag) =>
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
                {filteredCards.map((card, index) => (
                    <CardComponent 
                        key={index} 
                        {...card} 
                        onClick={() => setSelectedCard(card)}
                    />
                ))}
            </div>

            <AssetModal
                isOpen={!!selectedCard}
                onClose={() => setSelectedCard(null)}
                type={typeMap[type]}
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