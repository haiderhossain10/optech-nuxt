<script setup lang="ts">
const props = defineProps<{
    title: string;
    path: { label: string; url: string }[];
}>();

const { title, path } = props;
</script>

<template>
    <div
        class="optech-breadcrumb"
        style="background-image: url(/assets/images/breadcrumb/breadcrumb.png)"
    >
        <div class="container">
            <h1 class="post__title">{{ title }}</h1>
            <nav class="breadcrumbs">
                <ul>
                    <li
                        class="ui-breadcrumb"
                        v-for="(item, i) in path"
                        :key="i"
                    >
                        <NuxtLink aria-current="page" :href="item.url">{{
                            item.label
                        }}</NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<style scoped>
.ui-breadcrumb:last-child a {
    color: #fff;
}
</style>
