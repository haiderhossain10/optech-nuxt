<script setup lang="ts">
import $ from "jquery";

const brand = [
    "/assets/images/brand/brand01.svg",
    "/assets/images/brand/brand02.svg",
    "/assets/images/brand/brand03.svg",
    "/assets/images/brand/brand04.svg",
    "/assets/images/brand/brand05.svg",
    "/assets/images/brand/brand01.svg",
    "/assets/images/brand/brand02.svg",
    "/assets/images/brand/brand03.svg",
    "/assets/images/brand/brand04.svg",
    "/assets/images/brand/brand05.svg",
    "/assets/images/brand/brand01.svg",
    "/assets/images/brand/brand02.svg",
    "/assets/images/brand/brand03.svg",
    "/assets/images/brand/brand04.svg",
    "/assets/images/brand/brand05.svg",
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
    <div class="optech-brand-section2 bg-light1">
        <div class="container">
            <div class="optech-brand-title dark-color">
                <p>
                    Empowered professionals to connect with top-tier
                    opportunities
                </p>
            </div>
            <div class="optech-brand-slider">
                <div
                    class="optech-brand-item"
                    v-for="(item, i) in brand"
                    :key="i"
                >
                    <NuxtImg
                        height="32"
                        class="w-full"
                        :src="item"
                        alt="logo"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
