const Shimmer = () => {
    return (
        <div className="shimmer-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {Array(12).fill("").map((_, index) => (
                <div key={index} className="shimmer-card bg-gray-200 rounded-lg shadow-md p-4 h-60 w-full animate-pulse flex flex-col items-center">
                    <div className="w-full h-32 bg-gray-300 rounded-lg mb-4"></div>
                    <div className="w-3/4 h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
                </div>
            ))}
        </div>
    );
};

export default Shimmer;
