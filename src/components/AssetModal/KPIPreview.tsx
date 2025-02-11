import MockData from '../../data/MockData.json';

export function KPIPreview() {
    return (
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-600 mb-4">Business Questions</h3>
            <div className="grid grid-cols-2 gap-3">
                {MockData.kpiQuestions.map((item) => (
                    <div 
                        key={item.id}
                        className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                    >
                        <p className="text-xs font-medium text-gray-400 mb-2">
                            Question {item.id}
                        </p>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            {item.question}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
} 