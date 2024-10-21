<script setup lang="ts">
import CartTableRow from "./ui/CartTableRow.vue";

const shopCart = useShop();
</script>

<template>
    <div class="optech-cart-section">
        <div class="container">
            <div class="optech-cart-list">
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <CartTableRow
                            v-for="(item, i) in shopCart"
                            :key="i"
                            :data="item"
                        />
                    </tbody>
                </table>
            </div>

            <div class="optech-cart-footer">
                <div class="optech-cupon-code">
                    <input type="number" placeholder="Coupon code" />
                    <img src="/assets/images/shop/shop.svg" alt="" />
                </div>
                <NuxtLink
                    class="optech-default-btn optech-light-btn"
                    data-aos-duration="800"
                    data-aos="fade-up"
                    data-text="Update Cart"
                    href="/cart"
                    ><span class="btn-wraper">Update Cart</span></NuxtLink
                >
            </div>
        </div>
    </div>
</template>
