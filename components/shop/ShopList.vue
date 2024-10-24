<script setup lang="ts">
import { shop } from "~/data/data";
import ShopCard from "../ui/cards/ShopCard.vue";
import Pagination from "../ui/Pagination.vue";
</script>

<template>
    <div class="section optech-section-padding">
        <div class="container">
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
                    v-for="(item, i) in shop.slice(0, 8)"
                    :key="i"
                >
                    <ShopCard :data="item" />
                </div>
            </div>
            <!-- pagination start -->
            <Pagination />
            <!-- pagination end -->
        </div>
    </div>
</template>
