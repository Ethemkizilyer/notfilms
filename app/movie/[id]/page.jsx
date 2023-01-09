import { MovieContainer } from '@/containers/movie'
import React from 'react'
import Movies from "@/mocks/movies.json";
import {notFound} from "next/navigation"


const MoviePage = ({params}) => {
    console.log(params);
    const movieDetail= Movies.results.find(movie=>movie.id.toString()===params.id)

    if(!movieDetail){
        notFound()
    }
  return (
    <MovieContainer movie={movieDetail}/>
  )
}

export default MoviePage