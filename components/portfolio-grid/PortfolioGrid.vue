<script setup lang="ts">
import { recentProject2 } from "~/data/data";
import Pagination from "../ui/Pagination.vue";
import RecentProjectCard from "../ui/cards/RecentProjectCard.vue";
</script>

<template>
    <div class="section optech-section-padding">
        <div class="container">
            <div class="row">
                <!-- grid portfolio start -->
                <div
                    class="col-xl-4 col-md-6"
                    data-aos="fade-up"
                    :data-aos-duration="
                        i % 3 === 0 ? 500 : i % 3 === 1 ? 700 : 900
                    "
                    v-for="(item, i) in recentProject2.slice(0, 9)"
                    :key="i"
                >
                    <RecentProjectCard :data="item" />
                </div>
            </div>
            <!-- grid portfolio end -->
            <Pagination />
        </div>
    </div>
</template>
