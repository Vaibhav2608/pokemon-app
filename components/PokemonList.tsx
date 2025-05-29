'use client';
import { usePokemonList } from '@/hooks/usePokemonList';
import PokemonCard from './PokemonCard';

interface PokemonListProps {
  type: string;
  search: string;
}

export default function PokemonList({ type, search }: PokemonListProps) {
  const { pokemons, loading } = usePokemonList(type, search);
  if (loading) return <div>Loading...</div>;
  if (!pokemons.length) return <div>No Pokémon found.</div>;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {pokemons.slice(0, 30).map((p) => (
        <PokemonCard key={p.name} pokemon={p} />
      ))}
    </div>
  );
}
