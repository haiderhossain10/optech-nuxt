<script setup lang="ts">
import $ from "jquery";

const brand = [
    "/assets/images/brand/brand1.svg",
    "/assets/images/brand/brand2.svg",
    "/assets/images/brand/brand3.svg",
    "/assets/images/brand/brand4.svg",
    "/assets/images/brand/brand5.svg",
    "/assets/images/brand/brand1.svg",
    "/assets/images/brand/brand2.svg",
    "/assets/images/brand/brand3.svg",
    "/assets/images/brand/brand4.svg",
    "/assets/images/brand/brand5.svg",
    "/assets/images/brand/brand1.svg",
    "/assets/images/brand/brand2.svg",
    "/assets/images/brand/brand3.svg",
    "/assets/images/brand/brand4.svg",
    "/assets/images/brand/brand5.svg",
];

onMounted(() => {
    $(".optech-brand-slider").slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 6000,
        cssEase: "linear",
        pauseOnHover: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    });
});
</script>

<template>
    <div class="optech-brand-section">
        <div class="optech-brand-title">
            <p>
                Empowered professionals to connect with top-tier opportunities
            </p>
        </div>
        <div class="optech-brand-slider">
            <div class="optech-brand-item" v-for="(item, i) in brand" :key="i">
                <NuxtImg height="32" class="w-full" :src="item" alt="logo" />
            </div>
        </div>
    </div>
</template>
