<script setup lang="ts">
import { testimonial1 } from "~/data/data";
import $ from "jquery";
import TestimonialCard from "./../cards/TestimonialCard.vue";

onMounted(() => {
    $(".optech-1column-slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: false,
        speed: 800,
        prevArrow:
            '<button class="slide-arrow optech-t-next"><i class="ri-arrow-left-s-line"></i></button>',
        nextArrow:
            '<button class="slide-arrow optech-t-prev"><i class="ri-arrow-right-s-line"></i></button>',
    });
});
</script>

<template>
    <div class="section optech-section-padding dark-bg">
        <div class="container">
            <div class="optech-1column-slider">
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
