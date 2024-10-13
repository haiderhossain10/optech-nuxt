<script setup lang="ts">
import { recentProject2 } from "~/data/data";
import RecentProjectCard from "./../cards/RecentProjectCard2.vue";
import $ from "jquery";

onMounted(() => {
    $(".optech-3column-slider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: false,
        centerMode: true,
        centerPadding: "100px",
        responsive: [
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "70px",
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "0px",
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
                <h2>Explore our recent projects</h2>
            </div>
        </div>
        <div
            class="optech-3column-slider"
            data-aos="fade-up"
            data-aos-duration="800"
        >
            <!-- recent project card start -->
            <RecentProjectCard
                v-for="(item, i) in recentProject2.slice(0, 4)"
                :key="i"
                :data="item"
            />
            <!-- recent project card end -->
        </div>
    </div>
</template>
