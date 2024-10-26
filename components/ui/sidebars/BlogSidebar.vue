<script setup lang="ts">
import BlogCategory from "./ui/BlogCategory.vue";
import BlogPost from "./ui/BlogPost.vue";
import BlogSearch from "./ui/BlogSearch.vue";
import BlogTag from "./ui/BlogTag.vue";
</script>

<template>
    <div class="optech-blog-sidebar">
        <!-- blog search start -->
        <BlogSearch />
        <!-- blog search end -->

        <!-- blog category start -->
        <BlogCategory />
        <!-- blog category end -->

        <!-- blog post start -->
        <BlogPost />
        <!-- blog post end -->

        <!-- blog tag start -->
        <BlogTag />
        <!-- blog tag end -->
    </div>
</template>
