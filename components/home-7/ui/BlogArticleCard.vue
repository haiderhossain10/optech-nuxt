<script setup lang="ts">
import type { BlogArticle1Type } from "~/types/types";

const props = defineProps<{
    data: BlogArticle1Type;
}>();

const { imgUrl, category, title } = props.data;
</script>

<template>
    <div class="optech-blog-wrap blog-column">
        <div class="optech-blog-left">
            <NuxtLink to="/single-blog">
                <div class="optech-blog-thumb">
                    <NuxtImg :src="imgUrl" alt="img" />
                </div>
            </NuxtLink>
        </div>
        <div class="optech-blog-content">
            <div class="optech-blog-meta">
                <ul>
                    <li>
                        <NuxtLink to="/single-blog">{{ category }}</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/single-blog">26 June 2023</NuxtLink>
                    </li>
                </ul>
            </div>
            <NuxtLink to="/single-blog">
                <h4>{{ title }}</h4>
            </NuxtLink>
            <NuxtLink class="optech-icon-btn" to="/single-blog"
                ><i class="icon-show ri-arrow-right-line"></i>
                <span>Learn More</span>
                <i class="icon-hide ri-arrow-right-line"></i
            ></NuxtLink>
        </div>
    </div>
</template>
