import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { DataVizPreview, LayoutPreview, KPIPreview } from '.';
import type { ReportType } from '../../types/report';

interface AssetModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description: string;
    longDescription: string;
    tags: string[];
    lastUpdated: string;
    used: number;
    contentType: string;
    pagesNumber: number;
    type: ReportType;
}

export function AssetModal({ isOpen, onClose, title, description, longDescription, tags, lastUpdated, used, contentType, pagesNumber, type }: AssetModalProps) {
    const [copied, setCopied] = useState(false);
    const [favorited, setFavorited] = useState(false);

    const getTypeLabel = (type: ReportType) => {
        const labels = {
            featured: 'Featured',
            kpi: 'KPI',
            layouts: 'Layouts',
            storyboards: 'Storyboards',
            trending: 'Trending',
            dataviz: 'Data Viz'
        };
        return labels[type];
    };

    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleFavorite = () => {
        setFavorited(true);
        setTimeout(() => setFavorited(false), 2000);
    };

    const renderPreview = () => {
        switch (type) {
            case 'dataviz':
                return <DataVizPreview />;
            case 'layouts':
                return <LayoutPreview />;
            case 'kpi':
                return <KPIPreview />;
            default:
                return null;
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-50"
                    onClick={onClose}
                >
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-black"
                    />
                    <div className="flex items-center justify-center min-h-screen p-4">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ 
                                duration: 0.4,
                                ease: [0.4, 0, 0.2, 1]
                            }}
                            className="bg-white rounded-lg w-full max-w-2xl overflow-hidden relative max-h-[90vh] flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="p-4 border-b border-gray-200 flex-shrink-0">
                                <div className="flex items-center justify-end gap-3">
                                    <button
                                        onClick={handleCopyLink}
                                        className="text-gray-400 hover:text-gray-600 transition-colors relative group"
                                        title="Copy link"
                                        type="button"
                                    >
                                        {copied ? (
                                            <svg
                                                className="w-5 h-5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                                role="img"
                                                aria-label="Link copied"
                                            >
                                                <title>Link copied</title>
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                        ) : (
                                            <svg
                                                className="w-5 h-5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                                role="img"
                                                aria-label="Copy link"
                                            >
                                                <title>Copy link</title>
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                                                />
                                            </svg>
                                        )}
                                        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                            {copied ? 'Copied!' : 'Copy link'}
                                        </span>
                                    </button>
                                    <button
                                        onClick={onClose}
                                        className="text-gray-400 hover:text-gray-600 transition-colors"
                                        title="Close"
                                        type="button"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            role="img"
                                            aria-label="Close modal"
                                        >
                                            <title>Close modal</title>
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className="overflow-y-auto flex-1 p-6">
                                <div className="flex flex-col items-center mb-6">
                                    <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-lg mb-4">
                                        <svg
                                            className="w-8 h-8 text-gray-400"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            role="img"
                                            aria-label="Asset icon"
                                        >
                                            <title>Asset icon</title>
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                            />
                                        </svg>
                                    </div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
                                        <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                                            {getTypeLabel(type as ReportType)}
                                        </span>
                                    </div>
                                    <p className="text-gray-400 text-sm text-center max-w-lg mb-4">{description}</p>
                                    <div className="prose prose-sm max-w-none text-center">
                                        <p className="text-gray-600 text-sm leading-relaxed">{longDescription}</p>
                                    </div>
                                </div>
                                
                                <div className="mb-6 text-center">
                                    <div className="flex flex-wrap gap-2 justify-center">
                                        {tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex justify-center divide-x divide-gray-100 mt-6 pt-6 p-4">
                                    <div className="text-center px-8">
                                        <p className="text-gray-900 font-semibold mb-1">{contentType}</p>
                                        <h3 className="text-sm text-gray-400">Type</h3>
                                    </div>
                                    <div className="text-center px-8">
                                        <p className="text-gray-900 font-semibold mb-1">{used}</p>
                                        <h3 className="text-sm text-gray-400">Uses</h3>
                                    </div>
                                    <div className="text-center px-8">
                                        <p className="text-gray-900 font-semibold mb-1">{pagesNumber}</p>
                                        <h3 className="text-sm text-gray-400">Pages</h3>
                                    </div>
                                    <div className="text-center px-8">
                                        <p className="text-gray-900 font-semibold mb-1">{lastUpdated}</p>
                                        <h3 className="text-sm text-gray-400">Last update</h3>
                                    </div>
                                </div>

                                {renderPreview()}

                                <button 
                                    className="w-full mt-6 py-3 px-4 bg-gray-600 hover:bg-gray-700 text-white transition-all duration-200 ease-in-out flex items-center justify-center gap-2 font-medium rounded-lg hover:shadow-md"
                                    type="button"
                                    onClick={handleFavorite}
                                >
                                    {favorited ? (
                                        <svg
                                            className="w-5 h-5"
                                            fill="currentColor"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            role="img"
                                            aria-label="Favorited icon"
                                        >
                                            <title>Favorited icon</title>
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            role="img"
                                            aria-label="Favorite Item icon"
                                        >
                                            <title>Favorite Item icon</title>
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                                            />
                                        </svg>
                                    )}
                                    {favorited ? 'Favorited!' : 'Favorite Item'}
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
} 