import { API_URL } from "./url";
import { objectToUrlParams } from "$lib/utils/objectToParam";

interface GetNewReleaseOption {
  sort?: "year.incr" | "year.decr";
  startYear?: number;
  endYear: number;
  page?: number;
  limit?: number | 20;
}

export async function GetNewRelease(config: GetNewReleaseOption) {
  config.sort = "year.decr";
  config.limit = config.limit ? config.limit : 10;
  config.page = config.page ? config.page : 1;

  const params = objectToUrlParams(config);

  console.log(params);
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
