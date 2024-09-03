<script setup lang="ts">
import FooterCopyright2 from "./ui/FooterCopyright2.vue";
import FooterInfo1 from "./ui/FooterInfo1.vue";
import FooterMenu2 from "./ui/FooterMenu2.vue";
import FooterSocial2 from "./ui/FooterSocial2.vue";
</script>

<template>
    <footer class="optech-footer-section dark-bg optech-section-padding-top">
        <div class="container">
            <FooterInfo1 />
            <div class="optech-footer-top optech-section-padding-bottom">
                <div class="row">
                    <FooterMenu2 />
                    <div class="col-xl-4 col-lg-4">
                        <div class="optech-subscription-column">
                            <div class="optech-footer-title">
                                <h5>Subscribe Our Newsletter</h5>
                                <p>
                                    Get ready to work together for the better
                                    solution for your business
                                </p>
                            </div>
                            <div class="optech-subscription">
                                <form>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                    />
                                    <button
                                        id="optech-subscription-btn"
                                        type="button"
                                        data-text="Subscribe"
                                    >
                                        <span class="btn-wraper"
                                            >Subscribe</span
                                        >
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="optech-footer-bottom">
                <div class="row">
                    <div class="col-lg-6 d-flex align-items-center">
                        <FooterCopyright2 />
                    </div>
                    <div class="col-lg-6">
                        <FooterSocial2 />
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
