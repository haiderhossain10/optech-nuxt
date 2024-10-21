<script setup lang="ts">
import { toast } from "vue-sonner";
import type { ShopType } from "~/types/types";

const props = defineProps<{
    data: ShopType;
}>();

const { id, imgUrl, title, offerPrice, qty } = props.data;

const shopProduct = useShop();

const count = ref(qty ?? 1);

// delete product from cart
const deleteProductHandler = () => {
    shopProduct.value = shopProduct.value.filter((item) => item.id !== id);
    toast.error("Product removed from cart");
};

watch(count, async (newCount, oldCount) => {
    if (newCount === oldCount) return;

    shopProduct.value = shopProduct.value.map((item) => {
        if (item.id === id) {
            item.qty = newCount;
        }

        return item;
    });
});
</script>

<template>
    <tr data-aos="fade-up" data-aos-duration="400">
        <td>
            <div class="optech-cart-thumb">
                <i class="ri-close-line" @click="deleteProductHandler"></i>
                <NuxtImg :src="imgUrl" alt="product-img" />
                <h5>{{ title }}</h5>
            </div>
        </td>
        <td>${{ offerPrice.toFixed(2) }}</td>
        <td>
            <div class="optech-product-number">
                <span
                    @click="count > 1 && (count -= 1)"
                    class="optech-product-minus"
                    ><i class="ri-subtract-line"></i
                ></span>
                <input type="text" v-model="count" />
                <span @click="count += 1" class="optech-product-plus"
                    ><i class="ri-add-line"></i
                ></span>
            </div>
        </td>
        <td>${{ (count * offerPrice).toFixed(2) }}</td>
    </tr>
</template>
