<script setup lang="ts">
const categories = [
    {
        title: "Web Development",
        url: "/",
    },
    {
        title: "App Development",
        url: "/",
    },
    {
        title: "UI/UX Design",
        url: "/",
    },
    {
        title: "Digital Marketing",
        url: "/",
    },
    {
        title: "IT Management",
        url: "/",
    },
    {
        title: "Cyber Security",
        url: "/",
    },
];
</script>

<template>
    <div class="optech-service-sidebar">
        <div class="optech-service-menu">
            <ul>
                <li v-for="(item, i) in categories" :key="i">
                    <NuxtLink :href="item.url"
                        >{{ item.title }} <i class="ri-arrow-right-up-line"></i
                    ></NuxtLink>
                </li>
            </ul>
        </div>
        <div
            class="optech-service-contact"
            data-aos="fade-up"
            data-aos-duration="800"
            style="background-image: url(assets/images/service/bg.png)"
        >
            <div class="optech-service-contact-icon">
                <NuxtImg
                    height="49"
                    width="49"
                    src="/assets/images/service/icon.svg"
                    alt="icon"
                />
            </div>
            <h3>Don't hesitate to contact us</h3>
            <p>At our IT solution company, we are committed to exceptional</p>
            <NuxtLink
                class="optech-default-btn"
                data-text="Get in Touch"
                href="/contact"
                ><span class="btn-wraper">Get in Touch</span></NuxtLink
            >
        </div>
    </div>
</template>
