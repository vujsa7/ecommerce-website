<script>
  import { products } from "$lib/data/products";
  import CarouselIcon from "$lib/icons/CarouselIcon.svelte";
  import { Splide, SplideSlide, SplideTrack } from "@splidejs/svelte-splide";
  import ProductCard from "./ProductCard.svelte";
</script>

<Splide
  class="mt-[10vw]"
  hasTrack={false}
  options={{
    type: "loop",
    padding: 20,
    gap: 30,
    perPage: 4,
    perMove: 1,
    breakpoints: {
      1200: {
        perPage: 3,
      },
      720: {
        perPage: 2,
      },
      350: {
        perPage: 1,
      },
    },
  }}
>
  <SplideTrack>
    {#each products as product}
      <SplideSlide>
        <ProductCard {product} />
      </SplideSlide>
    {/each}
  </SplideTrack>

  <div class="splide__arrows">
    <button class="splide__arrow splide__arrow--prev">
      <CarouselIcon />
    </button>
    <button class="splide__arrow splide__arrow--next">
      <CarouselIcon />
    </button>
  </div>
</Splide>
