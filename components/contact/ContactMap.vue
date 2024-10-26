<script setup lang="ts">
import { GoogleMap, Marker, InfoWindow } from "vue3-google-map";

const infowindow = ref(false);
const center = { lat: 22.4030625, lng: 91.8641114 };
</script>

<template>
    <div class="ui-map-section">
        <GoogleMap
            api-key="AIzaSyArZVfNvjnLNwJZlLJKuOiWHZ6vtQzzb1Y"
            style="width: 100%; height: 100%"
            :center="center"
            :zoom="15"
            :zoom-control="false"
        >
            <Marker :options="{ position: center }">
                <InfoWindow v-model="infowindow">
                    <div class="ui-map">
                        <h4>Optech</h4>
                        <p>
                            22, 3rd Floor, Road: 1, Block: A, Chandgaon R/A,
                            Chittagong
                        </p>
                    </div>
                </InfoWindow>
            </Marker>
        </GoogleMap>
    </div>
</template>

<style scoped>
.ui-map-section {
    height: clamp(18.75rem, 13.8734rem + 22.293vw, 40.625rem);
    width: 100%;
}
</style>
