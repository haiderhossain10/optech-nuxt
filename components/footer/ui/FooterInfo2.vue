<template>
    <div class="optech-infobox-wrap extra-padding">
        <div class="row">
            <div
                class="col-xl-4 col-md-6"
                data-aos="fade-up"
                data-aos-duration="600"
            >
                <NuxtLink to="tel:123">
                    <div class="optech-infobox-item light-color">
                        <div class="optech-infobox-icon">
                            <i class="ri-phone-fill"></i>
                        </div>
                        <div class="optech-infobox-data">
                            <p>Call anytime</p>
                            <h5>518-564-3200</h5>
                        </div>
                    </div>
                </NuxtLink>
            </div>
            <div
                class="col-xl-4 col-md-6"
                data-aos="fade-up"
                data-aos-duration="800"
            >
                <NuxtLink to="mailto:name@email.com">
                    <div class="optech-infobox-item light-color">
                        <div class="optech-infobox-icon">
                            <i class="ri-mail-fill"></i>
                        </div>
                        <div class="optech-infobox-data">
                            <p>Email address</p>
                            <h5>tachup@example.com</h5>
                        </div>
                    </div>
                </NuxtLink>
            </div>
            <div
                class="col-xl-4 col-md-6"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <div class="optech-infobox-item light-color">
                    <div class="optech-infobox-icon">
                        <i class="ri-time-fill"></i>
                    </div>
                    <div class="optech-infobox-data">
                        <p>Office Hours</p>
                        <h5>8:00 AM – 10:00 PM</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
