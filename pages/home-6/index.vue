<script setup lang="ts">
import Header6 from "~/components/header/Header6.vue";
import ContactForm from "~/components/ui/sections/ContactForm.vue";
import AwesomeService from "~/components/home-6/AwesomeService.vue";
import Hero from "~/components/home-6/Hero.vue";
import RecentProject from "~/components/home-6/RecentProject.vue";
import About from "~/components/ui/sections/About.vue";
import ExpertTeam from "~/components/home-6/ExpertTeam.vue";
import WorkTogether from "~/components/ui/sections/WorkTogether.vue";
import BlogArticle from "~/components/home-6/BlogArticle.vue";
import Footer6 from "~/components/footer/Footer6.vue";

useHead({
    title: "Home-6",
});
</script>

<template>
    <Header6 />
    <Hero />
    <About />
    <AwesomeService />
    <RecentProject />
    <ContactForm />
    <ExpertTeam />
    <WorkTogether />
    <BlogArticle />
    <Footer6 />
</template>
