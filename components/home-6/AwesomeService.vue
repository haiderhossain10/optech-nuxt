<script setup lang="ts">
import { awesomeService1 } from "~/data/data";
import AwesomeServiceCard2 from "../ui/cards/AwesomeServiceCard2.vue";
import $ from "jquery";

onMounted(() => {
    $(".optech-4column-slider2").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1199,
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
    <div class="sectin bg-light1 optech-section-padding">
        <div class="container">
            <div class="optech-section-title center">
                <h2>Our awesome services to give you success</h2>
            </div>

            <div
                class="optech-4column-slider2"
                data-aos="fade-up"
                data-aos-duration="800"
            >
                <!-- awesome service card start -->
                <AwesomeServiceCard2
                    v-for="(item, i) in awesomeService1.slice(0, 6)"
                    :key="i"
                    :data="item"
                />
                <!-- awesome service card end -->
            </div>
        </div>
    </div>
</template>
