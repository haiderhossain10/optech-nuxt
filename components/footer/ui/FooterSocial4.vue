<script setup lang="ts">
import { social1 } from "~/data/data";
</script>

<template>
    <div class="optech-social-icon-box right-align style-two">
        <ul>
            <li v-for="(item, i) in social1" :key="i">
                <NuxtLink :to="item.url">
                    <i :class="item.icon"></i>
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>
