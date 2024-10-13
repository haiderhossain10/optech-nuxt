<script setup lang="ts">
import $ from "jquery";
import { testimonial1 } from "~/data/data";
import TestimonialCard from "./ui/TestimonialCard.vue";

onMounted(() => {
    $(".optech-3column-slider2").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1299,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });
});
</script>

<template>
    <div class="section optech-section-padding">
        <div class="container">
            <div class="optech-section-title center">
                <h2>Don’t take our word, see what our customers say</h2>
            </div>
            <!-- customer say card start -->
            <div
                class="optech-3column-slider2"
                data-aos="fade-up"
                data-aos-duration="800"
            >
                <TestimonialCard
                    v-for="(item, i) in testimonial1.slice(0, 4)"
                    :key="i"
                    :data="item"
                />
            </div>
            <!-- customer say card end -->
        </div>
    </div>
</template>
