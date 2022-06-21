<script lang="ts">
  export let message: string = "Empty";
  import { draw } from "svelte/transition";
  import { onMount } from "svelte";
  import { quintOut } from "svelte/easing";
  let duration = 4000;
  let delay = 500;
  let userOn = false;
  let done = false;

  onMount(() => {
    userOn = true;
    setTimeout(() => {
      document.querySelectorAll("path").forEach((path) => {
        // path.style.fill = "orange";
      });
    }, duration + delay);
  });
</script>

<main>
  <div class="hover:bg-green-600">
    <h1>{message}</h1>
  </div>

  {#if userOn}
    <svg
      id="ehUGH7woOLy1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 640 480"
      shape-rendering="geometricPrecision"
      text-rendering="geometricPrecision"
      ><path
        transition:draw={{ duration: 500, easing: quintOut }}
        d="M151.128268,90.963327c-10.94929-4.211265,47.166169-116.230918,11.791542,4.211265s-50.535182,10.107037,62.326724,53.061941s228.250571,23.583084,112.019653,42.954904-192.03369,47.166169-59.799965,32.005615s182.768907-90.963326,117.915424-8.42253-149.921038,99.385858-64.853483,83.38305s140.656255-96.016846,85.067555-16.002808-185.978407,52.241607-61.484471,84.225303c345.423096,88.742535,145.020845,45.366417,151.605545-6.738025c20.312534-160.732188,42.112651-10.949289-4.211265-69.064748s74.96052-58.957713-2.526759-25.267591s93.490085-8.422529,41.270398-54.746446s49.692929-106.123882-16.002807-53.061941s70.749255-44.639411-6.738024-24.425338-60.642218-121.284436-50.535182-26.952097s70.749254,21.056326-26.109844,15.160555s6.738025-101.912616-38.743639-27.79435s6.738024-64.01123-22.740832-1.684506-79.171785-21.898578-23.583085,18.529567s69.907001-2.52676,0,22.740831-118.757677-73.276013-41.270398-11.791542s125.495701-157.501316-4.211265-37.059133-245.095631,91.80558-113.704159,64.853483-194.560449-42.954905-69.907001,44.63941s96.859099-50.619407,19.37182,46.281804s118.757677,171.86173,32.005615,81.740656"
        fill="none"
        stroke="#3f5787"
        stroke-width="2"
      /></svg
    >
    {(userOn = false)}
  {/if}
</main>

<style>
  path {
    stroke: green;
  }
</style>
