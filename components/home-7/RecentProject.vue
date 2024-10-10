<script setup lang="ts">
import $ from "jquery";
import RecentProjectCard from "../ui/cards/RecentProjectCard.vue";
import { recentProject4 } from "~/data/data";

onMounted(() => {
    $(".optech-3column-slider2").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1299,
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
    <div class="section optech-section-padding">
        <div class="container">
            <div class="optech-section-title center">
                <h2>Explore our recent projects</h2>
            </div>
            <div
                class="optech-3column-slider2"
                data-aos="fade-up"
                data-aos-duration="800"
            >
                <RecentProjectCard
                    v-for="(item, i) in recentProject4.slice(0, 4)"
                    :key="i"
                    :data="item"
                />
            </div>
        </div>
    </div>
</template>
