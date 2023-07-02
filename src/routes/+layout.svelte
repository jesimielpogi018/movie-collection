<script>
  import "../global.css";
  const date = new Date();
</script>

<nav class="dsy-navbar bg-base-100 shadow">
  <div class="dsy-dropdown dsy-navbar-start lg:hidden">
    <button tabindex="0" class="btn m-1"
      ><img
        src="/feather-icon/menu.svg"
        alt=""
        width="32"
        height="32"
      /></button
    >
    <ul
      class="dsy-dropdown-content z-[1] dsy-menu p-2 shadow bg-base-100 rounded-box w-52"
    >
      <li><a href="/">Home</a></li>
      <li><a href="/popular">Popular</a></li>
      <li><a href="/movies">Movies</a></li>
      <li><a href="/upcoming">Upcoming</a></li>
    </ul>
  </div>
  <div class="hidden dsy-navbar-start lg:block">
    <ul class="w-full dsy-menu-horizontal p-2 gap-3">
      <li>
        <a
          class="text-lg transition duration-150 ease-in-out hover:text-primary"
          href="/home">Home</a
        >
      </li>
      <li>
        <a
          class="text-lg transition duration-150 ease-in-out hover:text-primary"
          href="/popular">Popular</a
        >
      </li>
      <li>
        <a
          class="text-lg transition duration-150 ease-in-out hover:text-primary"
          href="/movies">Movies</a
        >
      </li>
      <li>
        <a
          class="text-lg transition duration-150 ease-in-out hover:text-primary"
          href="/upcoming">Upcoming</a
        >
      </li>
    </ul>
  </div>
  <div class="dsy-navbar-end" />
</nav>
<slot />
<footer class="bg-base-300">
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
