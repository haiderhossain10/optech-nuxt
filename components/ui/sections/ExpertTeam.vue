<script setup lang="ts">
import { expertTeam1 } from "~/data/data";
import ExpertTeamCard from "./../cards/ExpertTeamCard.vue";
</script>

<template>
    <div class="section optech-section-padding2">
        <div class="container">
            <div class="optech-section-title center">
                <h2>Our expert team is always ready to help you</h2>
            </div>
            <div class="row">
                <!-- expert team card start -->
                <div
                    class="col-xl-3 col-md-6"
                    data-aos="fade-up"
                    :data-aos-duration="400 + 200 * i"
                    v-for="(item, i) in expertTeam1.slice(0, 4)"
                    :key="i"
                >
                    <ExpertTeamCard :data="item" />
                </div>
                <!-- expert team card end -->
            </div>
        </div>
    </div>
</template>
