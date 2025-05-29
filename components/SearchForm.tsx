'use client';
import { usePokemonTypes } from '@/hooks/usePokemonTypes';

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
        <input
          className="border p-2 rounded flex-1 text-black w-full bg-white"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </form>
  );
}
