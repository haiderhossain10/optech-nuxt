<script setup lang="ts">
import CartInfo from "~/components/cart/CartInfo.vue";
import CartTable from "~/components/cart/CartTable.vue";
import Footer8 from "~/components/footer/Footer8.vue";
import Header6 from "~/components/header/Header6.vue";
import Breadcrumb from "~/components/ui/sections/Breadcrumb.vue";

const path = [
    {
        label: "Home",
        url: "/",
    },
    {
        label: "My Cart",
        url: "/card",
    },
];

useHead({
    title: "My Cart",
});
</script>
<template>
    <Header6 />
    <Breadcrumb title="My Cart" :path="path" />
    <CartTable />
    <CartInfo />
    <Footer8 />
</template>
