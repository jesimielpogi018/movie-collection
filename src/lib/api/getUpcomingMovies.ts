import { API_URL } from "./url";
import { objectToUrlParams } from "$lib/utils/objectToParam";
import type { MovieType } from "./type";

interface GetUpcomingMoviesOptions {
  page?: number;
  limit?: number | 20;
}

export let data = [];
let prevUrl = "";
let nextUrl = "";

function prev() {}

function next() {}

export async function getUpcomingMovies(config: GetUpcomingMoviesOptions) {
  const limit = config.limit ? config.limit : 10;
  const page = config.page ? config.page : 1;

  const objectParam = { limit, page };

  const params = objectToUrlParams(objectParam);

  // if (MapCaching.has(params)) {
  //   return MapCaching.get(params) as Array<MovieType>;
  // }

  const url = `${API_URL}/titles/x/upcoming?${params}`;
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
