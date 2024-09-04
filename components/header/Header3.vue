<script setup lang="ts">
import HeaderSidebar from "../ui/sidebars/HeaderSidebar.vue";
import HeaderBar3 from "./ui/HeaderBar3.vue";
import HeaderSearch from "./ui/HeaderSearch.vue";
import Nav2 from "./ui/Nav2.vue";
const isSearchActive = useSearchToggle();
const isSticky = useScroll(100);
const isHeaderSidebarActive = useHeaderSidebarToggle();
</script>

<template>
    <header
        :class="`site-header optech-header-section site-header--menu-right ${
            isSticky ? 'sticky-menu' : ''
        }`"
    >
        <!-- header bar start -->
        <HeaderBar3 />
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
                            <nav class="menu-block">
                                <div class="mobile-menu-head">
                                    <div class="go-back">
                                        <i class="fa fa-angle-left"></i>
                                    </div>
                                    <div class="current-menu-title"></div>
                                    <div class="mobile-menu-close">&times;</div>
                                </div>
                                <!-- nav start -->
                                <Nav2 />
                                <!-- nav end -->
                            </nav>
                        </div>
                        <div
                            class="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex"
                        >
                            <div class="optech-header-icon">
                                <div
                                    class="optech-header-search light-color"
                                    @click="isSearchActive = true"
                                >
                                    <i class="ri-search-line"></i>
                                </div>
                                <div
                                    class="optech-header-barger"
                                    @click="isHeaderSidebarActive = true"
                                >
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
    <!-- header search start -->
    <HeaderSearch />
    <!-- header search end -->

    <!-- header sidebar start -->
    <HeaderSidebar />
    <!-- header sidebar end -->
</template>
