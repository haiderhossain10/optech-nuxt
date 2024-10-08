<script setup lang="ts">
import type { WorkingProcess1Type } from "~/types/types";

const props = defineProps<{
    data: WorkingProcess1Type;
    index: number;
}>();

const { imgUrl, title, description } = props.data;

const i =
    props.index >= 0 && props.index <= 8
        ? `0${props.index + 1}`
        : props.index + 1;
</script>

<template>
    <div class="optech-numberbox-wrap">
        <div class="optech-numberbox-icon">
            <NuxtImg :src="imgUrl" alt="img" />
        </div>
        <div class="optech-numberbox-data">
            <span>{{ i }}</span>
            <h4>{{ title }}</h4>
            <p>{{ description }}</p>
        </div>
    </div>
</template>
