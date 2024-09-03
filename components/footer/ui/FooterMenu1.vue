<script setup lang="ts">
import {
    footerInfoLinks,
    footerQuickLinks,
    footerServiceLinks,
} from "~/data/data";
</script>

<template>
    <div class="col-xl-2 offset-xl-1 col-md-4">
        <div class="optech-footer-menu dark-color">
            <div class="optech-footer-title dark-color">
                <h5>Quick Links</h5>
            </div>
            <ul>
                <li v-for="(item, i) in footerQuickLinks" :key="i">
                    <NuxtLink :to="item.url">{{ item.title }}</NuxtLink>
                </li>
            </ul>
        </div>
    </div>
    <div class="col-xl-3 col-md-5">
        <div class="optech-footer-menu dark-color ml30">
            <div class="optech-footer-title dark-color">
                <h5>Services</h5>
            </div>
            <ul>
                <li v-for="(item, i) in footerServiceLinks" :key="i">
                    <NuxtLink :to="item.url">{{ item.title }}</NuxtLink>
                </li>
            </ul>
        </div>
    </div>
    <div class="col-xl-2 col-md-3">
        <div class="optech-footer-menu dark-color mb-0">
            <div class="optech-footer-title dark-color">
                <h5>Information</h5>
            </div>
            <ul>
                <li v-for="(item, i) in footerInfoLinks" :key="i">
                    <NuxtLink :to="item.url">{{ item.title }}</NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>
