<script setup lang="ts">
import Footer1 from "~/components/footer/Footer1.vue";
import Header1 from "~/components/header/Header1.vue";
import About from "~/components/home-1/About.vue";
import AwesomeService from "~/components/home-1/AwesomeService.vue";
import BlogArticle from "~/components/home-1/BlogArticle.vue";
import ExpertTeam from "~/components/home-1/ExpertTeam.vue";
import Feature from "~/components/home-1/Feature.vue";
import Hero from "~/components/home-1/Hero.vue";
import OurExpertise from "~/components/home-1/OurExpertise.vue";
import RecentProject from "~/components/home-1/RecentProject.vue";
import Testimonial from "~/components/home-1/Testimonial.vue";
import WorkTogether from "~/components/home-1/WorkTogether.vue";

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
    <Testimonial />
    <BlogArticle />
    <WorkTogether />
    <Footer1 />
</template>
