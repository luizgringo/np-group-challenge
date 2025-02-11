interface TrendingCardProps {
    title: string;
    description: string;
    tags: string[];
    lastUpdated: string;
    used: number;
    contentType: string;
    pagesNumber: number;
    onClick?: () => void;
}

export function TrendingCard({ title, description, tags, lastUpdated, onClick }: TrendingCardProps) {
    return (
        <button 
            onClick={onClick}
            type="button"
            className="w-full text-left flex gap-6 p-6 cursor-pointer transition-all duration-200 ease-in-out hover:bg-gray-50 hover:shadow-lg hover:scale-[1.02] rounded-lg"
        >
            <div className="w-24 h-24 flex-shrink-0 flex items-center justify-center bg-gray-50 rounded-lg">
                <svg
                    className="w-12 h-12 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Trending icon"
                >
                    <title>Trending icon</title>
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                </svg>
            </div>
            <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-400">{lastUpdated}</p>
                </div>
            </div>
        </button>
    );
} 