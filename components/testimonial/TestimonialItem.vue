<script setup lang="ts">
import { testimonial1 } from "~/data/data";
import TestimonialCard2 from "../ui/cards/TestimonialCard2.vue";
</script>

<template>
    <div class="section optech-section-padding">
        <div class="container">
            <div class="row gy-4">
                <div
                    class="col-xl-4 col-md-6"
                    data-aos="fade-up"
                    :data-aos-duration="
                        i % 3 === 0 ? 400 : i % 3 === 1 ? 600 : 800
                    "
                    v-for="(item, i) in testimonial1.slice(0, 9)"
                >
                    <TestimonialCard2 :key="i" :data="item" />
                </div>
            </div>
        </div>
    </div>
</template>
