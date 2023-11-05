<script>
  import "@splidejs/splide/css";

  import DiscountedProducts from "$lib/components/DiscountedProducts.svelte";
  import FeaturedSection from "$lib/components/FeaturedSection.svelte";
  import HeroSection from "$lib/components/HeroSection.svelte";
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="FullStack Wiz E-Commerce Store" />
</svelte:head>

<div class="padding-x pb-16 bg-fw-grey">
  <HeroSection />
  <DiscountedProducts />
  <FeaturedSection />
</div>
