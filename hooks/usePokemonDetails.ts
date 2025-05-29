'use client';
import { useEffect, useState } from 'react';

export function usePokemonDetails(name: string) {
  const [pokemon, setPokemon] = useState<any>(null);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => res.json())
      .then(setPokemon);
  }, [name]);
  return pokemon;
}
