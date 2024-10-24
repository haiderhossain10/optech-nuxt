<script setup lang="ts">
import { Toaster } from "vue-sonner";
import Preloader from "~/components/Preloader.vue";

useHead({
    titleTemplate: "Optech %s - IT Solution & Technology Theme",
});
</script>

<template>
    <slot />
    <Preloader />
    <Toaster class="ui-toast" />
</template>

<style>
.ui-toast li {
    padding: 1rem !important;
}
</style>
