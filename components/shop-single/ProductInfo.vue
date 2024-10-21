<script setup lang="ts">
import { shop } from "~/data/data";
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { toast } from "vue-sonner";

const thumbsSwiper = ref(null);

const modules = [FreeMode, Navigation, Thumbs];

const setThumbsSwiper = (swiper: any) => {
    thumbsSwiper.value = swiper;
};

const route = useRoute();

const product = shop.find((item) => item.id === Number(route.params.id));

const shopProduct = useShop();

const cartProduct = shopProduct.value.find(
    (item) => item.id === Number(route.params.id)
);

const count = ref(cartProduct?.qty || 1);

const productImages = [
    product?.imgUrl,
    "/assets/images/shop/shop2.png",
    "/assets/images/shop/shop3.png",
    "/assets/images/shop/shop4.png",
];

// add to cart handler
const updateQty = () => {
    if (!product) return;

    const isExist = shopProduct.value.find(
        (item) => item.id === Number(route.params.id)
    );

    if (isExist) {
        shopProduct.value = shopProduct.value.map((item) => {
            if (item.id === Number(route.params.id)) {
                item.qty = count.value;
            }

            return item;
        });
    } else {
        shopProduct.value.push({
            ...product,
            qty: count.value,
        });
    }

    toast.success(`(${count.value} ${product.title}) added to cart`);
};
</script>

<template>
    <div class="section optech-section-padding-top">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div data-aos="fade-up" data-aos-duration="800">
                        <swiper
                            class="ui-gallery"
                            :spaceBetween="10"
                            :navigation="true"
                            :thumbs="{ swiper: thumbsSwiper }"
                            :modules="modules"
                        >
                            <swiper-slide
                                v-for="(item, i) in productImages"
                                :key="i"
                            >
                                <NuxtImg
                                    style="height: 100%; width: 100%"
                                    :src="item"
                                    alt="product-img"
                                />
                            </swiper-slide>
                        </swiper>
                        <Swiper
                            @swiper="setThumbsSwiper"
                            :spaceBetween="18"
                            :slidesPerView="4"
                            :freeMode="true"
                            :watchSlidesProgress="true"
                            :modules="modules"
                            class="ui-gallery-thumb"
                        >
                            <swiper-slide
                                v-for="(item, i) in productImages"
                                :key="i"
                            >
                                <NuxtImg :src="item" alt="product-img" />
                            </swiper-slide>
                        </Swiper>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="optech-details-content">
                        <h2>{{ product?.title }}</h2>
                        <h6>${{ product?.offerPrice.toFixed(2) }}</h6>
                        <p>
                            We are architects of innovation, trailblazers of
                            technological advancement, and partners in your
                            success. As a dynamic and forward-thinking
                            organization
                        </p>
                        <div class="optech-product-wrap">
                            <div class="optech-product-number">
                                <span
                                    @click="
                                        count > 1 ? (count = count - 1) : count
                                    "
                                    class="optech-product-minus"
                                    ><i class="ri-subtract-line"></i
                                ></span>
                                <input type="number" v-model="count" />
                                <span
                                    @click="count = count + 1"
                                    class="optech-product-plus"
                                    ><i class="ri-add-line"></i
                                ></span>
                            </div>
                            <button
                                @click="updateQty"
                                class="optech-product-btn"
                                data-text="Add to Cart"
                            >
                                <span class="btn-wraper">Add to Cart</span>
                            </button>
                        </div>
                        <div class="optech-product-info">
                            <h5>Quick info</h5>
                            <ul>
                                <li>
                                    <span>Category: </span
                                    ><NuxtLink to="/">Smart Watch</NuxtLink>
                                </li>
                                <li>
                                    <span>Tags: </span><a href="">Shop,</a>
                                    <NuxtLink to="/">Technology</NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.ui-gallery {
    padding-bottom: 1rem;
}

.ui-gallery .swiper-slide img {
    height: 586px;
    object-fit: cover;
}

.ui-gallery-thumb .swiper-slide img,
.ui-gallery .swiper-slide img {
    border-radius: 10px;
}
</style>
