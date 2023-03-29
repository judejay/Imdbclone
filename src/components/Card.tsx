import React from 'react'
import { IMovie } from './Results'
import Link from 'next/link'
import Image from 'next/image'
import { GoThumbsup } from 'react-icons/go'

type CardProps ={
  movie: IMovie
}

const Card = ({ movie}: CardProps) => {
  return (
    <div className='cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group'>
      <Link href={`/movie/${movie.id}`}>
      
      
        <Image  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path }`} width={500} height={300} className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
  style={{
            maxWidth: "100%",
            height: "auto", 
          }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="image is not available">
           
        </Image>
        <div className='p-2'>
          <p className='line-clamp-2 text-sm'>{movie.overview}</p>
          <h2 className='font-bold'>{movie.original_title || movie.original_name}</h2> 
          <div className='text-sm font-light'>
        <p className='flex items-center'>{movie.first_air_date || movie.release_date}
        <GoThumbsup className='h-5 mr-1 ml-3'/> {movie.vote_count} 
        </p>
        </div>
        </div>
      </Link>
      </div>
  )
}

export default Card