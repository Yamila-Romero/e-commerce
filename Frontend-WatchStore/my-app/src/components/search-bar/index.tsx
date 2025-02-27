"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {IconSearch} from "../../assets/icons"

export default function SearchComponent() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (query) {

      router.push(`/products?search=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="flex items-center justify-center rounded-lg shadow-md w-full max-w-md">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
        className="w-full  p-2 border border-black rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleSearch}
        className="p-2  text-white rounded-r-lg hover:bg-slate-400  focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <IconSearch/>
      </button>
    </div>
  );
}


