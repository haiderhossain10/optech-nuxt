<script setup lang="ts">
import BlogGrid from "~/components/blog-grid/BlogGrid.vue";
import Footer8 from "~/components/footer/Footer8.vue";
import Header6 from "~/components/header/Header6.vue";
import Breadcrumb from "~/components/ui/sections/Breadcrumb.vue";

const path = [
    {
        label: "Home",
        url: "/",
    },
    {
        label: "Blog Grid",
        url: "/blog-grid",
    },
];

useHead({
    title: "Blog Grid",
});
</script>
<template>
    <Header6 />
    <Breadcrumb title="Blog Grid" :path="path" />
    <BlogGrid />
    <Footer8 />
</template>
