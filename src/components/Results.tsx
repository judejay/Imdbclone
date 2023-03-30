import Card from "./Card"

export interface IMovie {
    adult: boolean,
    backdrop_path: string,
    release_date: string,
    id: number,
    release: Date,
    //first_air_date: Date,
    name: string,
    original_title: string,
    original_language: string,
    original_name: string,
    overview: string,
    poster_path: string,
    media_type: string,
    genre_ids: number[],
    popularity: number,
    first_air_date: string,
    vote_average: string,
    vote_count: string,
    origin_country: string[]
  }



type ResultsProps ={
    results : IMovie []
}
const Results = ({results}: ResultsProps) => {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">{results.map(movie =>{
        return(
          <div key={movie.id} >
         
          <Card movie={movie}></Card> </div>
        ) 
    } 
        )}</div>
  )
}

export default Results