import HomeContainer from "@/containers/home";
import React from "react";

import Movies from "@/mocks/movies.json"

// async function delay(ms){
//     return new Promise((resolve)=>setTimeout(resolve,ms))
// }

const API_URL =
  "https://api.themoviedb.org/3"

const getPopularMovies=async ()=>{
  const rest = await fetch(
    `${API_URL}/movie/top_rated?api_key=${process.env.API_KEY}&page=1`
  );

  return rest.json()
}

const HomePage = async({params}) => {

  const {results:popularMovies}= await getPopularMovies()
console.log(popularMovies);
    let selectedCategory;
// await delay(2000)
    if(params.category?.length > 0){
        selectedCategory=true
    }
  return (
    <HomeContainer
      popularMovies={popularMovies}
      selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: selectedCategory ? Movies.results.slice(0, 7) : [],
      }}
    />
  );
};

export default HomePage;
