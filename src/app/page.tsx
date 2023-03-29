export const dynamic = "force-dynamic"; // this is the fix
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Results from '@/components/Results';

const API_KEY = process.env.API_KEY
const inter = Inter({ subsets: ['latin'] })

type HomeProps ={
  searchParams : any
}

export default async function Home({searchParams}: HomeProps) {
  const genre = searchParams.genre || "fetchTrending";
  //const genre =  "fetchTrending";

  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
  {next:{ revalidate: 10000}}
  );


  if (!res.ok) {
    throw new Error("Failed to fetch data"); // this will be caught by the error page and passed to the page as props
  }

  const data = await res.json();
  const results = data.results;
  console.log(results);
  return (
    <div className='max-w-6xl mx-auto space-y-4 p-4'>
    <h1 className='text-2xl font-medium text-white dark:text-amber-600 ' >Home Page</h1>
   <div className=' text-black'>
      <Results results={results}></Results>
   </div>
  
    </div>
  )
}
