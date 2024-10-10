<script setup lang="ts">
import type { Pricing1Type } from "~/types/types";

const props = defineProps<{
    data: Pricing1Type;
    itemLength: number;
    index: number;
}>();

const { plan, price, duration } = props.data;

// calculate the middle index
const i = Math.floor(props.itemLength / 2);
</script>

<template>
    <div
        :class="`optech-pricing-wrap optech-pricing2 ${
            props.index === i ? 'active' : ''
        }`"
    >
        <div class="optech-pricing-header">
            <h4>{{ plan }}</h4>
        </div>
        <div class="optech-pricing-price">
            <h2>
                ${{ price }}<span>/{{ duration }}</span>
            </h2>
        </div>
        <p>Best for Startup business owners who needs website for business.</p>
        <NuxtLink class="optech-pricing-btn" to="/pricing"
            >Select This Plan</NuxtLink
        >
        <div class="optech-pricing-feature">
            <ul>
                <li>
                    <i class="ri-check-line"></i>10 GB disk space availability
                </li>
                <li><i class="ri-check-line"></i>50 GB NVMe SSD for use</li>
                <li>
                    <i class="ri-check-line"></i>Free platform access for all
                </li>
                <li>
                    <i class="ri-check-line"></i>Free lifetime updates facility
                </li>
                <li><i class="ri-check-line"></i>Free one year support</li>
            </ul>
        </div>
    </div>
</template>
