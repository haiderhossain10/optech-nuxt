<script setup lang="ts">
import { GoogleMap, Marker, InfoWindow } from "vue3-google-map";

const infowindow = ref(false);
const center = { lat: 22.4030625, lng: 91.8641114 };
</script>

<template>
    <div class="optech-footer-form-section">
        <div class="container">
            <div class="optech-footer-form-wrap">
                <div class="row">
                    <div class="col-lg-7">
                        <div class="optech-footer-form">
                            <h4>Fill The Contact Form</h4>
                            <p>Get Free Consultation For IT Solutions</p>
                            <form action="#">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="optech-main-field">
                                            <input
                                                type="text"
                                                placeholder="Your name"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="optech-main-field">
                                            <input
                                                type="number"
                                                placeholder="Phone number"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div class="optech-main-field">
                                    <input
                                        type="email"
                                        placeholder="Email address"
                                    />
                                </div>
                                <div class="optech-main-field">
                                    <textarea
                                        name="textarea"
                                        placeholder="Write your message"
                                    ></textarea>
                                </div>
                                <button
                                    id="optech-main-form-btn"
                                    type="button"
                                    data-text="Send Message"
                                >
                                    <span class="btn-wraper">Send Message</span>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <GoogleMap
                            api-key="AIzaSyArZVfNvjnLNwJZlLJKuOiWHZ6vtQzzb1Y"
                            style="width: 100%; height: 100%"
                            :center="center"
                            :zoom="15"
                            class="h-full w-full"
                            :zoom-control="false"
                        >
                            <Marker :options="{ position: center }">
                                <InfoWindow v-model="infowindow">
                                    <div class="ui-map">
                                        <h4>Optech</h4>
                                        <p>
                                            22, 3rd Floor, Road: 1, Block: A,
                                            Chandgaon R/A, Chittagong
                                        </p>
                                    </div>
                                </InfoWindow>
                            </Marker>
                        </GoogleMap>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.gm-style-iw-chr {
    position: absolute;
    right: 0;
}

.gm-style-iw-d {
    padding: 10px 0 0 10px;
}

.ui-map {
    width: 180px;
}
</style>
