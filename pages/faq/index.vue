<script setup lang="ts">
import FaqQuestion from "~/components/faq/FaqQuestion.vue";
import Faqs from "~/components/faq/Faqs.vue";
import Footer8 from "~/components/footer/Footer8.vue";
import Header6 from "~/components/header/Header6.vue";
import Breadcrumb from "~/components/ui/sections/Breadcrumb.vue";
import WorkTogether2 from "~/components/ui/sections/WorkTogether2.vue";

const path = [
    {
        label: "Home",
        url: "/",
    },
    {
        label: "Faqs",
        url: "/",
    },
];

useHead({
    title: "Faqs",
});
</script>
<template>
    <Header6 />
    <Breadcrumb title="Faqs" :path="path" />
    <Faqs />
    <FaqQuestion />
    <WorkTogether2 />
    <Footer8 />
</template>
