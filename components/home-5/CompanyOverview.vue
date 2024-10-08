<script setup lang="ts">
import CountUp from "vue-countup-v3";
</script>

<template>
    <div class="section large-padding-tb2 overflow-hidden">
        <div class="container">
            <div id="optech-counter"></div>
            <div class="row">
                <div class="col-lg-6">
                    <div class="optech-thumb extra-mr">
                        <NuxtImg
                            data-aos="fade-up"
                            data-aos-duration="600"
                            src="/assets/images/v3/thumb1.png"
                            alt="thumb"
                        />
                        <div
                            class="optech-thumb-position"
                            data-aos="fade-up"
                            data-aos-duration="800"
                        >
                            <NuxtImg
                                src="/assets/images/v3/thumb2.png"
                                alt="thumb"
                            />
                        </div>
                        <div class="optech-shape1">
                            <NuxtImg
                                src="/assets/images/shape/shape1.svg"
                                alt="shape"
                            />
                        </div>
                        <div class="optech-shape2">
                            <NuxtImg
                                src="/assets/images/shape/shape2.svg"
                                alt="shape"
                            />
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 d-flex align-items-center">
                    <div class="optech-default-content ml40">
                        <h2>Exclusive technology to provide IT solutions</h2>
                        <p>
                            Each demo built with Teba will look different. You
                            can customize almost anything in the appearance of
                            your website with only a few clicks. Each demo built
                            with Teba will look different.
                        </p>
                        <div class="optech-extra-mt">
                            <div class="optech-counter-wrap2">
                                <div class="optech-counter-data">
                                    <div
                                        class="optech-counter-number d-flex align-items-center"
                                    >
                                        <count-up
                                            start-val="0"
                                            :end-val="1800"
                                            :options="{
                                                enableScrollSpy: true,
                                                scrollSpyOnce: true,
                                            }"
                                        ></count-up>

                                        +
                                    </div>
                                    <p>Happy Clients</p>
                                </div>
                                <div class="optech-counter-data">
                                    <div
                                        class="optech-counter-number d-flex align-items-center"
                                    >
                                        <count-up
                                            start-val="0"
                                            :end-val="620"
                                            :options="{
                                                enableScrollSpy: true,
                                                scrollSpyOnce: true,
                                            }"
                                        ></count-up
                                        >+
                                    </div>
                                    <p>Finished Projects</p>
                                </div>
                            </div>
                        </div>
                        <div class="optech-extra-mt">
                            <NuxtLink
                                class="optech-default-btn"
                                data-text="More About Us"
                                to="/about"
                                ><span class="btn-wraper"
                                    >More About Us</span
                                ></NuxtLink
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
