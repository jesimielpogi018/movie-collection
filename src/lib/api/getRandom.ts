import { API_URL } from "./url";
import { objectToUrlParams } from "$lib/utils/objectToParam";

interface GetRandomOptions {
  list?:
    | "most_pop_movies"
    | "most_pop_series"
    | "top_boxoffice_200"
    | "top_boxoffice_last_weekend_10"
    | "top_rated_250"
    | "top_rated_english_250"
    | "top_rated_lowest_100"
    | "top_rated_series_250"
    | "titles";
  page?: number;
  limit?: number | 20;
}

export async function getRandom(config: GetRandomOptions) {
  config.list = config.list ? config.list : "most_pop_movies";
  config.limit = config.limit ? config.limit : 10;
  config.page = config.page ? config.page : 1;

  const params = objectToUrlParams(config);
  const url = `${API_URL}/titles/random?${params}`;
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
