<script setup lang="ts">
import type { Feature1Type } from "~/types/types";

const props = defineProps<{
    data: Feature1Type;
}>();

const { title, description, iconUrl } = props.data;
</script>

<template>
    <div class="optech-iconbox-wrap2">
        <div class="optech-iconbox-icon2">
            <img :src="iconUrl" alt="icon" />
        </div>
        <div class="optech-iconbox-data2">
            <h5>{{ title }}</h5>
            <p>{{ description }}</p>
        </div>
    </div>
</template>
