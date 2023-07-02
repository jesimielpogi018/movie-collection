import { API_URL } from "./url";
import { objectToUrlParams } from "$lib/utils/objectToParam";

interface GetTrendingMoviesOptions {
  page?: number;
  limit?: number;
  list: "most_pop_movies";
}

export async function getTrendingMovies(config: GetTrendingMoviesOptions) {
  const limit = config.limit ? config.limit : 32;
  const page = config.page ? config.page : 1;

  const objectParam = { limit, page, list: config.list };

  const params = objectToUrlParams(objectParam);
  const url = `${API_URL}/titles?${params}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "11d66e7985mshcdf89acab1a7d4ep162ddbjsn66d3871ad974",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    return response.json();
  } catch (error) {
    console.error(error);
  }
}
