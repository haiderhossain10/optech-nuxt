<script setup lang="ts">
import FooterCopyright3 from "./ui/FooterCopyright3.vue";
import FooterMenu3 from "./ui/FooterMenu3.vue";
import FooterWorkTogether from "./ui/FooterWorkTogether.vue";
</script>

<template>
    <footer class="optech-footer-section dark-bg optech-section-padding-top">
        <div class="container">
            <!-- footer work together start -->
            <FooterWorkTogether />
            <!-- footer work together end -->
        </div>
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
                            <div class="optech-footer-info">
                                <ul>
                                    <li>
                                        <NuxtLink to="tel:123"
                                            ><i class="ri-phone-fill"></i
                                            >518-564-3200</NuxtLink
                                        >
                                    </li>
                                    <li>
                                        <NuxtLink to="mailto:name@email.com"
                                            ><i class="ri-mail-fill"></i
                                            >mthemeus@example.com</NuxtLink
                                        >
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <FooterMenu3 />
                </div>
            </div>
            <FooterCopyright3 />
        </div>
    </footer>
</template>
