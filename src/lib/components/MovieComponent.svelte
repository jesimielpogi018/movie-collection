<script lang="ts">
  import type { MovieType } from "../api/type";

  export let movie: MovieType;
</script>

<div
  class="dsy-card w-full bg-base-100 shadow-xl rounded-md hover:bg-slate-600"
>
  <figure class="w-full h-80">
    <img
      class="object-contain"
      src={movie.primaryImage.url ||
        "https://dummyimage.com/600x400/3d3d3d/ffffff.png&text=No+Poster+Available"}
      alt={movie.primaryImage.caption?.plainText || ""}
    />
  </figure>
  <div class="dsy-card-body">
    <a href="/" class="dsy-card-title dsy-link dsy-link-hover"
      >{movie.originalTitleText.text}</a
    >
    <div class="dsy-badge dsy-badge-secondary">{movie.releaseYear?.year}</div>
  </div>
</div>
