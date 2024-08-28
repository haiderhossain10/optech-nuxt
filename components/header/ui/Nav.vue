<script setup>
import navigation from "~/data/navigation";
</script>

<template>
    <ul class="site-menu-main light-color">
        <li
            :class="`nav-item ${item.children ? 'nav-item-has-children' : ''}`"
            v-for="(item, i) in navigation"
            :key="i"
        >
            <NuxtLink
                v-if="item.children"
                to="javascript:void(0)"
                class="nav-link-item drop-trigger"
                >{{ item.label }} <i class="ri-arrow-down-s-fill"></i
            ></NuxtLink>
            <NuxtLink
                v-if="!item.children"
                class="nav-link-item"
                :to="item.url"
                >{{ item.label }}</NuxtLink
            >
            <ul v-if="item.children" class="sub-menu">
                <li
                    v-for="(item2, i2) in item.children"
                    :key="i2"
                    :class="`sub-menu--item ${
                        item2.children ? 'nav-item-has-children' : ''
                    }`"
                >
                    <NuxtLink v-if="!item2.children" :to="item2.url">
                        <span class="menu-item-text">{{ item2.label }}</span>
                    </NuxtLink>
                    <NuxtLink
                        v-if="item2.children"
                        to="javascript:void(0)"
                        data-menu-get="h3"
                        class="drop-trigger"
                        >{{ item2.label }} <i class="ri-arrow-down-s-fill"></i>
                    </NuxtLink>
                    <ul v-if="item2.children" class="sub-menu shape-none">
                        <li
                            class="sub-menu--item"
                            v-for="(item3, i3) in item2.children"
                            :key="i3"
                        >
                            <NuxtLink :to="item3.url">
                                <span class="menu-item-text">{{
                                    item3.label
                                }}</span>
                            </NuxtLink>
                        </li>
                    </ul>
                </li>
                <li class="sub-menu--item nav-item-has-children"></li>
            </ul>
        </li>
    </ul>
</template>
