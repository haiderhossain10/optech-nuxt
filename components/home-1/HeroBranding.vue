<script setup>
import $ from "jquery";

onMounted(() => {
    if (typeof window !== "undefined") {
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
    }
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
            <div class="optech-brand-item">
                <img src="/assets/images/brand/brand1.svg" alt="" />
            </div>
            <div class="optech-brand-item">
                <img src="/assets/images/brand/brand2.svg" alt="" />
            </div>
            <div class="optech-brand-item">
                <img src="/assets/images/brand/brand3.svg" alt="" />
            </div>
            <div class="optech-brand-item">
                <img src="/assets/images/brand/brand4.svg" alt="" />
            </div>
            <div class="optech-brand-item">
                <img src="/assets/images/brand/brand5.svg" alt="" />
            </div>
            <div class="optech-brand-item">
                <img src="/assets/images/brand/brand1.svg" alt="" />
            </div>
            <div class="optech-brand-item">
                <img src="/assets/images/brand/brand2.svg" alt="" />
            </div>
            <div class="optech-brand-item">
                <img src="/assets/images/brand/brand3.svg" alt="" />
            </div>
            <div class="optech-brand-item">
                <img src="/assets/images/brand/brand4.svg" alt="" />
            </div>
            <div class="optech-brand-item">
                <img src="/assets/images/brand/brand5.svg" alt="" />
            </div>
            <div class="optech-brand-item">
                <img src="/assets/images/brand/brand1.svg" alt="" />
            </div>
            <div class="optech-brand-item">
                <img src="/assets/images/brand/brand2.svg" alt="" />
            </div>
            <div class="optech-brand-item">
                <img src="/assets/images/brand/brand3.svg" alt="" />
            </div>
            <div class="optech-brand-item">
                <img src="/assets/images/brand/brand4.svg" alt="" />
            </div>
            <div class="optech-brand-item">
                <img src="/assets/images/brand/brand5.svg" alt="" />
            </div>
        </div>
    </div>
</template>
