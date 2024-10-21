<script setup lang="ts">
import Footer8 from "~/components/footer/Footer8.vue";
import Header6 from "~/components/header/Header6.vue";
import ShopList from "~/components/shop/ShopList.vue";
import Breadcrumb from "~/components/ui/sections/Breadcrumb.vue";

const path = [
    {
        label: "Home",
        url: "/",
    },
    {
        label: "Shop",
        url: "/shop",
    },
];

useHead({
    title: "Shop",
});
</script>
<template>
    <Header6 />
    <Breadcrumb title="Shop" :path="path" />
    <ShopList />
    <Footer8 />
</template>
