<script setup lang="ts">
import type { ExpertTeam1Type } from "~/types/types";

const props = defineProps<{
    data: ExpertTeam1Type;
}>();

const { imgUrl, name, position } = props.data;
</script>

<template>
    <div class="optech-team-wrap border_all">
        <div class="optech-team-thumb">
            <NuxtImg :src="imgUrl" alt="team" />
            <div class="optech-social-icon-box style-three position">
                <ul>
                    <li>
                        <NuxtLink to="https://www.linkedin.com/">
                            <i class="ri-linkedin-fill"></i>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="https://twitter.com/">
                            <i class="ri-twitter-fill"></i>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="https://www.instagram.com/">
                            <i class="ri-instagram-fill"></i>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
        <div class="optech-team-data">
            <NuxtLink to="/team-details">
                <h5>{{ name }}</h5>
            </NuxtLink>
            <p>{{ position }}</p>
        </div>
    </div>
</template>
