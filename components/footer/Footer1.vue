<script setup lang="ts">
import FooterCopyright1 from "./ui/FooterCopyright1.vue";
import FooterSocial1 from "./ui/FooterSocial1.vue";
import FooterWidget1 from "./ui/FooterWidget1.vue";
</script>

<template>
    <footer class="optech-footer-section">
        <div class="container">
            <div class="optech-footer-top optech-section-padding">
                <div class="row">
                    <div class="col-xl-4 col-lg-12">
                        <div class="optech-footer-textarea dark-color">
                            <NuxtLink to="/">
                                <img
                                    src="/assets/images/logo/logo-dark.svg"
                                    alt=""
                                />
                            </NuxtLink>
                            <p>
                                Each demo built with Teba will look different.
                                You can customize almost anything in the
                                appearance of your website with only a few
                            </p>
                            <!-- footer social start -->
                            <FooterSocial1 />
                            <!-- footer social end -->
                        </div>
                    </div>
                    <!-- footer widget start -->
                    <FooterWidget1 />
                    <!-- footer widget end -->
                </div>
            </div>
            <!-- footer copyright start -->
            <FooterCopyright1 />
            <!-- footer copyright end -->
        </div>
    </footer>
</template>
