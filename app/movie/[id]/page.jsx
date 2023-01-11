import { MovieContainer } from "@/containers/movie";
import { notFound, useSearchParams } from "next/navigation";
import { fetchSingleMovie } from "@/services/index";
// async function delay(ms){
//     return new Promise((resolve)=>setTimeout(resolve,ms))
// }

const MoviePage = async ({ params, searchParams }) => {
  console.log(params);
  const movieDetail = await fetchSingleMovie(params.id);

  // await delay(2000)
  // const movieDetail = Movies.results.find(
  //   (movie) => movie.id.toString() === params.id
  // );

  if (!movieDetail) {
    notFound();
  }
  if (searchParams.error === "true") {
    throw new Error("Error happened");
  }
  return <MovieContainer movie={movieDetail} />;
};

export default MoviePage;
