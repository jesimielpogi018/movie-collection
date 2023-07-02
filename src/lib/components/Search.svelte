<script lang="ts">
</script>

<div class="w-full flex justify-center items-center">
  <form
    class="w-11/12 dsy-form-control flex flex-row justify-center items-center gap-1"
    method="post"
    action="?/search"
  >
    <input
      class="w-full dsy-input dsy-input-bordered dsy-input-primary dsy-input-md lg:w-9/12"
      type="text"
      name="movie-title"
      placeholder="enter keyword..."
    />
    <button class="dsy-btn dsy-btn-primary">
      <img src="/feather-icon/search.svg" alt="" width="32" height="32" />
    </button>
  </form>
</div>
