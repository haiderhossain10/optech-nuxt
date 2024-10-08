<script setup lang="ts">
import { expertTeam2 } from "~/data/data";
import $ from "jquery";
import ExpertTeamCard from "./ui/ExpertTeamCard.vue";

onMounted(() => {
    $(".optech-4column-slider").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: false,
        centerMode: true,
        centerPadding: "300px",
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 3,
                    centerPadding: "250px",
                },
            },
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 3,
                    centerPadding: "150px",
                },
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    centerPadding: "100px",
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    centerPadding: "100px",
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "100px",
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
    <div class="section optech-section-padding">
        <div class="container">
            <div class="optech-section-title center">
                <h2>Our expert team is always ready to help you</h2>
            </div>
        </div>
        <!-- expert team card start -->
        <div
            class="optech-4column-slider"
            data-aos="fade-up"
            data-aos-duration="800"
        >
            <ExpertTeamCard
                v-for="(item, i) in expertTeam2"
                :key="i"
                :data="item"
            />
        </div>
        <!-- expert team card end -->
    </div>
</template>
