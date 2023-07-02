<script lang="ts">
</script>

<svelte:head>
  <title>Movie Collection | Search Movies Online</title>
</svelte:head>

<main class="w-full flex flex-col">
  <div>
    <form method="post" action="?/search">
      <input type="text" name="movie-title" />
      <button>Go</button>
    </form>
  </div>
</main>
