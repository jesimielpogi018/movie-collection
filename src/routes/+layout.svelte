<script>
  import "../global.css";
  const date = new Date();
</script>

<slot />
<footer class="bg-slate-600">
  <ul class="flex flex-row justify-center items-center flex-wrap gap-x-2">
    <li>
      <a class="text-white hover:text-slate-400" href="/terms-of-services"
        >Terms of Service</a
      >
    </li>
    <li>
      <a class="text-white hover:text-slate-400" href="/user-agreement"
        >User Agreement</a
      >
    </li>
    <li>
      <a class="text-white hover:text-slate-400" href="/contact">Contact</a>
    </li>
    <li>
      <a class="text-white hover:text-slate-400" href="/license">MIT License</a>
    </li>
  </ul>
  <p class="text-white text-center text-sm text-opacity-80">
    All right reserved {date.getFullYear()}. Built with SvelteKit and
    TailwindCSS
  </p>
</footer>
