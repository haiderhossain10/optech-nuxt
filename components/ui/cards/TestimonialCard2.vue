<script setup lang="ts">
import type { Testimonial1Type } from "~/types/types";

const props = defineProps<{
    data: Testimonial1Type;
}>();

const { comment, name, position, star } = props.data;
</script>

<template>
    <div class="optech-t-box3 mb-0">
        <div class="optech-t-data3">
            <div class="optech-t-rating3">
                <ul>
                    <li v-for="(_, i) in Array(star)" :key="i">
                        <i class="fas fa-star" style="color: #ecb014"></i>
                    </li>
                    <li v-for="(_, i) in Array(5 - star)" :key="i">
                        <i class="fas fa-star" style="color: #ddd"></i>
                    </li>
                </ul>
            </div>
            <p>
                {{ comment }}
            </p>
            <div class="optech-t-footer">
                <div class="optech-t-author">
                    <h5>{{ name }}</h5>
                    <span>{{ position }}</span>
                </div>
                <div class="optech-t-quote3">
                    <NuxtImg
                        height="46"
                        width="64"
                        src="/assets/images/v1/quote.svg"
                        alt="quote"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
