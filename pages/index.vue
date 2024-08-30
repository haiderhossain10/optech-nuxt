<script setup lang="ts">
import Header1 from "~/components/header/Header1.vue";
import About from "~/components/home-1/About.vue";
import AwesomeService from "~/components/home-1/AwesomeService.vue";
import ExpertTeam from "~/components/home-1/ExpertTeam.vue";
import Feature from "~/components/home-1/Feature.vue";
import Hero from "~/components/home-1/Hero.vue";
import OurExpertise from "~/components/home-1/OurExpertise.vue";
import RecentProject from "~/components/home-1/RecentProject.vue";

useHead({
    title: "Home-1",
});
</script>

<template>
    <Header1 />
    <Hero />
    <Feature />
    <About />
    <AwesomeService />
    <OurExpertise />
    <RecentProject />
    <ExpertTeam />
</template>
