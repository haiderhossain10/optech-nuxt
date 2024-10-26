<script setup lang="ts">
import { blogArticle1 } from "~/data/data";
import BlogArticleCard from "../cards/BlogArticleCard.vue";
</script>

<template>
    <div class="section optech-section-padding">
        <div class="container">
            <div class="optech-section-title center">
                <h2>Recent blog & articles about technology</h2>
            </div>
            <div class="row">
                <div
                    class="col-xl-4 col-md-6"
                    data-aos="fade-up"
                    :data-aos-duration="i * 200 + 600"
                    v-for="(item, i) in blogArticle1.slice(0, 3)"
                    :key="i"
                >
                    <!-- blog article card start -->
                    <BlogArticleCard :data="item" />
                    <!-- blog article card end -->
                </div>
            </div>
            <div class="optech-center-btn">
                <NuxtLink
                    class="optech-default-btn"
                    data-text="View All Posts"
                    to="/blog"
                    ><span class="btn-wraper">View All Posts</span></NuxtLink
                >
            </div>
        </div>
    </div>
</template>
