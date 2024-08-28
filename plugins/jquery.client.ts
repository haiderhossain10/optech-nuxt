import $ from "jquery";
import "slick-carousel";

export default defineNuxtPlugin((nuxtApp) => {
    if (typeof window !== "undefined") {
        nuxtApp.$jquery = $;
    }
});
