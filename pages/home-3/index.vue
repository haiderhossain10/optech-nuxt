<script setup lang="ts">
import Header3 from "~/components/header/Header3.vue";
import AwesomeService from "~/components/home-3/AwesomeService.vue";
import CompanyOverview from "~/components/home-3/CompanyOverview.vue";
import Hero3 from "~/components/home-3/Hero3.vue";

useHead({
    title: "Home-3",
});
</script>

<template>
    <Header3 />
    <Hero3 />
    <AwesomeService />
    <CompanyOverview />
</template>
