<script setup lang="ts">
import Footer8 from "~/components/footer/Footer8.vue";
import Header6 from "~/components/header/Header6.vue";
import TeamInfo from "~/components/team-detail/TeamInfo.vue";
import Breadcrumb from "~/components/ui/sections/Breadcrumb.vue";
import WorkTogether2 from "~/components/ui/sections/WorkTogether2.vue";

const path = [
    {
        label: "Home",
        url: "/",
    },
    {
        label: "Team",
        url: "/team",
    },
    {
        label: "Team Single",
        url: "/",
    },
];

useHead({
    title: "Pricing",
});
</script>
<template>
    <Header6 />
    <Breadcrumb title="Team Single" :path="path" />
    <TeamInfo />
    <WorkTogether2 />
    <Footer8 />
</template>
