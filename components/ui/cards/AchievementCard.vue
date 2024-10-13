<script setup lang="ts">
import type { Achievement1Type } from "~/types/types";
import CountUp from "vue-countup-v3";

const props = defineProps<{
    data: Achievement1Type;
    i: number;
}>();

const { iconUrl, number, symbol, title } = props.data;
</script>

<template>
    <div
        class="optech-counter-data3"
        data-aos="fade-up"
        :data-aos-duration="i * 200 + 400"
    >
        <div class="optech-counter-icon3">
            <NuxtImg height="36" width="36" :src="iconUrl" alt="icon" />
        </div>
        <div class="optech-counter-right">
            <div
                class="optech-counter-number3 d-flex align-items-center justify-content-center justify-content-md-start"
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
    </div>
</template>
