<script setup lang="ts">
import Header7 from "~/components/header/Header7.vue";
import Pricing from "~/components/ui/sections/Pricing.vue";
import AwesomeService from "~/components/home-7/AwesomeService.vue";
import Branding from "~/components/home-7/Branding.vue";
import Feature from "~/components/home-7/Feature.vue";
import Hero from "~/components/home-7/Hero.vue";
import OurExpertise from "~/components/home-7/OurExpertise.vue";
import RecentProject from "~/components/home-7/RecentProject.vue";
import BlogArticle from "~/components/home-7/BlogArticle.vue";
import Faq from "~/components/ui/sections/Faq.vue";
import Footer7 from "~/components/footer/Footer7.vue";

useHead({
    title: "Home-7",
});
</script>

<template>
    <Header7 />
    <Hero />
    <AwesomeService />
    <OurExpertise />
    <Branding />
    <RecentProject />
    <Feature />
    <Pricing />
    <BlogArticle />
    <Faq />
    <Footer7 />
</template>
