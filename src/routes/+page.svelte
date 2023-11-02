<script>
  import ArrowIcon from "$lib/icons/ArrowIcon.svelte";
  import Button from "../components/Button.svelte";
  import { Splide, SplideSlide } from "@splidejs/svelte-splide";
  import '@splidejs/splide/css';
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="FullStack Wiz E-Commerce Store" />
</svelte:head>

<div class="padding-x">
  <h1
    class="flex flex-col text-[18vw] leading-none pt-6 text-fw-blue uppercase font-serif text-center items-center sm:text-start sm:items-start"
  >
    Elevate your <br />
    <span class="flex text-[12vw] relative">
      Tech
      <div class="w-[30vw] relative" />
      <img
        src="src/lib/images/laptop.png"
        alt="Exclusive Laptops, Low Prices, Buy Now!"
        class="absolute left-[7vw] -top-[11vw] w-[43vw]"
      />
      <div class="flex flex-col gap-5">
        <span>Game</span>
        <div
          class="w-[25vw] flex-col gap-5 sm:gap-10 hidden sm:visible sm:flex"
        >
          <span class="block text-sm font-sans normal-case">
            Discover our curated selection of cutting-edge laptops designed to
            empower your digital journey.
          </span>
          <Button
            dClass="w-full"
            text="Explore Laptops"
            suffixIcon={ArrowIcon}
          />
        </div>
      </div>
    </span>
  </h1>
  <div class="w-full flex-col gap-8 flex sm:hidden mt-[20vw]">
    <span class="block text-sm font-sans normal-case w-2/3">
      Discover our curated selection of cutting-edge laptops designed to empower
      your digital journey.
    </span>
    <Button dClass="w-full" text="Explore Laptops" suffixIcon={ArrowIcon} />
  </div>

  <Splide
    options={{
      type: "loop",
      gap: "20px",
      perPage: 3,
      perMove: 1,
    }}
  >
    <SplideSlide>a</SplideSlide>
    <SplideSlide>b</SplideSlide>
    <SplideSlide>c</SplideSlide>
    <SplideSlide>d</SplideSlide>
    <SplideSlide>e</SplideSlide>

    <div class="splide__arrows">
      <button class="splide__arrow splide__arrow--prev">Prev</button>
      <button class="splide__arrow splide__arrow--next">Next</button>
    </div>
  </Splide>
</div>
