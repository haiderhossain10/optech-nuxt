<script setup lang="ts">
import { toast } from "vue-sonner";
import type { ShopType } from "~/types/types";

const props = defineProps<{
    data: ShopType;
}>();

const { id, imgUrl, title, price, offerPrice, isSell } = props.data;

const shop = useShop();

// add to cart handler
const addToCartHandler = () => {
    const isExist = shop.value.find((item) => item.id === props.data.id);

    if (isExist) {
        shop.value.map((item) => {
            if (item && item.id === props.data.id) {
                item.qty = (item.qty || 0) + 1;
            }
        });
        toast.success(`(${isExist.qty}  - ${props.data.title})  added to cart`);
    } else {
        shop.value.push({
            ...props.data,
            qty: 1,
        });
        toast.success(`(${props.data.title}) added to cart`);
    }
};
</script>

<template>
    <div class="optech-shop-wrap">
        <div class="optech-shop-thumb">
            <NuxtLink :to="`/single-shop/${id}`">
                <NuxtImg :src="imgUrl" alt="img" />
            </NuxtLink>
            <button
                @click="addToCartHandler"
                class="optech-shop-btn"
                data-text="Add to Cart"
            >
                <span class="btn-wraper">Add to Cart</span>
            </button>
            <NuxtLink v-if="isSell" class="optech-shop-badge" to="/"
                >Sale</NuxtLink
            >
        </div>
        <div class="optech-shop-data">
            <NuxtLink :to="`/single-shop/${id}`">
                <h5>{{ title }}</h5>
            </NuxtLink>
            <h6>
                ${{ offerPrice.toFixed(2) }}
                <del>${{ price.toFixed(2) }}</del>
            </h6>
        </div>
    </div>
</template>
