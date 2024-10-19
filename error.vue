<script setup lang="ts">
import Footer8 from "./components/footer/Footer8.vue";
import Header6 from "./components/header/Header6.vue";
</script>

<template>
    <Header6 />

    <!-- 404 sections start -->
    <div class="optech-errors-section">
        <div class="container">
            <div class="optech-errors-content">
                <NuxtImg
                    height="230"
                    width="588"
                    src="/assets/images/breadcrumb/errors404.svg"
                    alt="errors404"
                />
                <h2>Oops, this page is not found</h2>
                <p>
                    The page you’re looking for can’t be found. Double-check the
                    URL and try again. we invite you to visit our homepage.
                </p>
                <div
                    class="optech-extra-mt"
                    data-aos="fade-up"
                    data-aos-duration="800"
                >
                    <NuxtLink
                        class="optech-default-btn optech-light-btn"
                        data-text="Ask Any Question"
                        to="/"
                    >
                        <span class="btn-wraper">Back to Homepage</span>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
    <!-- 404 sections end -->

    <Footer8 />
</template>
