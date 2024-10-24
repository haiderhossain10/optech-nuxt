<template>
    <div class="optech-navigation">
        <nav class="navigation pagination center" aria-label="Posts">
            <div class="nav-links">
                <NuxtLink class="next page-numbers" to="/">
                    <i class="ri-arrow-left-s-line"></i>
                </NuxtLink>
                <span aria-current="page" class="page-numbers current">1</span>
                <NuxtLink class="page-numbers" to="/">2</NuxtLink>
                <NuxtLink class="page-numbers" to="/">3</NuxtLink>
                <NuxtLink class="next page-numbers" to="/">
                    <i class="ri-arrow-right-s-line"></i>
                </NuxtLink>
            </div>
        </nav>
    </div>
</template>
