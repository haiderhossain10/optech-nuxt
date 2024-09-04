<script setup lang="ts">
import { blogArticle3 } from "~/data/data";
import BlogArticleCard from "./ui/BlogArticleCard.vue";
import BlogArticleCard2 from "./ui/BlogArticleCard2.vue";
</script>

<template>
    <div class="section optech-section-padding2 bg-light1">
        <div class="container">
            <div class="optech-section-title center">
                <h2>Our recent blog & articles</h2>
            </div>
            <div class="row">
                <div
                    class="col-xl-6"
                    data-aos="fade-up"
                    data-aos-duration="600"
                >
                    <BlogArticleCard2 />
                </div>
                <div
                    class="col-xl-6"
                    data-aos="fade-left"
                    data-aos-duration="800"
                >
                    <!-- blog article card start -->
                    <BlogArticleCard
                        v-for="(item, i) in blogArticle3.slice(0, 3)"
                        :key="i"
                        :data="item"
                    />
                    <!-- blog article card end -->
                </div>
            </div>
        </div>
    </div>
</template>
