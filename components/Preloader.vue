<script setup lang="ts">
import { ref, watch, onMounted, nextTick } from "vue";
import { useRoute } from "vue-router";

const preloader = ref(true);
const route = useRoute();

const PRELOADER_TIMEOUT = 1000;

const stopPreloader = () => {
    setTimeout(() => {
        preloader.value = false;
    }, PRELOADER_TIMEOUT);
};

const handleLoadComplete = async () => {
    await nextTick();
    stopPreloader();
};

onMounted(() => {
    handleLoadComplete();
});

watch(
    () => route.fullPath,
    () => {
        preloader.value = true;
        handleLoadComplete();
    }
);
</script>

<template>
    <div v-if="preloader" class="optech-preloader-wrap">
        <div class="optech-preloader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>
