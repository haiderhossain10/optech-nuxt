<script setup lang="ts">
import { category1 } from "~/data/data";
</script>

<template>
    <div class="optech-blog-widgets">
        <h5>Categories</h5>
        <div class="optech-blog-categorie">
            <ul>
                <li v-for="(item, i) in category1" :key="i">
                    <NuxtLink to="/"
                        >{{ item.name
                        }}<span>({{ item.count }})</span></NuxtLink
                    >
                </li>
            </ul>
        </div>
    </div>
</template>
