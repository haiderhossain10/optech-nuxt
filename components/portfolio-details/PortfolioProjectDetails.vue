<script setup lang="ts">
import { social1 } from "~/data/data";
</script>

<template>
    <div class="optech-pd-sidebar">
        <h5>Project Details</h5>
        <div class="optech-pd-sidebar-item">
            <span>Client:</span>
            <p>Porter Victoria</p>
        </div>
        <div class="optech-pd-sidebar-item">
            <span>Category:</span>
            <p>Web Development</p>
        </div>
        <div class="optech-pd-sidebar-item">
            <span>Date:</span>
            <p>20 January, 2023</p>
        </div>
        <div class="optech-pd-sidebar-item">
            <span>Website:</span>
            <NuxtLink to="mailto:name@email.com">example@gmail.com</NuxtLink>
        </div>
        <div class="optech-social-icon-box">
            <ul>
                <li v-for="(item, i) in social1" :key="i">
                    <NuxtLink :to="item.url">
                        <i :class="item.icon"></i>
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>
