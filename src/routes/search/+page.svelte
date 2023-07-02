<script lang="ts">
  import type { PageData } from "./$types.js";
  import Search from "$lib/components/Search.svelte";

  export let data: PageData;
  console.log(data);
</script>

<svelte:head>
  <title>Search Movie Keyword</title>
</svelte:head>

<main class="w-full">
  <p class="text-center text-2xl my-4">Search Movies, Tv Series, and More...</p>
  <Search />
</main>
