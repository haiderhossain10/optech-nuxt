<script setup lang="ts">
import { recentProject1 } from "~/data/data";
import Pagination from "../ui/Pagination.vue";
import RecentProjectCard from "../ui/cards/RecentProjectCard.vue";
</script>

<template>
    <div class="section optech-section-padding">
        <div class="container">
            <div class="optech-section-title center">
                <h2>Explore our recent projects</h2>
            </div>
            <div class="row">
                <!-- poftfolio masonry start -->
                <div
                    :class="
                        [4, 5].includes(i) ? 'col-xl-8' : 'col-xl-4 col-md-6'
                    "
                    data-aos="fade-up"
                    :data-aos-duration="
                        i % 3 === 0 ? 500 : i % 3 === 1 ? 700 : 900
                    "
                    v-for="(item, i) in recentProject1.slice(0, 10)"
                    :key="i"
                >
                    <RecentProjectCard :data="item" />
                </div>
                <!-- poftfolio masonry end -->
            </div>
            <Pagination />
        </div>
    </div>
</template>
