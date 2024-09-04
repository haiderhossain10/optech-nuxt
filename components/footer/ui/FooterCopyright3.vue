<script setup lang="ts">
import FooterSocial2 from "./FooterSocial2.vue";

const year = new Date().getFullYear();
</script>

<template>
    <div class="optech-footer-bottom">
        <div class="row">
            <div class="col-lg-6 d-flex align-items-center">
                <div class="optech-copywright">
                    <p>
                        Copyright © {{ year }} MirrorTheme. All rights reserved.
                    </p>
                </div>
            </div>
            <div class="col-lg-6">
                <FooterSocial2 />
            </div>
        </div>
    </div>
</template>
