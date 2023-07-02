<script lang="ts">
  import Search from "$lib/components/Search.svelte";
  import MovieComponent from "$lib/components/MovieComponent.svelte";
</script>

<svelte:head>
  <title>Movie Collection | Search Movies Online</title>
</svelte:head>

<main class="w-full">
  <p class="text-center text-2xl my-4">Search Movies, Tv Series, and More...</p>
  <Search />

  <h2 class="text-lg m-3">Trending</h2>
  <div
    class="mx-2 grid grid-cols-2 place-content-center gap-2 md:grid-cols-3 lg:grid-cols-4"
  >
    <MovieComponent />
    <MovieComponent />

    <MovieComponent />

    <MovieComponent />

    <MovieComponent />

    <MovieComponent />

    <MovieComponent />

    <MovieComponent />

    <MovieComponent />
  </div>
</main>
