<script setup lang="ts">
import Footer8 from "~/components/footer/Footer8.vue";
import Header6 from "~/components/header/Header6.vue";
import Pricing from "~/components/pricing/Pricing.vue";
import Breadcrumb from "~/components/ui/sections/Breadcrumb.vue";
import Faq from "~/components/ui/sections/Faq.vue";
import WorkTogether2 from "~/components/ui/sections/WorkTogether2.vue";

const path = [
    {
        label: "Home",
        url: "/",
    },
    {
        label: "Pricing plan",
        url: "/pricing",
    },
];

useHead({
    title: "Pricing",
});
</script>
<template>
    <Header6 />
    <Breadcrumb title="Pricing plan" :path="path" />
    <Pricing />
    <Faq />
    <WorkTogether2 />
    <Footer8 />
</template>
