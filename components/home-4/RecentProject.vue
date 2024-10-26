<script setup lang="ts">
import { recentProject3 } from "~/data/data";
import RecentProjectCard from "../ui/cards/RecentProjectCard.vue";
</script>

<template>
    <div class="section optech-section-padding">
        <div class="container">
            <div class="optech-section-title center">
                <h2>Explore our recent projects</h2>
            </div>
            <div class="row">
                <div
                    class="col-xl-4 col-md-6"
                    data-aos="fade-up"
                    data-aos-duration="600"
                    v-for="(item, i) in recentProject3.slice(0, 6)"
                    :key="i"
                >
                    <!-- recent project card start -->
                    <RecentProjectCard :data="item" />
                    <!-- recent project card end -->
                </div>
                <div class="optech-center-btn">
                    <NuxtLink
                        class="optech-default-btn"
                        data-text="View Our All Works"
                        to="/portfolio-grid"
                        ><span class="btn-wraper"
                            >View Our All Works</span
                        ></NuxtLink
                    >
                </div>
            </div>
        </div>
    </div>
</template>
