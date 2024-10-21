<script setup lang="ts">
import Footer8 from "~/components/footer/Footer8.vue";
import Header6 from "~/components/header/Header6.vue";
import ProductInfo from "~/components/shop-single/ProductInfo.vue";
import ProductInfoTab from "~/components/shop-single/ProductInfoTab.vue";
import RelatedProduct from "~/components/shop-single/RelatedProduct.vue";
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
    {
        label: "Shop Details",
        url: "/",
    },
];

useHead({
    title: "Shop Details",
});
</script>
<template>
    <Header6 />
    <Breadcrumb title="Shop Details" :path="path" />
    <ProductInfo />
    <ProductInfoTab />
    <RelatedProduct />
    <Footer8 />
</template>
