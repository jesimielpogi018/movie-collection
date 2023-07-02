<script lang="ts">
</script>

<svelte:head>
  <title>Movie Collection | Search Movies Online</title>
</svelte:head>

<main class="w-full flex flex-col">
  <div class="min-h-[90vh] flex flex-col justify-center items-center">
    <form
      class="w-11/12 dsy-form-control flex flex-row justify-center items-center gap-1"
      method="post"
      action="?/search"
    >
      <input
        class="w-full dsy-input dsy-input-bordered dsy-input-primary lg:w-9/12"
        type="text"
        name="movie-title"
        placeholder="enter keyword..."
      />
      <button class="dsy-btn dsy-btn-primary">
        <img src="/feather-icon/search.svg" alt="" width="32" height="32" />
      </button>
    </form>
  </div>
</main>
