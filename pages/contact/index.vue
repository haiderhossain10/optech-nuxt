<script setup lang="ts">
import ContactForm from "~/components/contact/ContactForm.vue";
import ContactMap from "~/components/contact/ContactMap.vue";
import Footer8 from "~/components/footer/Footer8.vue";
import Header6 from "~/components/header/Header6.vue";
import Breadcrumb from "~/components/ui/sections/Breadcrumb.vue";

const path = [
    {
        label: "Home",
        url: "/",
    },
    {
        label: "Contact us",
        url: "/contact",
    },
];

useHead({
    title: "Contact us",
});
</script>
<template>
    <Header6 />
    <Breadcrumb title="Contact us" :path="path" />
    <ContactForm />
    <ContactMap />
    <Footer8 />
</template>
