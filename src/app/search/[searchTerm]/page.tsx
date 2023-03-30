import Results from '@/components/Results'
import React from 'react'
type SearchPageProps ={
    params: any
}
const page = async ({params}: SearchPageProps) => {
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}&language=en-US&include_adult=true`)
    if(!res.ok){
        throw new Error("Error fetching data")
    }
    const data = await res.json();
    const results = data.results
    return (
                <div>{results && results.length ===0 && (<h1 className='text-center pt-6'>No Results Found</h1>)}
    {results && <Results results={results}></Results>}
    </div>
  )
}

export default page