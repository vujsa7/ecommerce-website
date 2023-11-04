<script>
  import Header from "../lib/components/Header.svelte";
  import "./styles.css";
</script>

<div class="app font-body">
  <Header />
  <main>
    <slot />
  </main>
  <footer />
</div>
