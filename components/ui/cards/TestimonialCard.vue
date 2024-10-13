<script setup lang="ts">
import type { Testimonial1Type } from "~/types/types";

const props = defineProps<{
    data: Testimonial1Type;
}>();

const { comment, name, position, star } = props.data;
</script>

<template>
    <div class="optech-t-box2">
        <div class="optech-t-quote2">
            <NuxtImg src="/assets/images/v1/quote.svg" alt="quote" />
        </div>
        <div class="optech-t-data2">
            <p>
                {{ comment }}
            </p>
            <div class="optech-t-rating2">
                <ul class="d-flex justify-content-center gap-1">
                    <li v-for="(_, i) in Array(star)" :key="i">
                        <i class="fas fa-star" style="color: #ecb014"></i>
                    </li>
                    <li v-for="(_, i) in Array(5 - star)" :key="i">
                        <i class="fas fa-star" style="color: #ddd"></i>
                    </li>
                </ul>
            </div>
            <h5>{{ name }}</h5>
            <span>{{ position }}</span>
        </div>
    </div>
</template>
