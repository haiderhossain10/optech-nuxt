<script setup>
import HeaderBar1 from "./ui/HeaderBar1.vue";
import Nav from "./ui/Nav.vue";
</script>

<template>
    <header
        class="site-header optech-header-section site-header--menu-right"
        id="sticky-menu"
    >
        <!-- header bar start -->
        <HeaderBar1 />
        <!-- header bar end -->

        <div class="optech-header-bottom p-0">
            <div class="container">
                <div class="header-bottom-border">
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
                                <!-- nav start -->
                                <Nav />
                                <!-- nav end -->
                            </nav>
                        </div>
                        <div
                            class="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex"
                        >
                            <div class="optech-header-icon">
                                <div class="optech-header-search light-color">
                                    <i class="ri-search-line"></i>
                                </div>
                                <div class="optech-header-barger">
                                    <span></span>
                                </div>
                            </div>
                        </div>
                        <!-- mobile menu trigger -->
                        <div class="mobile-menu-trigger light-color">
                            <span></span>
                        </div>
                        <!--/.Mobile Menu Hamburger Ends-->
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>
