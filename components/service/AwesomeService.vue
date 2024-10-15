<script setup lang="ts">
import { awesomeService3 } from "~/data/data";
import AwesomeServiceCard4 from "../ui/cards/AwesomeServiceCard4.vue";
</script>

<template>
    <div class="section optech-section-padding2 bg-light1">
        <div class="container">
            <div class="optech-section-title center">
                <h2>Our awesome services to give you success</h2>
            </div>
            <div class="row">
                <div
                    class="col-lg-6"
                    data-aos="fade-up"
                    :data-aos-duration="i % 2 === 0 ? 600 : 800"
                    v-for="(item, i) in awesomeService3.slice(0, 6)"
                    :key="i"
                >
                    <!-- awesome service card start -->
                    <AwesomeServiceCard4 :data="item" />
                    <!-- awesome service card end -->
                </div>
            </div>
        </div>
    </div>
</template>
