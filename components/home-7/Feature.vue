<script setup lang="ts">
import { feature2 } from "~/data/data";
import FeatureCard from "./ui/FeatureCard.vue";
</script>

<template>
    <div class="section large-padding-tb6 overflow-hidden bg-light1">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 order-lg-2">
                    <div class="optech-thumb extra-ml">
                        <NuxtImg
                            data-aos="fade-up"
                            data-aos-duration="600"
                            src="/assets/images/v3/thumb3.png"
                            alt="thumb"
                        />
                        <div
                            class="optech-thumb-position2"
                            data-aos="fade-up"
                            data-aos-duration="800"
                        >
                            <NuxtImg
                                src="/assets/images/v3/thumb4.png"
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
                                src="/assets/images/shape/shape2.svg"
                                alt="shape"
                            />
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 d-flex align-items-center">
                    <div class="optech-default-content mr40">
                        <h2>Providing IT solutions & services for startups</h2>
                        <div class="optech-extra-mt">
                            <FeatureCard
                                v-for="(item, i) in feature2.slice(0, 3)"
                                :key="i"
                                :data="item"
                                :isLastItem="
                                    feature2.slice(0, 3).length - 1 === i
                                "
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
