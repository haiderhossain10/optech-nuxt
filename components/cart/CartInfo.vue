<script setup lang="ts">
import { computed } from "vue";

const shopCart = useShop();

// total price
const total = computed(() => {
    return shopCart.value.reduce((acc, item) => {
        return acc + item.offerPrice * (item.qty ?? 0);
    }, 0);
});
</script>

<template>
    <div class="section optech-section-padding-bottom">
        <div class="container">
            <div class="optech-cart-total">
                <h5>Cart Totals</h5>
                <div class="optech-cart-total-item">
                    <p>Subtotal:</p>
                    <p>${{ total }}</p>
                </div>
                <div class="optech-cart-total-item">
                    <p>Subtotal:</p>
                    <p>
                        <span>${{ total }}</span>
                    </p>
                </div>
                <NuxtLink
                    class="optech-default-btn rt-mt-40"
                    data-aos-duration="800"
                    data-aos="fade-up"
                    data-text="Proceed to Checkout"
                    to="/checkout"
                    ><span class="btn-wraper"
                        >Proceed to Checkout</span
                    ></NuxtLink
                >
            </div>
        </div>
    </div>
</template>
