<script setup lang="ts">
import Footer8 from "~/components/footer/Footer8.vue";
import Header6 from "~/components/header/Header6.vue";
import AwesomeService from "~/components/service/AwesomeService.vue";
import Breadcrumb from "~/components/ui/sections/Breadcrumb.vue";
import WorkingProcess from "~/components/ui/sections/WorkingProcess.vue";
import WorkTogether2 from "~/components/ui/sections/WorkTogether2.vue";

const path = [
    {
        label: "Home",
        url: "/",
    },
    {
        label: "Our Services",
        url: "/pricing",
    },
];

useHead({
    title: "Pricing",
});
</script>
<template>
    <Header6 />
    <Breadcrumb title="Our Services" :path="path" />
    <WorkingProcess />
    <AwesomeService />
    <WorkTogether2 />
    <Footer8 />
</template>
