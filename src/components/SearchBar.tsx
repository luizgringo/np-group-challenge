interface SearchBarProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClear: () => void;
    placeholder?: string;
}

export function SearchBar({ value, onChange, onClear, placeholder = 'Type to search...' }: SearchBarProps) {
    return (
        <div className="relative">
            <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Search icon"
            >
                <title>Search icon</title>
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
            </svg>
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-full pl-12 pr-10 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {value && (
                <button
                    onClick={onClear}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    type="button"
                >
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        aria-label="Clear search"
                    >
                        <title>Clear search</title>
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            )}
        </div>
    );
} 