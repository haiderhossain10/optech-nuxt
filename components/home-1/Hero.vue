<template>
    <div
        class="optech-hero-section bg-cover"
        style="background-image: url(assets/images/hero/bg1.png)"
    >
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="optech-hero-content">
                        <h5>We provide professional IT services</h5>
                        <h1>Delivering tech solutions for your startups</h1>
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
                                    class="optech-default-btn optech-white-btn"
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
                <div class="col-lg-5 offset-lg-1">
                    <div
                        class="optech-hero-thumb"
                        data-aos="fade-up"
                        data-aos-duration="700"
                    >
                        <NuxtImg
                            src="/assets/images/hero/hero-thumb1.png"
                            alt="thumb"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
