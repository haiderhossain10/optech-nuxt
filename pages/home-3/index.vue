<script setup lang="ts">
import Footer3 from "~/components/footer/Footer3.vue";
import Header3 from "~/components/header/Header3.vue";
import AwesomeService from "~/components/home-3/AwesomeService.vue";
import BlogArticle from "~/components/home-3/BlogArticle.vue";
import CompanyOverview from "~/components/home-3/CompanyOverview.vue";
import Feature from "~/components/home-3/Feature.vue";
import Hero3 from "~/components/home-3/Hero3.vue";
import RecentProject from "~/components/home-3/RecentProject.vue";
import Testimonial from "~/components/home-3/Testimonial.vue";

useHead({
    title: "Home-3",
});
</script>

<template>
    <Header3 />
    <Hero3 />
    <AwesomeService />
    <CompanyOverview />
    <Feature />
    <RecentProject />
    <Testimonial />
    <BlogArticle />
    <Footer3 />
</template>
