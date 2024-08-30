<script setup lang="ts">
const isSearchActive = useSearchToggle();
</script>

<template>
    <div
        :class="`optech-header-search-section ${isSearchActive ? 'open' : ''}`"
    >
        <div class="container">
            <div class="optech-header-search-box">
                <input type="search" placeholder="Search here..." />
                <button id="header-search" type="button">
                    <i class="ri-search-line"></i>
                </button>
                <p>
                    Type above and press Enter to search. Press Close to cancel.
                </p>
            </div>
        </div>
        <div class="optech-header-search-close" @click="isSearchActive = false">
            <i class="ri-close-line"></i>
        </div>
    </div>
    <div
        :class="`search-overlay ${isSearchActive ? 'open' : ''}`"
        @click="isSearchActive = false"
    ></div>
</template>
