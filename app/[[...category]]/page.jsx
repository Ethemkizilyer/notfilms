import HomeContainer from "@/containers/home";
import React from "react";

import Movies from "@/mocks/movies.json"

async function delay(ms){
    return new Promise((resolve)=>setTimeout(resolve,ms))
}

const HomePage = async({params}) => {
    let selectedCategory;
await delay(2000)
    if(params.category?.length > 0){
        selectedCategory=true
    }
  return (<HomeContainer selectedCategory={{
    id:params.category?.[0] ?? "",
    movies: selectedCategory ? Movies.results.slice(0,7) : [],
  }}/>);
};

export default HomePage;
