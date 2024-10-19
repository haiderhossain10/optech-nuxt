<script setup lang="ts">
import Footer8 from "~/components/footer/Footer8.vue";
import Header6 from "~/components/header/Header6.vue";
import TestimonialItem from "~/components/testimonial/TestimonialItem.vue";
import Breadcrumb from "~/components/ui/sections/Breadcrumb.vue";
import WorkTogether2 from "~/components/ui/sections/WorkTogether2.vue";

const path = [
    {
        label: "Home",
        url: "/",
    },
    {
        label: "Testimonials",
        url: "/",
    },
];

useHead({
    title: "Testimonials",
});
</script>
<template>
    <Header6 />
    <Breadcrumb title="Testimonials" :path="path" />
    <TestimonialItem />
    <WorkTogether2 />
    <Footer8 />
</template>
