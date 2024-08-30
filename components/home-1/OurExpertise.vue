<script setup lang="ts">
import ProgressBar1 from "../ui/progressbar/ProgressBar1.vue";
</script>

<template>
    <div class="section large-padding-tb4 overflow-hidden">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 order-lg-2">
                    <div class="optech-thumb extra-ml">
                        <NuxtImg
                            data-aos="fade-up"
                            data-aos-duration="600"
                            src="/assets/images/v1/thumb3.png"
                            alt="thumb"
                        />
                        <div
                            class="optech-thumb-position2"
                            data-aos="fade-up"
                            data-aos-duration="800"
                        >
                            <NuxtImg
                                src="/assets/images/v1/thumb4.png"
                                alt="thumb"
                            />
                        </div>
                        <div class="optech-shape3">
                            <NuxtImg
                                src="/assets/images/shape/shape3.svg"
                                alt="shape"
                            />
                        </div>
                        <div class="optech-shape4">
                            <NuxtImg
                                src="/assets/images/shape/shape4.svg"
                                alt="shape"
                            />
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 d-flex align-items-end">
                    <div class="optech-default-content mr40">
                        <h2>Increasing business success with technology</h2>
                        <p>
                            Each demo built with Teba will look different. You
                            can customize almost anything in the appearance of
                            your website with only a few clicks. Each demo built
                            with Teba will look different.
                        </p>
                        <div class="optech-extra-mt">
                            <section id="first-sec"></section>
                            <ProgressBar1
                                :percentage="86"
                                title="IT Solution & Management"
                            />
                            <ProgressBar1
                                :percentage="72"
                                title="Website & App Development"
                            />
                            <ProgressBar1
                                :percentage="83"
                                title="SEO & Digital Marketing"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
