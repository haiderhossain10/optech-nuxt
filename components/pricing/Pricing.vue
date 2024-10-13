<script setup lang="ts">
import { prcing1 } from "~/data/data";
import PricingCard2 from "../ui/cards/PricingCard2.vue";
</script>

<template>
    <div class="section optech-section-padding2">
        <div class="container">
            <div class="row">
                <!-- pricing card start -->
                <div
                    class="col-xl-4 col-md-6"
                    data-aos="fade-up"
                    data-aos-duration="500"
                    v-for="(item, i) in prcing1.slice(0, 3)"
                    :key="i"
                >
                    <PricingCard2
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
