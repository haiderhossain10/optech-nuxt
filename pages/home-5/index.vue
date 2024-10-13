<script setup lang="ts">
import Header5 from "~/components/header/Header5.vue";
import Achievement from "~/components/ui/sections/Achievement.vue";
import AwesomeService from "~/components/home-5/AwesomeService.vue";
import ChooseUs from "~/components/home-5/ChooseUs.vue";
import CompanyOverview from "~/components/home-5/CompanyOverview.vue";
import Hero from "~/components/home-5/Hero.vue";
import RecentProject from "~/components/home-5/RecentProject.vue";
import WorkingProcess from "~/components/ui/sections/WorkingProcess.vue";
import Testimonial from "~/components/home-5/Testimonial.vue";
import BlogArticle from "~/components/home-5/BlogArticle.vue";
import Footer5 from "~/components/footer/Footer5.vue";

useHead({
    title: "Home-5",
});
</script>

<template>
    <Header5 />
    <Hero />
    <ChooseUs />
    <CompanyOverview />
    <AwesomeService />
    <WorkingProcess />
    <RecentProject />
    <Achievement />
    <Testimonial />
    <BlogArticle />
    <Footer5 />
</template>
