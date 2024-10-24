<script setup lang="ts">
import Footer8 from "~/components/footer/Footer8.vue";
import Header6 from "~/components/header/Header6.vue";
import PortfolioGrid from "~/components/portfolio-grid/PortfolioGrid.vue";
import Breadcrumb from "~/components/ui/sections/Breadcrumb.vue";

const path = [
    {
        label: "Home",
        url: "/",
    },
    {
        label: "Portfolio Grid",
        url: "/portfolio-grid",
    },
];

useHead({
    title: "Portfolio Grid",
});
</script>
<template>
    <Header6 />
    <Breadcrumb title="Portfolio Grid" :path="path" />
    <PortfolioGrid />
    <Footer8 />
</template>
