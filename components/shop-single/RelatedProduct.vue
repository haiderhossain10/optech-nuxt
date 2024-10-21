<script setup lang="ts">
import { shop } from "~/data/data";
import ShopCard from "../ui/cards/ShopCard.vue";
</script>

<template>
    <div class="optech-related-product-section">
        <div class="container">
            <div class="optech-section-title center">
                <h2>Related products</h2>
            </div>
            <div class="row">
                <div
                    class="col-xl-3 col-lg-4 col-md-6"
                    data-aos="fade-up"
                    :data-aos-duration="
                        i % 4 === 0
                            ? 400
                            : i % 4 === 1
                            ? 600
                            : i % 4 === 2
                            ? 800
                            : 1000
                    "
                    v-for="(item, i) in shop.slice(0, 4)"
                    :key="i"
                >
                    <ShopCard :data="item" />
                </div>
            </div>
        </div>
    </div>
</template>
