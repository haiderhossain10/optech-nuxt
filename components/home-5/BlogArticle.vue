<script setup lang="ts">
import { blogArticle2 } from "~/data/data";
import BlogArticleCard2 from "../ui/cards/BlogArticleCard2.vue";
</script>

<template>
    <div class="section optech-section-padding2 bg-light1">
        <div class="container">
            <div class="optech-section-title">
                <div class="row">
                    <div class="col-xxl-5 col-lg-7">
                        <h2>Recent blog & articles about technology</h2>
                    </div>
                    <div
                        class="col-xxl-7 col-lg-5 d-flex align-items-center justify-content-end"
                    >
                        <div class="optech-title-btn">
                            <NuxtLink
                                class="optech-default-btn"
                                data-text="View All Posts"
                                to="/blog"
                                ><span class="btn-wraper"
                                    >View All Posts</span
                                ></NuxtLink
                            >
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <!-- blog artical card start -->
                <div
                    class="col-xl-4 col-md-6"
                    data-aos="fade-up"
                    :data-aos-duration="i * 200 + 600"
                    v-for="(item, i) in blogArticle2.slice(0, 3)"
                    :key="i"
                >
                    <BlogArticleCard2 :data="item" />
                </div>
                <!-- blog artical card end -->
            </div>
        </div>
    </div>
</template>
