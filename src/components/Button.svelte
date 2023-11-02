<script lang="ts">
  export let text = "";
  export let dClass = "";
  export let onClick = () => {};
  export let suffixIcon: ConstructorOfATypedSvelteComponent | undefined =
    undefined;
</script>

<button
  class={`flex gap-1 items-center justify-center rounded-lg border border-fw-blue py-3
   text-sm font-sans normal-case font-medium ${dClass}`}
  on:click={onClick}
>
  {text}
  <svelte:component this={suffixIcon} />
</button>
