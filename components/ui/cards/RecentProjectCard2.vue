<script setup lang="ts">
import type { RecentProject1Type } from "~/types/types";

const props = defineProps<{
    data: RecentProject1Type;
}>();

const { title, category, imgUrl } = props.data;
</script>

<template>
    <div class="optech-portfolio-wrap2">
        <div class="optech-portfolio-thumb2">
            <NuxtImg class="h-100 w-100" :src="imgUrl" alt="img" />
        </div>
        <div class="optech-portfolio-data2-wrap">
            <div class="optech-portfolio-data2">
                <NuxtLink to="/portfolio-details">
                    <h4>{{ title }}</h4>
                </NuxtLink>
                <p>{{ category }}</p>
            </div>
            <NuxtLink class="optech-portfolio-btn2" to="/portfolio-details">
                <span class="p-btn-wraper"
                    ><i class="ri-arrow-right-up-line"></i
                ></span>
            </NuxtLink>
        </div>
    </div>
</template>
