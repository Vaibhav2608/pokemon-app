import Breadcrumb from '@/components/Breadcrumb';
import { Suspense } from 'react';
import Image from 'next/image';
import {
  Pokemon,
  PokemonAbility,
  PokemonMove,
  PokemonType,
  PokemonStat,
} from '@/types/pokemon';

// Cache the API response for better performance
async function getPokemon(name: string): Promise<Pokemon | null> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
    next: {
      revalidate: 3600, // Cache for 1 hour
    },
  });
  if (!res.ok) return null;
  return res.json();
}

// Generate static params for popular Pokémon
export async function generateStaticParams() {
  // Pre-generate the first 151 Pokémon (most popular)
  const popularPokemon = Array.from({ length: 151 }, (_, i) => ({
    name: (i + 1).toString(),
  }));

  return popularPokemon;
}

// Loading component
function PokemonSkeleton() {
  return (
    <main className="w-full p-4">
      <div className="max-w-xl mx-auto p-4">
        <div className="rounded-xl shadow bg-white overflow-hidden animate-pulse">
          <div className="flex justify-center items-center bg-gray-200 py-8">
            <div className="w-60 h-60 bg-gray-300 rounded"></div>
          </div>
          <div className="bg-gray-50 px-6 py-6">
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
            <div className="h-4 bg-gray-300 rounded mb-2 w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded mb-2 w-1/2"></div>
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3"></div>
          </div>
        </div>
      </div>
    </main>
  );
}

async function PokemonContent({ name }: { name: string }) {
  const pokemon = await getPokemon(name);

  if (!pokemon) {
    return (
      <main className="w-full p-4">
        <div className="max-w-xl mx-auto p-4 text-center">
          <h1 className="text-2xl font-bold text-red-600">Pokémon not found</h1>
          <p className="text-gray-600 mt-2">
            The requested Pokémon could not be found.
          </p>
        </div>
      </main>
    );
  }

  // Get abilities and moves
  const abilities = pokemon.abilities
    .map((a: PokemonAbility) => a.ability.name)
    .join(', ');
  const moves = pokemon.moves
    .slice(0, 6)
    .map((m: PokemonMove) => m.move.name)
    .join(', ');
  const types = pokemon.types.map((t: PokemonType) => t.type.name).join(', ');
  const stats = pokemon.stats
    .map((s: PokemonStat) => `${s.stat.name}: ${s.base_stat}`)
    .join(', ');

  return (
    <main className="w-full p-4">
      <Breadcrumb name={pokemon.name} />
      <div className="max-w-xl mx-auto p-4">
        <div className="rounded-xl shadow bg-white overflow-hidden">
          <div className="flex justify-center items-center bg-[#4DD6C9] py-8">
            <Image
              src={pokemon.sprites.other['official-artwork'].front_default}
              alt={`${pokemon.name} official artwork`}
              width={240}
              height={240}
              className="w-60 h-60 object-contain"
              unoptimized
            />
          </div>
          <div className="bg-[#FFD166] px-6 py-6 text-black">
            <div className="mb-2">
              <span className="font-bold">Name:</span>{' '}
              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </div>
            <div className="mb-2">
              <span className="font-bold">Type:</span> {types}
            </div>
            <div className="mb-2">
              <span className="font-bold">Stats:</span> {stats}
            </div>
            <div className="mb-2">
              <span className="font-bold">Abilities:</span> {abilities}
            </div>
            <div>
              <span className="font-bold">Some Moves:</span> {moves}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default async function PokemonDetails({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;

  return (
    <Suspense fallback={<PokemonSkeleton />}>
      <PokemonContent name={name} />
    </Suspense>
  );
}
