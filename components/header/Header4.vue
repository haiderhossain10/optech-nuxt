<script setup lang="ts">
import HeaderBar4 from "./ui/HeaderBar4.vue";
import HeaderSearch from "./ui/HeaderSearch.vue";
import Nav1 from "./ui/Nav1.vue";

const isSearchActive = useSearchToggle();
const isSticky = useScroll();

const isMobileMenuActive = useMobileMenuToggle();
</script>

<template>
    <header
        :class="`site-header optech-header-section header-four  ${
            isSticky ? 'sticky-menu' : ''
        }`"
    >
        <!-- header bar start -->
        <HeaderBar4 />
        <!-- header bar end -->
        <div class="optech-header-bottom">
            <div class="container">
                <nav class="navbar site-navbar">
                    <!-- Brand Logo-->
                    <div class="brand-logo">
                        <NuxtLink to="/">
                            <NuxtImg
                                height="31"
                                src="/assets/images/logo/logo-dark.svg"
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
                            <!-- navigation start -->
                            <Nav1 />
                            <!-- navigation end -->
                        </nav>
                    </div>
                    <div
                        class="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex"
                    >
                        <div class="optech-header-icon">
                            <div
                                class="optech-header-search"
                                @click="isSearchActive = true"
                            >
                                <i class="ri-search-line"></i>
                            </div>
                            <NuxtLink
                                class="optech-default-btn optech-header-btn"
                                data-text="Get in Touch"
                                to="/contact"
                                ><span class="btn-wraper"
                                    >Get in Touch</span
                                ></NuxtLink
                            >
                        </div>
                    </div>
                    <!-- mobile menu trigger -->
                    <div
                        @click="isMobileMenuActive = true"
                        class="mobile-menu-trigger"
                    >
                        <span></span>
                    </div>
                    <!--/.Mobile Menu Hamburger Ends-->
                </nav>
            </div>
        </div>
    </header>
    <!-- header search start -->
    <HeaderSearch />
    <!-- header search end -->
</template>
