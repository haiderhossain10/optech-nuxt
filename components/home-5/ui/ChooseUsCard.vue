<script setup lang="ts">
import type { ChooseUs1Type } from "~/types/types";

const props = defineProps<{
    data: ChooseUs1Type;
}>();

const { iconUrl, title, description } = toRefs(props.data);
</script>

<template>
    <div class="optech-iconbox-wrap4">
        <div class="optech-iconbox-icon4">
            <NuxtImg height="49" width="49" :src="iconUrl" alt="icon" />
        </div>
        <div class="optech-iconbox-data4">
            <h4>{{ title }}</h4>
            <p>{{ description }}</p>
            <NuxtLink class="optech-icon-btn" to="/service-details"
                ><i class="icon-show ri-arrow-right-line"></i>
                <span>Learn More</span>
                <i class="icon-hide ri-arrow-right-line"></i
            ></NuxtLink>
        </div>
    </div>
</template>
