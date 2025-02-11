export function LayoutPreview() {
    return (
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-600 mb-4">Layout Preview</h3>
            <div className="w-[280px] aspect-[4/3] mx-auto bg-white rounded-lg shadow-sm p-3 relative">
                {/* Header */}
                <div className="absolute top-3 left-3 right-3">
                    <div className="h-2 w-24 bg-gray-200 rounded-full mb-1.5" />
                    <div className="h-1.5 w-32 bg-gray-100 rounded-full" />
                </div>
                
                {/* Content */}
                <div className="absolute top-14 left-3 right-3 bottom-3 flex gap-3">
                    {/* Left Column */}
                    <div className="flex-1">
                        <div className="h-16 bg-gray-100 rounded-lg mb-2" />
                        <div className="space-y-1.5">
                            <div className="h-1.5 w-full bg-gray-100 rounded-full" />
                            <div className="h-1.5 w-5/6 bg-gray-100 rounded-full" />
                            <div className="h-1.5 w-4/6 bg-gray-100 rounded-full" />
                        </div>
                    </div>
                    
                    {/* Right Column */}
                    <div className="w-1/3 space-y-2">
                        <div className="h-12 bg-gray-200 rounded-lg" />
                        <div className="h-12 bg-gray-100 rounded-lg" />
                        <div className="h-12 bg-gray-200 rounded-lg" />
                    </div>
                </div>
            </div>
        </div>
    );
} 