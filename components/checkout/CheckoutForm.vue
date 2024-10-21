<script setup lang="ts">
import BillingForm from "./ui/BillingForm.vue";
import OrderInfo from "./ui/OrderInfo.vue";
</script>

<template>
    <div class="section optech-section-padding">
        <div class="container">
            <div class="optech-checkout-header">
                <NuxtImg
                    height="20"
                    width="20"
                    src="/assets/images/breadcrumb/mark!.svg"
                    alt="icon"
                />
                Have a coupon?
                <NuxtLink href="/">Click here to enter your code</NuxtLink>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <!-- billing form start -->
                    <BillingForm />
                    <!-- billing form end -->
                </div>
                <div class="col-lg-5 offset-lg-1">
                    <!-- order info start -->
                    <OrderInfo />
                    <!-- order info end -->
                </div>
            </div>
        </div>
    </div>
</template>
