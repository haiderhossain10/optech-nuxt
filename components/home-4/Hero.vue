<template>
    <div
        class="optech-hero-section4 bg-cover"
        style="background-image: url(assets/images/hero/bg3.png)"
    >
        <div class="container">
            <div class="row">
                <div class="col-lg-6 d-flex align-items-center">
                    <div class="optech-hero-content dark-color">
                        <h5>We provide professional IT services</h5>
                        <h1>Best IT services for your agency</h1>
                        <p>
                            We transform businesses of most major sectors with
                            powerful and adaptable digital solutions that
                            satisfy the needs of today.
                        </p>
                        <div class="optech-extra-mt">
                            <div class="optech-btn-wrap">
                                <NuxtLink
                                    class="optech-default-btn"
                                    data-text="Work With Us"
                                    to="/contact"
                                    ><span class="btn-wraper"
                                        >Work With Us</span
                                    ></NuxtLink
                                >
                                <NuxtLink
                                    class="optech-default-btn optech-light-btn"
                                    data-text="View Services"
                                    to="/service"
                                >
                                    <span class="btn-wraper"
                                        >View Services</span
                                    >
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="col-lg-6"
                    data-aos="fade-up"
                    data-aos-duration="800"
                >
                    <div class="optech-hero-thumb">
                        <NuxtImg
                            src="/assets/images/hero/hero-thumb3.png"
                            alt="hero-img"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
