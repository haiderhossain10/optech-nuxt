<script setup lang="ts">
import { blogArticle1 } from "~/data/data";
import Pagination from "../ui/Pagination.vue";
import BlogArticleCard from "../ui/cards/BlogArticleCard.vue";
</script>

<template>
    <div class="section optech-section-padding optech-blog-grid">
        <div class="container">
            <div class="row">
                <div
                    class="col-xl-4 col-md-6"
                    data-aos="fade-up"
                    :data-aos-duration="i * 200 + 600"
                    v-for="(item, i) in blogArticle1.slice(0, 9)"
                    :key="i"
                >
                    <!-- blog article card start -->
                    <BlogArticleCard :data="item" />
                    <!-- blog article card end -->
                </div>
            </div>
            <Pagination />
        </div>
    </div>
</template>
