<script>
  import { draw } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  function get() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ name: "testing" });
        console.log("infinite loop");
      }, 2000);
    });
  }

  let condition = false;

  const changeCondition = async () => {
    await new Promise((res) => setTimeout(res, 500));
    condition = !condition;
  };
</script>

{#await get() then item}
  {console.log("hi")}
{/await}

<button on:click={changeCondition}> show svg </button>

<svg viewBox="0 0 5 5" xmlns="http://www.w3.org/2000/svg">
  {#if condition}
    <path
      transition:draw={{ duration: 1500, easing: quintOut }}
      d="M2 1 h1 v1 h1 v1 h-1 v1 h-1 v-1 h-1 v-1 h1 z"
      fill="none"
      stroke="cornflowerblue"
      stroke-width="0.1px"
    />
  {/if}
</svg>

<style>
  svg {
    display: block;

    height: 150px;
    width: 150px;
  }
</style>
