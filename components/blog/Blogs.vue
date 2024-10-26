<script setup lang="ts">
import { blog1 } from "~/data/data";
import Pagination2 from "../ui/Pagination2.vue";
import BlogCart from "./ui/BlogCart.vue";
import BlogSidebar from "../ui/sidebars/BlogSidebar.vue";
</script>

<template>
    <div class="section optech-section-padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <!-- blog start  -->
                    <div
                        v-for="(item, i) in blog1.slice(0, 5)"
                        :key="i"
                        data-aos="fade-up"
                        data-aos-duration="600"
                    >
                        <BlogCart :data="item" />
                    </div>
                    <!-- blog end  -->
                    <Pagination2 />
                </div>
                <div class="col-lg-4">
                    <!-- blog sidebar start -->
                    <BlogSidebar />
                    <!-- blog sidebar end -->
                </div>
            </div>
        </div>
    </div>
</template>
