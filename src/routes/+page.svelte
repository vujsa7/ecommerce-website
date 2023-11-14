<script>
  import "@splidejs/splide/css";
  import HeroSection from "../components/HeroSection.svelte";
  import DiscountedProducts from "../components/DiscountedProducts.svelte";
  import FeaturedSection from "../components/FeaturedSection.svelte";

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
