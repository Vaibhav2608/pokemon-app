'use client';
import { useState } from 'react';
import SearchForm from '@/components/SearchForm';
import PokemonList from '@/components/PokemonList';

export default function Home() {
  const [type, setType] = useState('');
  const [search, setSearch] = useState('');
  return (
    <main className="max-w-4xl mx-auto p-4">
      <SearchForm
        type={type}
        setType={setType}
        search={search}
        setSearch={setSearch}
      />
      <PokemonList type={type} search={search} />
    </main>
  );
}
