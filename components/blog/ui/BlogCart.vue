<script setup lang="ts">
import type { BlogType } from "~/types/types";

const props = defineProps<{
    data: BlogType;
}>();

const { imgUrl, title, date, category, brief } = props.data;
</script>

<template>
    <div class="optech-blog-wrap">
        <NuxtLink to="/blog-details">
            <div class="optech-blog-thumb">
                <NuxtImg :src="imgUrl" alt="blog" />
            </div>
        </NuxtLink>
        <div class="optech-blog-content">
            <div class="optech-blog-meta">
                <ul>
                    <li>
                        <NuxtLink to="/blog-details">{{ category }}</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/blog-details">{{ date }}</NuxtLink>
                    </li>
                </ul>
            </div>
            <NuxtLink to="/blog-details">
                <h2>{{ title }}</h2>
            </NuxtLink>
            <p>
                {{ brief }}
            </p>
            <NuxtLink class="optech-icon-btn" to="/blog-details"
                ><i class="icon-show ri-arrow-right-line"></i>
                <span>Learn More</span>
                <i class="icon-hide ri-arrow-right-line"></i
            ></NuxtLink>
        </div>
    </div>
</template>
