<script setup lang="ts">
import CheckoutForm from "~/components/checkout/CheckoutForm.vue";
import Footer8 from "~/components/footer/Footer8.vue";
import Header6 from "~/components/header/Header6.vue";
import Breadcrumb from "~/components/ui/sections/Breadcrumb.vue";

const path = [
    {
        label: "Checkout",
        url: "/",
    },
    {
        label: "Checkout",
        url: "/checkout",
    },
];

useHead({
    title: "Checkout",
});
</script>
<template>
    <Header6 />
    <Breadcrumb title="Checkout" :path="path" />
    <CheckoutForm />
    <Footer8 />
</template>
