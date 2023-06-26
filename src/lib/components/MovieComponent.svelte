<script lang="ts">
  import type { MovieType } from "../api/type";

  export let movie: MovieType;
</script>

<div class="border border-solid border-slate-500 rounded">
  <img
    class="block"
    src={movie.primaryImage.url}
    alt={movie.primaryImage.caption.plainText}
  />

  <p>{movie.titleText.text}</p>
</div>
