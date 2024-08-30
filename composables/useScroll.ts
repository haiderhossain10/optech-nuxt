import { ref, onMounted, onUnmounted } from "vue";

export function useScroll(y: number = 50) {
    const isScrolled = ref<boolean>(false);

    const handleScroll = () => {
        isScrolled.value = window.scrollY > y;
    };

    onMounted(() => {
        window.addEventListener("scroll", handleScroll);
        handleScroll();
    });

    onUnmounted(() => {
        window.removeEventListener("scroll", handleScroll);
    });

    return isScrolled;
}
