<script setup lang="ts">
import type { Achievement1Type } from "~/types/types";
import CountUp from "vue-countup-v3";

const props = defineProps<{
    data: Achievement1Type;
    index: number;
}>();

const { iconUrl, number, symbol, title } = props.data;
const index = props.index;
</script>

<template>
    <div class="optech-counter-data" data-aos="fade-up" data-aos-duration="400">
        <div class="optech-counter-icon">
            <NuxtImg height="36" width="36" :src="iconUrl" alt="icon" />
        </div>
        <div
            class="optech-counter-number d-flex align-items-center justify-content-center"
        >
            <count-up
                start-val="0"
                :end-val="number"
                :options="{ enableScrollSpy: true, scrollSpyOnce: true }"
            ></count-up
            >{{ symbol }}
        </div>
        <p>{{ title }}</p>
    </div>
</template>
