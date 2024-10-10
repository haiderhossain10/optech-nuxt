<script setup lang="ts">
import ProgressBar2 from "../ui/progressbar/ProgressBar2.vue";
</script>

<template>
    <div class="section large-padding-tb2 overflow-hidden bg-light1">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="optech-thumb extra-ml2 mr40">
                        <NuxtImg
                            data-aos="fade-up"
                            data-aos-duration="600"
                            src="/assets/images/v1/thumb3.png"
                            alt="thumb"
                        />
                        <div
                            class="optech-thumb-position3"
                            data-aos="fade-up"
                            data-aos-duration="800"
                        >
                            <NuxtImg
                                src="/assets/images/v1/thumb4.png"
                                alt="thumb"
                            />
                        </div>
                        <div class="optech-shape5">
                            <NuxtImg
                                src="/assets/images/shape/shape3.svg"
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
                        <h2>Increasing business success with technology</h2>
                        <p>
                            Each demo built with Teba will look different. You
                            can customize almost anything in the appearance of
                            your website with only a few clicks. Each demo built
                            with Teba will look different.
                        </p>
                        <div class="optech-extra-mt">
                            <section id="first-sec"></section>
                            <ProgressBar2
                                :percentage="86"
                                title="IT Solution & Management"
                            />
                            <ProgressBar2
                                :percentage="72"
                                title="Website & App Development"
                            />
                            <ProgressBar2
                                :percentage="83"
                                title="SEO & Digital Marketing"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="optech-divider color2"></div>
    </div>
</template>
