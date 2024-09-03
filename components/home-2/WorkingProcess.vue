<script setup lang="ts">
import { workingProcess1 } from "~/data/data";
import WorkingProcessCard from "./ui/WorkingProcessCard.vue";
</script>

<template>
    <div class="section bg-light1 optech-section-padding5">
        <div class="container">
            <div class="optech-section-title center">
                <h2>Our working process on how to grow your business</h2>
            </div>
            <div class="row z-index">
                <div
                    class="col-xl-4 col-md-6"
                    data-aos="fade-up"
                    data-aos-duration="500"
                    v-for="(item, i) in workingProcess1.slice(0, 3)"
                    :key="i"
                >
                    <!-- working process card start -->
                    <WorkingProcessCard :data="item" :index="i" />
                    <!-- working process card end -->
                </div>
                <div class="optech-line">
                    <NuxtImg src="/assets/images/v2/line.png" alt="line" />
                </div>
            </div>
        </div>
    </div>
</template>
