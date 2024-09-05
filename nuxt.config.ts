export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    devtools: { enabled: true },
    css: [
        "bootstrap/dist/css/bootstrap.min.css",
        "slick-carousel/slick/slick.css",
        "slick-carousel/slick/slick-theme.css",
        "public/assets/css/fontawesome.css",
        "public/assets/css/remixicon.css",
        "public/assets/css/main.css",
        "public/assets/css/app.min.css",
    ],
    googleFonts: {
        families: {
            Lora: {
                wght: [400, 500, 600, 700],
            },
        },
    },
    build: {
        transpile: ["vue-countup-v3"],
    },
    modules: ["@nuxt/image", "@nuxtjs/google-fonts"],
});
