<script setup lang="ts">
import type { RecentProject1Type } from "~/types/types";

const props = defineProps<{
    data: RecentProject1Type;
}>();

const { imgUrl, title, category } = props.data;
</script>

<template>
    <div class="optech-portfolio-wrap">
        <div class="optech-portfolio-thumb">
            <NuxtImg class="h-auto w-100" :src="imgUrl" alt="img" />
            <NuxtLink class="optech-portfolio-btn" to="/single-portfolio">
                <span class="p-btn-wraper"
                    ><i class="ri-arrow-right-up-line"></i
                ></span>
            </NuxtLink>
            <div class="optech-portfolio-data">
                <NuxtLink to="/single-portfolio">
                    <h4>{{ title }}</h4>
                </NuxtLink>
                <p>{{ category }}</p>
            </div>
        </div>
    </div>
</template>
