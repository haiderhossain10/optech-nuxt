<script setup lang="ts">
import { testimonial1 } from "~/data/data";
import TestimonialCard from "./ui/TestimonialCard.vue";
import $ from "jquery";

onMounted(() => {
    $(".optech-2column-slider").slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });
});
</script>

<template>
    <div class="section optech-section-padding bg-light1">
        <div class="container">
            <div class="optech-section-title center">
                <h2>Don’t take our word, see what our customers say</h2>
            </div>
            <div
                class="optech-2column-slider"
                data-aos="fade-up"
                data-aos-duration="600"
            >
                <!-- testimonial card start -->
                <TestimonialCard
                    v-for="(item, i) in testimonial1.slice(0, 3)"
                    :key="i"
                    :data="item"
                />
                <!-- testimonial card end -->
            </div>
        </div>
    </div>
</template>
