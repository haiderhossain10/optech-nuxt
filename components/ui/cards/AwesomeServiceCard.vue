<script setup lang="ts">
import type { AwesomeService2Type } from "~/types/types";

const props = defineProps<{
    data: AwesomeService2Type;
}>();

const { imgUrl, iconUrl, title } = props.data;
</script>

<template>
    <div class="optech-service-box">
        <div class="optech-service-thumb">
            <NuxtImg :src="imgUrl" alt="img" />
            <div class="optech-service-data">
                <div class="optech-service-icon">
                    <NuxtImg height="36" width="36" :src="iconUrl" alt="icon" />
                </div>
                <NuxtLink to="/single-service">
                    <h5 v-html="title"></h5>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
