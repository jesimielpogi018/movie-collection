import { fail, redirect } from "@sveltejs/kit";
import { objectToUrlParams } from "$lib/utils/objectToParam.js";

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
