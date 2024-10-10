<script setup lang="ts">
import { awesomeService1 } from "~/data/data";
import AwesomeServiceCard3 from "../ui/cards/AwesomeServiceCard3.vue";
</script>

<template>
    <div class="section optech-section-padding2">
        <div class="container">
            <div class="optech-section-title center">
                <h2>Our awesome services to give you success</h2>
            </div>
            <div class="row">
                <!-- awesome service card start -->
                <div
                    class="col-xl-4 col-md-6"
                    data-aos="fade-up"
                    :data-aos-duration="
                        i % 3 === 0 ? 500 : i % 3 === 1 ? 700 : 900
                    "
                    v-for="(item, i) in awesomeService1.slice(0, 6)"
                    :key="i"
                >
                    <AwesomeServiceCard3 :data="item" />
                </div>
                <!-- awesome service card end -->
            </div>
        </div>
    </div>
</template>
