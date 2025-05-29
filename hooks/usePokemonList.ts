'use client';
import { PokemonCardData } from '@/types/pokemon';
import { useEffect, useState } from 'react';

interface UsePokemonListReturn {
  pokemons: PokemonCardData[];
  loading: boolean;
}

export function usePokemonList(
  type: string,
  search: string,
): UsePokemonListReturn {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let url = type
      ? `https://pokeapi.co/api/v2/type/${type}`
      : 'https://pokeapi.co/api/v2/pokemon?limit=151';
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let list = type
          ? data.pokemon.map((p: any) => p.pokemon)
          : data.results;
        if (search) {
          list = list.filter((p: any) =>
            p.name.toLowerCase().includes(search.toLowerCase()),
          );
        }
        setPokemons(list);
        setLoading(false);
      });
  }, [type, search]);

  return { pokemons, loading };
}
