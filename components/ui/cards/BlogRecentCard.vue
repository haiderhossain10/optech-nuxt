<script setup lang="ts">
import type { BlogRecentType } from "~/types/types";

const props = defineProps<{
    data: BlogRecentType;
}>();

const { imgUrl, title, date } = props.data;
</script>

<template>
    <NuxtLink class="optech-recent-post-item" to="/blog-details">
        <div class="optech-recent-post-thumb">
            <NuxtImg :src="imgUrl" alt="blog" />
        </div>
        <div class="optech-recent-post-data">
            <p>{{ title }}</p>
            <span>{{ date }}</span>
        </div>
    </NuxtLink>
</template>
