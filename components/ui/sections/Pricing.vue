<script setup lang="ts">
import { prcing1 } from "~/data/data";
import PricingCard from "../cards/PricingCard.vue";
</script>

<template>
    <div class="section optech-section-padding2 dark-bg optech-pricing">
        <div class="container">
            <div class="optech-section-title center light-color">
                <h2>Effective & flexible pricing</h2>
            </div>
            <div class="row">
                <!-- pricing card start -->
                <div
                    class="col-xl-4 col-md-6"
                    data-aos="fade-up"
                    data-aos-duration="500"
                    v-for="(item, i) in prcing1.slice(0, 3)"
                    :key="i"
                >
                    <PricingCard
                        :data="item"
                        :itemLength="prcing1.slice(0, 3).length"
                        :index="i"
                    />
                </div>
                <!-- pricing card end -->
            </div>
        </div>
    </div>
</template>
