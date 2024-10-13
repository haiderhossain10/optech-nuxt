<script setup lang="ts">
import $ from "jquery";
import { awesomeService2 } from "~/data/data";
import AwesomeServiceCard from "./../cards/AwesomeServiceCard.vue";

onMounted(() => {
    if (typeof window !== "undefined") {
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
    }
});
</script>

<template>
    <div class="section optech-section-padding">
        <div class="container">
            <div class="optech-section-title center">
                <h2>Our awesome services to give you success</h2>
            </div>
            <div
                class="optech-4column-slider2"
                data-aos="fade-up"
                data-aos-duration="800"
                ref="slider"
            >
                <!-- awesome card start -->
                <AwesomeServiceCard
                    v-for="(item, i) in awesomeService2.slice(0, 5)"
                    :key="i"
                    :data="item"
                />
                <!-- awesome card end -->
            </div>
        </div>
    </div>
</template>
