<script lang="ts">
  import Icon from "./icon.svelte";
  export const icons = {};
</script>

<main>
  <div
    class="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-primary text-quaternary font-bold"
  >
    <Icon message="Hey, I am a prop value" />
    <Icon />
  </div>
</main>
