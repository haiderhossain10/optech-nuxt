<script setup lang="ts">
import Footer8 from "~/components/footer/Footer8.vue";
import Header6 from "~/components/header/Header6.vue";
import PortfolioDetails from "~/components/portfolio-details/PortfolioDetails.vue";
import Breadcrumb from "~/components/ui/sections/Breadcrumb.vue";
import WorkTogether2 from "~/components/ui/sections/WorkTogether2.vue";

const path = [
    {
        label: "Home",
        url: "/",
    },
    {
        label: "Portfolio",
        url: "/portfolio-grid",
    },
    {
        label: "Cyber Security Analysis",
        url: "/portfolio-details",
    },
];

useHead({
    title: "Cyber Security Analysis",
});
</script>
<template>
    <Header6 />
    <Breadcrumb title="Cyber Security Analysis" :path="path" />
    <PortfolioDetails />
    <WorkTogether2 />
    <Footer8 />
</template>
