<script setup lang="ts">
import $ from "jquery";
import { awesomeService1 } from "~/data/data";
import AwesomeServiceCard from "./ui/AwesomeServiceCard.vue";

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
    <div class="sectin bg-light1 optech-section-padding">
        <div class="container">
            <div class="optech-section-title center">
                <h2>Our awesome services to give you success</h2>
            </div>
        </div>
        <div
            class="optech-4column-slider"
            data-aos="fade-up"
            data-aos-duration="800"
        >
            <!-- awesome card start -->
            <AwesomeServiceCard
                v-for="(item, i) in awesomeService1.slice(0, 6)"
                :key="i"
                :data="item"
            />
            <!-- awesome card end -->
        </div>
    </div>
</template>
