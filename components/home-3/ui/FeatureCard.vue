<script setup lang="ts">
import type { Feature1Type } from "~/types/types";

const props = defineProps<{
    data: Feature1Type;
    isLastItem: boolean;
}>();

const { title, description, iconUrl } = props.data;
</script>

<template>
    <div
        :class="`optech-iconbox-wrap2  ${
            props.isLastItem ? 'mb-0' : 'rt-mb-35'
        }`"
    >
        <div class="optech-iconbox-icon2">
            <NuxtImg height="48" width="48" :src="iconUrl" alt="icon" />
        </div>
        <div class="optech-iconbox-data2">
            <NuxtLink to="/contact">
                <h5>{{ title }}</h5>
            </NuxtLink>
            <p>
                {{ description }}
            </p>
        </div>
    </div>
</template>
