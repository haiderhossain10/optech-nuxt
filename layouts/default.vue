<script setup lang="ts">
import { Toaster } from "vue-sonner";

useHead({
    titleTemplate: "Optech %s - IT Solution & Technology Theme",
});
</script>

<template>
    <slot />
    <Toaster class="ui-toast" />
</template>

<style>
.ui-toast li {
    padding: 1rem !important;
}
</style>
