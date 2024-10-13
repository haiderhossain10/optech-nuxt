<script setup lang="ts">
import Header6 from "~/components/header/Header6.vue";
import Achievement from "~/components/ui/sections/Achievement.vue";
import About from "~/components/ui/sections/About.vue";
import Breadcrumb from "~/components/ui/sections/Breadcrumb.vue";
import Feature from "~/components/ui/sections/Feature.vue";
import ExpertTeam2 from "~/components/ui/sections/ExpertTeam2.vue";
import ContactForm from "~/components/ui/sections/ContactForm.vue";
import Footer8 from "~/components/footer/Footer8.vue";
import WorkTogether from "~/components/about/WorkTogether.vue";

const path = [
    {
        label: "Home",
        url: "/",
    },
    {
        label: "About Us",
        url: "/about",
    },
];

useHead({
    title: "About",
});
</script>

<template>
    <Header6 />
    <Breadcrumb title="About Us" :path="path" />
    <About />
    <Feature />
    <Achievement />
    <ExpertTeam2 />
    <ContactForm />
    <WorkTogether />
    <Footer8 />
</template>
