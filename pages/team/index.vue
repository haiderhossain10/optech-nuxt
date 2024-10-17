<script setup lang="ts">
import Footer8 from "~/components/footer/Footer8.vue";
import Header6 from "~/components/header/Header6.vue";
import TeamItem from "~/components/team/TeamItem.vue";
import Breadcrumb from "~/components/ui/sections/Breadcrumb.vue";
import WorkTogether2 from "~/components/ui/sections/WorkTogether2.vue";

const path = [
    {
        label: "Home",
        url: "/",
    },
    {
        label: "Our team",
        url: "/",
    },
];

useHead({
    title: "Pricing",
});
</script>
<template>
    <Header6 />
    <Breadcrumb title="Our team" :path="path" />
    <TeamItem />
    <WorkTogether2 />
    <Footer8 />
</template>
