<script setup lang="ts">
import { achievement2 } from "~/data/data";
import AchievementCard from "../cards/AchievementCard.vue";
</script>

<template>
    <div class="optech-counter-section3">
        <div class="container">
            <div id="optech-counter2"></div>
            <div class="optech-counter-wrap3">
                <!-- achievement card start -->
                <AchievementCard
                    v-for="(item, i) in achievement2"
                    :key="i"
                    :data="item"
                    :i="i"
                />
                <!-- achievement card end -->
            </div>
        </div>
    </div>
    <div class="container">
        <div class="optech-divider"></div>
    </div>
</template>
