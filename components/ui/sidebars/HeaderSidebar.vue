<script setup lang="ts">
import HeaderSidebarSocial from "./ui/HeaderSidebarSocial.vue";

const isHeaderSidebarActive = useHeaderSidebarToggle();
</script>

<template>
    <div class="optech-sidemenu-wraper">
        <div
            :class="`optech-sidemenu-column ${
                isHeaderSidebarActive ? 'active' : ''
            }`"
        >
            <div class="optech-sidemenu-body">
                <div class="optech-sidemenu-logo">
                    <NuxtLink to=""
                        ><NuxtImg
                            height="36"
                            src="/assets/images/logo/logo-dark.svg"
                            alt="logo"
                    /></NuxtLink>
                </div>
                <p>
                    Vast numbers of employees now work remotely, and it’s too
                    late to develop a set of remote-work policies if you didn’t
                    already have one.
                </p>
                <!-- social start -->
                <HeaderSidebarSocial />
                <!-- social end -->
                <div class="optech-sidemenu-thumb">
                    <NuxtImg
                        src="/assets/images/hero/hero-bg1.png"
                        alt="hero"
                    />
                </div>
                <div class="optech-contact-info-wrap">
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
            </div>
            <span
                class="optech-sidemenu-close"
                @click="isHeaderSidebarActive = false"
            >
                <i class="ri-close-line"></i>
            </span>
        </div>
        <div
            @click="isHeaderSidebarActive = false"
            :class="`offcanvas-overlay ${
                isHeaderSidebarActive ? 'active' : ''
            }`"
        ></div>
    </div>

    <div class="offcanves-menu"></div>
</template>
