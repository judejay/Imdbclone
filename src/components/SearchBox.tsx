"use client";
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
const SearchBox = () => {
    const [search, setSearch] = useState("");
    const router = useRouter();
    const handleSubmit = (e: { preventDefault: () => void; }) =>{
        e.preventDefault();
        if (!search) return;
        router.push(`/search/${search}`);


    }
  return (
    <form onSubmit={handleSubmit} className='flex max-w-6xl mx-auto justify-between items-center px-5 '>
        <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
         type="text" className=" text-white dark:text-slate-600 w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1" placeholder='Search keywords...'/>
        <button disabled={!search} className='text-white dark:text-slate-600 text-bold dark:disabled:bg-slate-300 bg-purple-300 disabled:bg-slate-400 dark:bg-amber-600 py-1 px-2 rounded-lg' type="submit">Search</button>
    </form>
  )
}

export default SearchBox