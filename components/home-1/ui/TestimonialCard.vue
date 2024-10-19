<script setup lang="ts">
import type { Testimonial1Type } from "~/types/types";

const props = defineProps<{
    data: Testimonial1Type;
}>();

const { comment, name, position, star } = props.data;
</script>

<template>
    <div class="optech-t-box">
        <div class="optech-t-quote">
            <NuxtImg
                height="46"
                width="64"
                src="/assets/images/v1/quote.svg"
                alt="quote"
            />
        </div>
        <div class="optech-t-data">
            <p>
                {{ comment }}
            </p>
            <div class="optech-t-rating">
                <ul class="d-flex align-self-center gap-1">
                    <li v-for="(_, i) in Array(star)" :key="i">
                        <i class="fas fa-star" style="color: #ecb014"></i>
                    </li>
                    <li v-for="(_, i) in Array(5 - star)" :key="i">
                        <i class="fas fa-star" style="color: #ddd"></i>
                    </li>
                </ul>
            </div>
            <div class="optech-t-author">
                <h5>{{ name }}</h5>
                <span>{{ position }}</span>
            </div>
        </div>
    </div>
</template>
