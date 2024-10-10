<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps<{
    percentage: number;
    title: string;
}>();

const progress = ref<number>(0);
const isAnimated = ref<boolean>(false);

const targetPercentage = props.percentage;

const animateProgress = () => {
    const interval = setInterval(() => {
        if (progress.value < targetPercentage) {
            progress.value += 1;
        } else {
            clearInterval(interval);
        }
    }, 20);
};

let observer: IntersectionObserver | null = null;

const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    const entry = entries[0];

    if (entry.isIntersecting && !isAnimated.value) {
        isAnimated.value = true;
        animateProgress();
    }
};

onMounted(() => {
    observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.1,
    });

    const progressBarElement = document.querySelector(".progress-bar");
    if (progressBarElement) {
        observer.observe(progressBarElement);
    }
});

onUnmounted(() => {
    if (observer) {
        observer.disconnect();
    }
});
</script>

<template>
    <div class="optech-progress-item">
        <div class="progress-bar" :data-percentage="percentage">
            <div class="progress-title-holder">
                <div class="progress-title bg-gray">{{ title }}</div>
                <div class="progress-number-wrapper">
                    <div
                        class="progress-number-mark"
                        :style="{ left: progress + '%' }"
                    >
                        <div class="percent">{{ progress }}%</div>
                    </div>
                </div>
            </div>
            <div class="progress-content-outter">
                <div
                    class="progress-content"
                    :style="{ width: progress + '%' }"
                ></div>
            </div>
        </div>
    </div>
</template>
