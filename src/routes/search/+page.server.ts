import { fail, redirect } from "@sveltejs/kit";
import { objectToUrlParams } from "$lib/utils/objectToParam.js";

export const load = async ({ url }) => {
  let keyword = url.searchParams.get("keyword");

  const URL = `https://moviesdatabase.p.rapidapi.com/titles/search/keyword/${keyword}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "11d66e7985mshcdf89acab1a7d4ep162ddbjsn66d3871ad974",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(URL, options);
    const { results } = await response.json();
    return {
      success: true,
      results: results,
    };
  } catch (error) {
    console.error(error);
  }
};

export const actions = {
  search: async (event) => {
    const formData = await event.request.formData();
    const movieTitle = formData.get("movie-title");

    if (!movieTitle || typeof movieTitle !== "string") {
      return fail(400, { message: "invalid title!" });
    }

    const obj = { keyword: movieTitle };
    const params = objectToUrlParams(obj);
    console.log(params);

    throw redirect(302, `/search?${params}`);
  },
};
