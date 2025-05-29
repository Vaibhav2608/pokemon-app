import { PokemonCardData } from '@/types/pokemon';
import Link from 'next/link';

interface PokemonCardProps {
  pokemon: PokemonCardData;
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  const id = pokemon.url
    ? pokemon.url.split('/').filter(Boolean).pop()
    : pokemon.name;
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  return (
    <div className="rounded-xl shadow p-0 flex flex-col items-center border bg-white border-gray-100">
      <div className="flex justify-center items-center pt-4">
        <img
          src={imgUrl}
          alt={pokemon.name}
          className="w-28 h-28 object-contain"
        />
      </div>
      <div className="w-full rounded-b-xl bg-[#FAFAFA] px-4 py-6 flex flex-col place-content-between gap-2 min-h-[150px]">
        <div className="font-bold capitalize text-black text-lg">
          {pokemon.name}
        </div>
        <Link
          href={`/pokemon/${pokemon.name}`}
          className="text-blue-500 text-sm font-medium hover:underline"
        >
          Details &rarr;
        </Link>
      </div>
    </div>
  );
}
