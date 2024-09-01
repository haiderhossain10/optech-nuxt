<script setup lang="ts">
import Header2 from "~/components/header/Header2.vue";
import About from "~/components/home-2/About.vue";
import Achievement from "~/components/home-2/Achievement.vue";
import Hero from "~/components/home-2/Hero.vue";

useHead({
    title: "Home-2",
});
</script>

<template>
    <Header2 />
    <Hero />
    <About />
    <Achievement />
</template>
