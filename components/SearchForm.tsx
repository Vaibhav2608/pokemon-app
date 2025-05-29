"use client";
import { usePokemonTypes } from "@/hooks/usePokemonTypes";

interface SearchFormProps {
  type: string;
  setType: (type: string) => void;
  search: string;
  setSearch: (search: string) => void;
}

export default function SearchForm({
  type,
  setType,
  search,
  setSearch,
}: SearchFormProps) {
  const types = usePokemonTypes();
  return (
    <form className="flex flex-col md:flex-row gap-2 mb-4">
      <div>
        <select
          className="flex-1 border p-2 rounded text-black w-md bg-white mb-1.5"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">Select</option>
          {types.map((t) => (
            <option key={t.name} value={t.name}>
              {t.name}
            </option>
          ))}
        </select>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-black bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 px-4 py-2 bg-[#004368] text-white rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            onClick={() => {
              // Add your search logic here
              console.log("🔍 Searching for:", search, "Type:", type);
            }}
          >
            Search
          </button>
        </div>
        {/* <input
          className="border p-2 rounded flex-1 text-black w-full bg-white"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        /> */}
      </div>
    </form>
  );
}
