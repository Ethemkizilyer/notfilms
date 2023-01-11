import HomeContainer from "@/containers/home";
import {
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchGenres,
  fetchMoviesByGenre,
} from "@/services/index";

// import Movies from "@/mocks/movies.json"

// async function delay(ms){
//     return new Promise((resolve)=>setTimeout(resolve,ms))
// }

const HomePage = async ({ params }) => {
  const pagePromises = [
    fetchPopularMovies(),
    fetchTopRatedMovies(),
    fetchGenres(),
  ];

  if (!!params.category?.length) {
    pagePromises.push(fetchMoviesByGenre(params.category[0]));
  }

  const [popularMovies, topRatedMovies, genres, selectedCategoryMovies] =
    await Promise.all(pagePromises);

  console.log(popularMovies);
  let selectedCategory;
  // await delay(2000)
  // if(params.category?.length > 0){
  //     selectedCategory=true
  // }
  return (
    <HomeContainer
      categories={genres}
      popularMovies={popularMovies}
      topRatedMovies={topRatedMovies}
      selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: selectedCategoryMovies ?? [],
      }}
    />
  );
};

export default HomePage;
