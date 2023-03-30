import Image from 'next/image'

type MovieProps ={
    params : any
}

const  getMovie = async (movieId: any)=>{
 const res = await fetch (`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`);
 return  await res.json();
}

const page = async ({params}: MovieProps) => {
    const movieId = params.id;
     const movie = await getMovie(movieId);
   
    return (
    <div className="w-full">
        <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6 ">
        <Image  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path }`} width={500} height={300} className="rounded-lg"
  style={{
            maxWidth: "100%",
            height: "auto", 
          }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="Movie poster">
           
        </Image>
        <div className='p-2 dark:text-gray-600 text-black' >
            <h2 className=' text-lg mb-3 font-bold '>{movie.title || movie.name}</h2>
            <p className='text-lg mb-3'><span className="text-semibold mr-1" 
                    
                
            >Overview:</span>
            {movie.overview}
            </p>
            <p className='font-semibold mr-1'><span >Date Released : </span>{movie.release_date || movie.first_air_date}</p>
          
            <p className='font-semibold mr-1'><span >Rating : </span>{movie.vote_count}</p>
        </div>
        </div>
       
    </div>
  )
}

export default page