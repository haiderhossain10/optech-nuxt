<script setup lang="ts">
import { feature1 } from "~/data/data";
import FeatureCard from "./ui/FeatureCard.vue";
</script>

<template>
    <div class="section extra-padding-tb">
        <div class="container">
            <div class="row">
                <!-- feature card start -->
                <div
                    v-for="(item, i) in feature1"
                    :key="i"
                    class="col-xl-4 col-md-6"
                >
                    <FeatureCard :data="item" />
                </div>
                <!-- feature card end -->
            </div>
        </div>
    </div>
</template>
