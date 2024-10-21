<script setup lang="ts">
const shopProduct = useShop();

const total = computed(() => {
    return shopProduct.value.reduce((acc, item) => {
        return acc + item.offerPrice * (item.qty ?? 0);
    }, 0);
});
</script>

<template>
    <div class="optech-checkuot-sidebar-column">
        <div class="optech-checkuot-sidebar">
            <h5>Your Order</h5>
            <ul>
                <li>Product<span>Subtotal</span></li>
                <li v-for="(item, i) in shopProduct" :key="i">
                    {{ item.title }} x{{ item.qty
                    }}<span
                        >${{
                            ((item.qty ?? 0) * item.offerPrice).toFixed(2)
                        }}</span
                    >
                </li>
                <li>
                    Subtotal<span>${{ total.toFixed(2) }}</span>
                </li>
                <li>
                    Total<span class="total-amount"
                        >${{ total.toFixed(2) }}</span
                    >
                </li>
            </ul>
            <div class="shop-radio-btn">
                <input id="radio-2" name="radio" type="radio" />
                <label for="radio-2" class="radio-label"
                    >Cash on delivery</label
                >
            </div>
            <span>Pay with cash upon delivery.</span>
            <p>
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our privacy policy.
            </p>
        </div>
        <NuxtLink
            class="optech-default-btn shop-order-btn"
            to="/"
            data-text="Place Order"
            ><span class="btn-wraper">Place Order</span></NuxtLink
        >
    </div>
</template>
