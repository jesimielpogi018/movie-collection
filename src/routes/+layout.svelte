<script>
  import "../global.css";
  const date = new Date();
</script>

<slot />
<footer class="text-white bg-slate-700">
  <p class="text-center text-sm">
    All right reserved {date.getFullYear()}. Built with SvelteKit and
    TailwindCSS
  </p>
</footer>
