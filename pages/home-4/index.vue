<script setup lang="ts">
import Footer4 from "~/components/footer/Footer4.vue";
import Header4 from "~/components/header/Header4.vue";
import AwesomeService from "~/components/home-4/AwesomeService.vue";
import BlogArticle from "~/components/ui/sections/BlogArticle.vue";
import ExpertTeam from "~/components/ui/sections/ExpertTeam.vue";
import Faq from "~/components/ui/sections/Faq.vue";
import Hero from "~/components/home-4/Hero.vue";
import Introduction from "~/components/ui/sections/Introduction.vue";
import Pricing from "~/components/ui/sections/Pricing.vue";
import RecentProject from "~/components/home-4/RecentProject.vue";

useHead({
    title: "Home-4",
});
</script>

<template>
    <Header4 />
    <Hero />
    <AwesomeService />
    <Introduction />
    <RecentProject />
    <Pricing />
    <ExpertTeam />
    <Faq />
    <BlogArticle />
    <Footer4 />
</template>
