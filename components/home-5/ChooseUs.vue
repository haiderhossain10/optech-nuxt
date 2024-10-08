<script setup lang="ts">
import { choooseUs1 } from "~/data/data";
import ChooseUsCard from "./ui/ChooseUsCard.vue";
</script>

<template>
    <div class="section optech-section-padding2 bg-light1">
        <div class="container">
            <div class="optech-section-title center">
                <h2>Why you should choose us?</h2>
            </div>
            <div class="row">
                <!-- choose us card start -->
                <div
                    class="col-xl-4 col-md-6"
                    data-aos="fade-up"
                    :data-aos-duration="i * 200 + 600"
                    v-for="(item, i) in choooseUs1.splice(0, 3)"
                    :key="i"
                >
                    <ChooseUsCard :data="item" />
                </div>
                <!-- choose us card end -->
            </div>
        </div>
    </div>
</template>
