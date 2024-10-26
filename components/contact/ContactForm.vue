<script setup lang="ts">
import ContactFormCard from "./ui/ContactFormCard.vue";
</script>

<template>
    <div class="section optech-section-padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 d-flex align-items-center">
                    <div class="optech-default-content mr40">
                        <h2>Let’s build an awesome project together</h2>
                        <p>
                            Each demo built with Teba will look different. You
                            can customize almost anything in the appearance of
                            your website with only a few clicks. Each demo built
                            with Teba will look different.
                        </p>
                        <div class="optech-contact-info-column">
                            <div class="optech-contact-info">
                                <i class="ri-map-pin-2-fill"></i>
                                <h5>Address</h5>
                                <p>
                                    1791 Yorkshire Circle Kitty<br />
                                    Hawk, NC 279499
                                </p>
                            </div>
                            <div class="optech-contact-info">
                                <i class="ri-mail-fill"></i>
                                <h5>Contact</h5>
                                <NuxtLink to="mailto:name@email.com"
                                    >info@mthemeus.com</NuxtLink
                                >
                                <NuxtLink to="tel:123">518-564-3200</NuxtLink>
                            </div>
                        </div>
                        Office Hours: Mon – Sat: 8:00 AM – 10:00 PM
                    </div>
                </div>
                <div class="col-lg-6">
                    <!-- contact form card start -->
                    <ContactFormCard />
                    <!-- contact form card end -->
                </div>
            </div>
        </div>
    </div>
</template>
