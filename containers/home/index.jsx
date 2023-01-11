import React from 'react'

import Movies from "@/mocks/movies.json"
import Category from "@/mocks/genres.json"
import { FeaturedMovie } from '@/components/featured-movie'
import Categories from '@/components/categories'
import { MoviesSection } from '@/components/movies-section'


const HomeContainer = ({popularMovies=[], selectedCategory }) => {
  console.log(selectedCategory);
  return (
    <div>
      <FeaturedMovie
        movie={popularMovies[Math.floor(Math.random() * popularMovies.length)]}
      />
      <Categories categories={Category.genres.slice(0, 5)} />
      {selectedCategory.movies.length > 0 && (
        <MoviesSection
          title={
            Category.genres.find(
              (genre) => genre.id.toString() === selectedCategory.id
            ).name
          }
          movies={selectedCategory?.movies}
        />
      )}

      <MoviesSection title="Popular Films" movies={popularMovies.slice(1, 7)} />
      <MoviesSection
        title="Your Favourites"
        movies={Movies.results.slice(7, 13)}
      />
    </div>
  );
};

export default HomeContainer