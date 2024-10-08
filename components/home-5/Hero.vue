<script setup lang="ts">
import HeroForm from "./ui/HeroForm.vue";
</script>

<template>
    <div
        class="optech-hero-section5"
        style="background-image: url(assets/images/hero/hero-bg2.png)"
    >
        <div class="container">
            <div class="row">
                <div class="col-xl-8 col-lg-7 d-flex align-items-center">
                    <div class="optech-hero-content white-color sm">
                        <h1>
                            Optimize your enterprise with our leading guidance
                        </h1>
                        <p>
                            We transform businesses of most major sectors with
                            powerful and adaptable digital solutions that
                            satisfy the needs of today.
                        </p>
                        <div
                            class="optech-extra-mt"
                            data-aos="fade-up"
                            data-aos-duration="600"
                        >
                            <NuxtLink
                                class="optech-default-btn optech-white-btn"
                                data-text="Work With Us"
                                to="/contact"
                                ><span class="btn-wraper"
                                    >Work With Us</span
                                ></NuxtLink
                            >
                        </div>
                    </div>
                </div>
                <div
                    class="col-xl-4 col-lg-5"
                    data-aos="fade-up"
                    data-aos-duration="800"
                >
                    <!-- hero form start -->
                    <HeroForm />
                    <!-- hero form end -->
                </div>
            </div>
        </div>
    </div>
</template>
