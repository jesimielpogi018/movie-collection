<script lang="ts">
  import type { MovieType } from "../api/type";

  export let movie: MovieType;
</script>

<div class="border border-solid border-slate-500 rounded">
  <img
    class="block"
    src={"https://dummyimage.com/600x400/3d3d3d/ffffff.png&text=No+Poster+Available" ||
      movie.primaryImage?.url ||
      ""}
    alt={movie.primaryImage?.caption?.plainText || ""}
  />

  <p>{movie.titleText.text}</p>
</div>
