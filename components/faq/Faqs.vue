<script setup lang="ts">
import { faq1 } from "~/data/data";
import FaqCollapse from "../ui/cards/FaqCollapse.vue";

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
    <div class="section accordion-page">
        <div class="container">
            <div class="optech-accordion-column">
                <div class="optech-accordion-wrap mt-0 init-wrap">
                    <FaqCollapse
                        v-for="(item, i) in faq1.slice(0, 6)"
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
</template>
