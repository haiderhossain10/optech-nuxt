<script setup lang="ts">
import { faq1 } from "~/data/data";
import FaqCollapse from "./ui/FaqCollapse.vue";

const selectedIndex = ref<number | null>(0);

// toggle function
const toggle = (id: number) => {
    if (selectedIndex.value === id) {
        selectedIndex.value = null;
    } else {
        selectedIndex.value = id;
    }
};
</script>

<template>
    <div class="section bg-light1 optech-section-padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-5">
                    <div class="optech-default-content">
                        <h2>Have any questions? here some answers</h2>
                        <p>
                            Each demo built with Teba will look different. You
                            can customize almost anything in the appearance of
                            your website with only
                        </p>
                        <div
                            class="optech-extra-mt"
                            data-aos="fade-up"
                            data-aos-duration="800"
                        >
                            <NuxtLink
                                class="optech-default-btn"
                                data-text="Ask Any Question"
                                to="/faq"
                                ><span class="btn-wraper"
                                    >Ask Any Question</span
                                ></NuxtLink
                            >
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 offset-lg-1">
                    <div class="optech-accordion-wrap init-wrap">
                        <FaqCollapse
                            v-for="(item, i) in faq1.slice(0, 4)"
                            :key="i"
                            :data="item"
                            :index="i"
                            :selectedIndex="selectedIndex"
                            @toggle="toggle"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
