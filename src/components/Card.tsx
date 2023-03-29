import React from 'react'
import { IMovie } from './Results'
import Link from 'next/link'
import Image from 'next/image'

type CardProps ={
  movie: IMovie
}

const Card = ({ movie}: CardProps) => {
  return (
    <div className='cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200'>
      <Link href={`/movie/${movie.id}`}>
        <Image alt="" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path }`} width={500} height={300}  style={{
            maxWidth: "100%",
            height: "auto",
          }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="image is not available">

        </Image>
      </Link>
      {movie.original_title}</div>
  )
}

export default Card