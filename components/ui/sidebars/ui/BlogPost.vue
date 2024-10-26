<script setup lang="ts">
import { blogRecent1 } from "~/data/data";
import BlogRecentCard from "../../cards/BlogRecentCard.vue";
</script>

<template>
    <div class="optech-blog-widgets">
        <h5>Recent Posts</h5>

        <!-- blog recent card start -->
        <BlogRecentCard
            v-for="(item, i) in blogRecent1"
            :key="i"
            :data="item"
        />
        <!-- blog recent card end -->
    </div>
</template>
