export default function NoResults() {
    return (
        <div className="flex flex-col items-center justify-center p-8">
            <svg
                className="w-24 h-24 text-gray-300 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
            </svg>
            <p className="text-xl text-gray-500 font-medium">No results found</p>
            <p className="text-gray-400 mt-2">Try searching with different terms</p>
        </div>
    );
} 