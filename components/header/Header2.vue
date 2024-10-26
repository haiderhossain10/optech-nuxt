<script setup lang="ts">
import HeaderBar2 from "./ui/HeaderBar2.vue";
import Nav2 from "./ui/Nav2.vue";

const isSticky = useScroll();

const isMobileMenuActive = useMobileMenuToggle();
</script>

<template>
    <header
        :class="`site-header optech-header-section site-header--menu-right optech-header-two ${
            isSticky ? 'sticky-menu' : ''
        }`"
    >
        <!-- header bar start -->
        <HeaderBar2 />
        <!-- header bar end -->
        <div class="optech-header-bottom">
            <div class="container">
                <nav class="navbar site-navbar">
                    <!-- Brand Logo-->
                    <div class="brand-logo">
                        <NuxtLink to="/">
                            <NuxtImg
                                src="/assets/images/logo/logo-white.svg"
                                alt="logo"
                                class="light-version-logo"
                            />
                        </NuxtLink>
                    </div>
                    <div class="menu-block-wrapper">
                        <div
                            :class="`menu-overlay ${
                                isMobileMenuActive ? 'active' : ''
                            }`"
                            @click="isMobileMenuActive = false"
                        ></div>
                        <nav class="menu-block">
                            <!-- nav start -->
                            <Nav2 />
                            <!-- nav end -->
                        </nav>
                    </div>
                    <div
                        class="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex"
                    >
                        <NuxtLink
                            class="optech-default-btn optech-header-btn"
                            data-text="Get in Touch"
                            to="/contact-us"
                            ><span class="btn-wraper"
                                >Get in Touch</span
                            ></NuxtLink
                        >
                    </div>
                    <!-- mobile menu trigger -->
                    <div
                        @click="isMobileMenuActive = true"
                        class="mobile-menu-trigger light-color"
                    >
                        <span></span>
                    </div>
                    <!--/.Mobile Menu Hamburger Ends-->
                </nav>
            </div>
        </div>
    </header>
</template>
