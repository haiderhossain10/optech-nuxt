<script setup lang="ts">
import $ from "jquery";
import { hero1 } from "~/data/data";

onMounted(() => {
    $(".optech-hero-slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: false,
        speed: 800,
        lazyLoad: "progressive",
        prevArrow:
            '<button class="slide-arrow optech-hero-next"><i class="ri-arrow-left-s-line"></i></button>',
        nextArrow:
            '<button class="slide-arrow optech-hero-prev"><i class="ri-arrow-right-s-line"></i></button>',
    });
});
</script>

<template>
    <div class="optech-hero-section6">
        <div class="optech-hero-slider">
            <div
                class="optech-hero-slider-item"
                :style="`background-image: url(${item.bgImgUrl})`"
                v-for="(item, i) in hero1"
                :key="i"
            >
                <div class="container">
                    <div class="optech-hero-content center sm">
                        <h5>{{ item.titleHead }}</h5>
                        <h1>{{ item.title }}</h1>
                        <div class="optech-extra-mt">
                            <NuxtLink
                                class="optech-default-btn"
                                data-text="Work With Us"
                                href="/contact"
                                ><span class="btn-wraper"
                                    >Work With Us</span
                                ></NuxtLink
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
