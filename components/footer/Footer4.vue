<script setup lang="ts">
import FooterCopyright1 from "./ui/FooterCopyright1.vue";
import FooterMenu4 from "./ui/FooterMenu4.vue";
</script>

<template>
    <footer class="optech-footer-section bg-light1">
        <div class="container">
            <div class="optech-footer-top optech-section-padding">
                <div class="row">
                    <div class="col-xl-4 col-lg-12">
                        <div class="optech-footer-textarea dark-color">
                            <NuxtLink to="/">
                                <NuxtImg
                                    height="36"
                                    src="/assets/images/logo/logo-dark.svg"
                                    alt="logo"
                                />
                            </NuxtLink>
                            <p>
                                Each demo built with Teba will look different.
                                You can customize almost anything in the
                                appearance of your website with only a few
                            </p>
                            <div class="optech-footer-info dark-color">
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
                    <FooterMenu4 />
                </div>
            </div>
            <FooterCopyright1 />
        </div>
    </footer>
</template>
