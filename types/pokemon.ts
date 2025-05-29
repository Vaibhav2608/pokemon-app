// types/pokemon.ts
export interface PokemonType {
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonAbility {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface PokemonMove {
  move: {
    name: string;
    url: string;
  };
}

export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface PokemonSprites {
  front_default: string;
  back_default: string;
  other: {
    'official-artwork': {
      front_default: string;
    };
  };
}

export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  types: PokemonType[];
  abilities: PokemonAbility[];
  moves: PokemonMove[];
  stats: PokemonStat[];
  sprites: PokemonSprites;
}

export interface PokemonListItem {
  name: string;
  url: string;
}

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItem[];
}

// For Pokemon cards that might come from different sources
export interface PokemonCardData {
  name: string;
  url?: string; // Optional because some sources might not have URL
}

// For Pokemon types in the search form
export interface PokemonTypeOption {
  name: string;
  url?: string;
}
