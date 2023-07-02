<script lang="ts">
  import { onMount } from "svelte";
  import type { ApiCallReturn } from "../../types/ApiCallReturn";
  import Search from "$lib/components/Search.svelte";
  import Trending from "$lib/components/Trending.svelte";
  import { getTrendingMovies } from "$lib/api/getTrendingMovies";

  $: data = {} as ApiCallReturn;

  onMount(async () => {
    let result = await getTrendingMovies({ list: "most_pop_movies" });
    data = result;
  });
</script>

<svelte:head>
  <title>Movie Collection | Search Movies Online</title>
</svelte:head>

<main class="w-full">
  <p class="text-center text-2xl my-4">Search Movies, Tv Series, and More...</p>
  <Search />
  <Trending movies={data.results} />
</main>
