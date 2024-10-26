<script setup lang="ts">
import Blogs from "~/components/blog/Blogs.vue";
import Footer8 from "~/components/footer/Footer8.vue";
import Header6 from "~/components/header/Header6.vue";
import Breadcrumb from "~/components/ui/sections/Breadcrumb.vue";

const path = [
    {
        label: "Home",
        url: "/",
    },
    {
        label: "Blog",
        url: "/blog",
    },
];

useHead({
    title: "Blog",
});
</script>
<template>
    <Header6 />
    <Breadcrumb title="Blog" :path="path" />
    <Blogs />
    <Footer8 />
</template>
