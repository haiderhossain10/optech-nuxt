<script setup lang="ts">
import Footer2 from "~/components/footer/Footer2.vue";
import Header2 from "~/components/header/Header2.vue";
import About from "~/components/home-2/About.vue";
import Achievement from "~/components/home-2/Achievement.vue";
import AwesomeService from "~/components/home-2/AwesomeService.vue";
import BlogArticle from "~/components/home-2/BlogArticle.vue";
import ContactForm from "~/components/home-2/ContactForm.vue";
import Hero from "~/components/home-2/Hero.vue";
import Pricing from "~/components/home-2/Pricing.vue";
import RecentProject from "~/components/home-2/RecentProject.vue";
import WorkingProcess from "~/components/home-2/WorkingProcess.vue";

useHead({
    title: "Home-2",
});
</script>

<template>
    <Header2 />
    <Hero />
    <About />
    <Achievement />
    <AwesomeService />
    <RecentProject />
    <WorkingProcess />
    <Pricing />
    <ContactForm />
    <BlogArticle />
    <Footer2 />
</template>
