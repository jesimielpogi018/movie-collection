<script lang="ts">
  import { onMount } from "svelte";
  import MovieComponent from "$lib/components/MovieComponent.svelte";
  import { getUpcomingMovies } from "$lib/api/getUpcomingMovies";
  import { GetNewRelease } from "$lib/api/getNewRelease";

  let movies = getUpcomingMovies({ limit: 10, page: 1 });

  onMount(async () => {
    let result = await GetNewRelease({ endYear: new Date().getFullYear() });
    console.log(result);
  });
</script>

<svelte:head>
  <title>Movie Collection | Search Movies Online</title>
</svelte:head>

<main class="w-full flex flex-col">
  <!-- upcoming section movie -->
  <div>
    <p>Upcoming Movies</p>
    {#await movies}
      <p>Loading Upcoming Movies</p>
    {:then { results }}
      <div class="grid grid-cols-2 gap-2 place-content-center">
        {#each results as data}
          <MovieComponent movie={data} />
        {/each}
      </div>
    {:catch error}
      <code>{error.message}</code>
    {/await}
  </div>
</main>
