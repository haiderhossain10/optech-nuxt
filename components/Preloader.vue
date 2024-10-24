<script setup lang="ts">
const preloader = ref(true);
const route = useRoute();
const PRELOADER_TIMEOUT = 1000;

const togglePreloader = () => {
    preloader.value = true;
    setTimeout(() => {
        preloader.value = false;
    }, PRELOADER_TIMEOUT);
};

// Wait for the window to be fully loaded (including all assets)
window.onload = () => {
    togglePreloader();
};

watch(
    () => route.path,
    () => {
        togglePreloader();
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
