<script setup lang="ts">
import FooterCopyright4 from "./ui/FooterCopyright4.vue";
import FooterForm from "./ui/FooterForm.vue";
import FooterMenu5 from "./ui/FooterMenu5.vue";
import FooterSocial3 from "./ui/FooterSocial3.vue";
</script>

<template>
    <footer class="optech-footer-section footer-v5">
        <FooterForm />
        <div class="container">
            <div class="optech-footer-top optech-section-padding">
                <div class="row">
                    <div class="col-xl-4 col-lg-12">
                        <div class="optech-footer-textarea light-color">
                            <NuxtLink to="/">
                                <NuxtImg
                                    height="36"
                                    src="/assets/images/logo/logo-white.svg"
                                    alt="logo"
                                />
                            </NuxtLink>
                            <p>
                                Each demo built with Teba will look different.
                                You can customize almost anything in the
                                appearance of your website with only a few
                            </p>
                            <FooterSocial3 />
                        </div>
                    </div>
                    <FooterMenu5 />
                </div>
            </div>
            <FooterCopyright4 />
        </div>
    </footer>
</template>
