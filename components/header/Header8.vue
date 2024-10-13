<script setup lang="ts">
import HeaderBar8 from "./ui/HeaderBar8.vue";
import Nav2 from "./ui/Nav2.vue";

const isSticky = useScroll();
</script>

<template>
    <header
        :class="`site-header optech-header-section site-header--menu-right optech-header-two ${
            isSticky ? 'sticky-menu' : ''
        }`"
    >
        <HeaderBar8 />
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
                        <div class="menu-overlay"></div>
                        <nav class="menu-block" id="append-menu-header">
                            <div class="mobile-menu-head">
                                <div class="go-back">
                                    <i class="fa fa-angle-left"></i>
                                </div>
                                <div class="current-menu-title"></div>
                                <div class="mobile-menu-close">&times;</div>
                            </div>
                            <Nav2 />
                        </nav>
                    </div>
                    <div
                        class="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex"
                    >
                        <NuxtLink
                            class="optech-default-btn optech-header-btn"
                            data-text="Get in Touch"
                            to="/contact"
                            ><span class="btn-wraper"
                                >Get in Touch</span
                            ></NuxtLink
                        >
                    </div>
                    <!-- mobile menu trigger -->
                    <div class="mobile-menu-trigger light-color">
                        <span></span>
                    </div>
                    <!--/.Mobile Menu Hamburger Ends-->
                </nav>
            </div>
        </div>
    </header>
</template>
