<script setup lang="ts">
import { achievement1 } from "~/data/data";
import AchievementCard from "./ui/AchievementCard.vue";
</script>

<template>
    <div class="section optech-section-padding-bottom">
        <div class="container">
            <div id="optech-counter"></div>
            <div
                class="optech-counter-wrap"
                style="background-image: url('assets/images/v2/counter-bg.png')"
            >
                <!-- achievement card start -->
                <AchievementCard
                    v-for="(item, i) in achievement1.slice(0, 4)"
                    :key="i"
                    :data="item"
                    :index="i"
                />
                <!-- achievement card end -->
            </div>
        </div>
    </div>
</template>
