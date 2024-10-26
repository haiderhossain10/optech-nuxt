<script setup lang="ts">
import type { AwesomeService1Type } from "~/types/types";

const props = defineProps<{
    data: AwesomeService1Type;
}>();

const { iconUrl, title, description } = props.data;
</script>

<template>
    <div class="optech-iconbox-wrap style-two border_all">
        <div class="optech-iconbox-icon">
            <NuxtImg height="36" width="36" :src="iconUrl" alt="icon" />
        </div>
        <div class="optech-iconbox-data">
            <h5 v-html="title"></h5>
            <p>
                {{ description }}
            </p>
            <NuxtLink class="optech-icon-btn" to="/service-details"
                ><i class="icon-show ri-arrow-right-line"></i>
                <span>Learn More</span>
                <i class="icon-hide ri-arrow-right-line"></i
            ></NuxtLink>
        </div>
    </div>
</template>
