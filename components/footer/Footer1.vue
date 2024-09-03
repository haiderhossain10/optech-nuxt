<script setup lang="ts">
import FooterCopyright1 from "./ui/FooterCopyright1.vue";
import FooterSocial1 from "./ui/FooterSocial1.vue";
import FooterMenu1 from "./ui/FooterMenu1.vue";
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
                            <FooterSocial1 />
                        </div>
                    </div>
                    <FooterMenu1 />
                </div>
            </div>
            <FooterCopyright1 />
        </div>
    </footer>
</template>
