<script setup lang="ts">
import { tag1 } from "~/data/data";
</script>

<template>
    <div class="optech-blog-widgets">
        <h5>Tags</h5>
        <div class="optech-blog-tags">
            <ul>
                <!-- tag start -->
                <li v-for="(item, i) in tag1" :key="i">
                    <NuxtLink to="/">{{ item }}</NuxtLink>
                </li>
                <!-- tag end -->
            </ul>
        </div>
    </div>
</template>
