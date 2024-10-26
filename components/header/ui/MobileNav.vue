<script setup lang="ts">
import navigation from "~/data/navigation";
import { Collapse } from "vue-collapsed";

const isChildren = ref<number | null>(null);

const dropdownHandler = (i: number) => {
    if (isChildren.value === i) {
        isChildren.value = null;
    } else {
        isChildren.value = i;
    }
};

const isMobileMenuActive = useMobileMenuToggle();
</script>

<template>
    <div :class="`ui-menu ${isMobileMenuActive ? 'active' : ''}`">
        <div class="ui-menu-head">
            <button @click="isMobileMenuActive = false">
                <div class="mobile-menu-close">×</div>
            </button>
        </div>
        <ul class="ui-menu-main">
            <li v-for="(item, i) in navigation" :key="i">
                <div @click="isMobileMenuActive = false">
                    <NuxtLink v-if="!item.children" :to="item.url"
                        >{{ item.label }}
                        <i v-if="!item.url" class="ri-arrow-down-s-fill"></i>
                    </NuxtLink>
                </div>
                <div v-if="item.children">
                    <button
                        @click="dropdownHandler(i)"
                        :class="isChildren === i ? 'ui-active' : ''"
                    >
                        {{ item.label }}

                        <i class="ri-arrow-down-s-fill"></i>
                    </button>
                    <Collapse :when="i == isChildren" class="v-collapse">
                        <ul class="ui-children">
                            <li v-for="(item2, i2) in item.children" :key="i2">
                                <div @click="isMobileMenuActive = false">
                                    <NuxtLink :to="item2.url">
                                        {{ item2.label }}
                                    </NuxtLink>
                                </div>
                            </li>
                        </ul>
                    </Collapse>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.ui-menu {
    position: fixed;
    z-index: 999;
    background-color: #fff;
    width: 80%;
    inset: 0;
    left: -100%;
    overflow-y: auto;
    transition: 0.3s;
}

.ui-menu.active {
    left: 0;
}

@media (min-width: 992px) {
    .ui-menu {
        display: none;
    }
}

.ui-menu-head {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.ui-menu-head button {
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    font-size: 25px;
    height: 50px;
    width: 50px;
    color: #000;
}

.ui-menu-main li {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.ui-menu-main li:last-child {
    border-bottom: none;
}

.ui-menu-main li button,
.ui-menu-main li a {
    width: 100%;
    padding: 0 0 0 15px;
    color: #000 !important;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 500;
    height: 50px;
}

.ui-menu-main li button i,
.ui-menu-main li a i {
    height: 50px;
    width: 50px;
    display: grid;
    place-items: center;
}

.ui-children li {
    padding-left: 2rem;
}

.ui-active {
    background-color: #f5f5f5;
}
</style>
