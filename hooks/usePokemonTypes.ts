'use client';
import { PokemonTypeOption } from '@/types/pokemon';
import { useEffect, useState } from 'react';

export function usePokemonTypes(): PokemonTypeOption[] {
  const [types, setTypes] = useState<{ name: string }[]>([]);
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/type')
      .then((res) => res.json())
      .then((data) => setTypes(data.results));
  }, []);
  return types;
}
