<script setup lang="ts">
import { recentProject1 } from "~/data/data";
import RecentProjectCard from "../ui/cards/RecentProjectCard.vue";
</script>

<template>
    <div class="section optech-section-padding bg-light1">
        <div class="container">
            <div class="optech-section-title center">
                <h2>Explore our recent projects</h2>
            </div>
            <div class="row">
                <!-- recent project card start -->
                <div
                    :class="
                        recentProject1.length - 1 === i
                            ? 'col-xl-8'
                            : 'col-xl-4 col-md-6'
                    "
                    data-aos="fade-up"
                    :data-aos-duration="
                        i % 3 === 0 ? 500 : i % 3 === 1 ? 700 : 900
                    "
                    v-for="(item, i) in recentProject1.slice(0, 5)"
                    :key="i"
                >
                    <RecentProjectCard :data="item" />
                </div>
                <!-- recent project card end -->

                <div class="optech-center-btn">
                    <NuxtLink
                        class="optech-default-btn"
                        data-text="View Our All Works"
                        to="/portfolio"
                        ><span class="btn-wraper"
                            >View Our All Works</span
                        ></NuxtLink
                    >
                </div>
            </div>
        </div>
    </div>
</template>
