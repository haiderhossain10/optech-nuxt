<script setup lang="ts">
import Header8 from "~/components/header/Header8.vue";
import Hero from "~/components/home8/Hero.vue";
import AwesomeService from "~/components/ui/sections/AwesomeService.vue";
import Introduction from "~/components/ui/sections/Introduction.vue";
import RecentProject from "~/components/ui/sections/RecentProject.vue";
import Testimonial from "~/components/ui/sections/Testimonial.vue";
import WorkingProcess from "~/components/ui/sections/WorkingProcess.vue";
import ExpertTeam from "~/components/ui/sections/ExpertTeam.vue";
import ContactForm from "~/components/ui/sections/ContactForm.vue";
import BlogArticle from "~/components/ui/sections/BlogArticle.vue";
import Footer8 from "~/components/footer/Footer8.vue";

useHead({
    title: "Home-8",
});
</script>

<template>
    <Header8 />
    <Hero />
    <AwesomeService />
    <Introduction />
    <WorkingProcess />
    <RecentProject />
    <Testimonial />
    <ExpertTeam />
    <ContactForm />
    <BlogArticle />
    <Footer8 />
</template>
