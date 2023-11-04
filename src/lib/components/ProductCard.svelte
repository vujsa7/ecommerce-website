<script lang="ts">
  import StarIcon from "$lib/icons/StarIcon.svelte";
  import { ButtonVariant } from "../../types/Button";
  import type { Product } from "../../types/Product";
  import Button from "./Button.svelte";

  export let product: Product;
</script>

<div class="p-8 pb-10 flex flex-col shadow-sm bg-white rounded-lg">
  <img
    class="w-full object-cover aspect-square rounded-xl mb-7"
    src={product.image}
    alt="Product"
  />
  <span class="font-bold text-fw-blue text-xl mb-6 block">
    {product.name}
  </span>
  <span class="font-light text-fw-darkgrey mb-3">
    {product.category}
  </span>
  <div class="flex items-center justify-between">
    <span class="font-light text-fw-darkgrey text-sm line-through">
      {product.price}
    </span>
    <div class="flex gap-1 items-center">
      <StarIcon />
      <span class="font-bold text-fw-gold text-sm items-center">
        {product.rating}
      </span>
    </div>
  </div>
  <span class="font-semibold text-2xl block mb-6 text-fw-red">
    {product.dicount}
  </span>
  <Button variant={ButtonVariant.PRIMARY} dClass="w-full" text="Add to cart" />
</div>
