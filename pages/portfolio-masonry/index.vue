<script setup lang="ts">
import Footer8 from "~/components/footer/Footer8.vue";
import Header6 from "~/components/header/Header6.vue";
import PortfolioMasonry from "~/components/portfolio-masonry/PortfolioMasonry.vue";
import Breadcrumb from "~/components/ui/sections/Breadcrumb.vue";

const path = [
    {
        label: "Home",
        url: "/",
    },
    {
        label: "Portfolio Masonry",
        url: "/portfolio-masonry",
    },
];

useHead({
    title: "Portfolio Masonry",
});
</script>
<template>
    <Header6 />
    <Breadcrumb title="Portfolio Masonry" :path="path" />
    <PortfolioMasonry />
    <Footer8 />
</template>
