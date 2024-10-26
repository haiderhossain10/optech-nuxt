<script setup lang="ts">
import { onMounted, ref } from "vue";

// References for DOM elements
const progressPath = ref<SVGPathElement | null>(null);
const pathLength = ref(0);
const offset = 50;

onMounted(() => {
    if (progressPath.value) {
        // Calculate path length
        pathLength.value = progressPath.value.getTotalLength();

        // Set up path styles
        progressPath.value.style.transition = "none";
        progressPath.value.style.strokeDasharray = `${pathLength.value} ${pathLength.value}`;
        progressPath.value.style.strokeDashoffset = `${pathLength.value}`;
        progressPath.value.getBoundingClientRect(); // Trigger a layout calculation
        progressPath.value.style.transition = "stroke-dashoffset 10ms linear";

        // Update progress on scroll
        const updateProgress = () => {
            const scroll = window.scrollY;
            const height =
                document.documentElement.scrollHeight - window.innerHeight;
            const progress =
                pathLength.value - (scroll * pathLength.value) / height;
            if (progressPath.value) {
                progressPath.value.style.strokeDashoffset = `${progress}`;
            }
        };

        // Listen for scroll event
        window.addEventListener("scroll", () => {
            updateProgress();
            const progressWrap = document.querySelector(".progress-wrap");
            if (window.scrollY > offset) {
                progressWrap?.classList.add("active-progress");
            } else {
                progressWrap?.classList.remove("active-progress");
            }
        });

        // Scroll to top on click
        const progressWrap = document.querySelector(".progress-wrap");
        progressWrap?.addEventListener("click", (event) => {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});
</script>

<template>
    <div class="paginacontainer">
        <div class="progress-wrap">
            <svg
                class="progress-circle svg-content"
                width="100%"
                height="100%"
                viewBox="-1 -1 102 102"
            >
                <path
                    ref="progressPath"
                    d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                />
            </svg>
            <div class="top-arrow">
                <i class="ri-arrow-up-s-line"></i>
            </div>
        </div>
    </div>
</template>
