export default function SearchInput() {
    return (
        <div className="flex items-center">
            <div className="flex space-x-1 bg-slate-900 border border-transparent rounded-full">
                <input
                    type="text"
                    className="block w-full px-4 py-2 text-slate-300 bg-slate-900 border border-transparent rounded-full rounded-r-none focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search..."
                />
                <button className="px-4 text-white bg-red-600 rounded-full rounded-l-none">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}