import React from 'react'

import Movies from "@/mocks/movies.json"
import Category from "@/mocks/genres.json"
import { FeaturedMovie } from '@/components/featured-movie'
import Categories from '@/components/categories'
import { MoviesSection } from '@/components/movies-section'


const HomeContainer = ({ selectedCategory }) => {
  console.log(selectedCategory);
  return (
    <div>
      <FeaturedMovie movie={Movies.results[0]} />
      <Categories categories={Category.genres.slice(0, 5)} />
      <MoviesSection title="Popular Films" movies={selectedCategory?.movies} />
      <MoviesSection
        title="Popular Films"
        movies={Movies.results.slice(1, 7)}
      />
      <MoviesSection
        title="Your Favourites"
        movies={Movies.results.slice(7, 13)}
      />
    </div>
  );
};

export default HomeContainer