<script setup lang="ts">
import BlogDetails from "~/components/blog-details/BlogDetails.vue";
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
    {
        label: "Technology support allows erie non-profit to serve",
        url: "/blog-details",
    },
];

useHead({
    title: "Technology support allows erie non-profit to serve",
});
</script>
<template>
    <Header6 />
    <Breadcrumb
        title="Technology support allows erie non-profit to serve"
        :path="path"
    />
    <BlogDetails />
    <Footer8 />
</template>
