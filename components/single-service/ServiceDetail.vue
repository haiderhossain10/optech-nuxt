<script setup lang="ts">
import SingleServceSidebar from "../ui/sidebars/SingleServceSidebar.vue";

const features = [
    "Creating and editing content",
    "Workflows, reporting, and content organization",
    "User & role-based administration and security",
    "Flexibility, scalability, and performance and analysis",
    "Multilingual content capabilities",
];
</script>

<template>
    <div class="section optech-section-padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="optech-service-details-wrap">
                        <NuxtImg
                            data-aos="fade-up"
                            data-aos-duration="800"
                            src="/assets/images/service/service-deatils.png"
                            alt="service-deatils"
                        />
                        <div class="optech-service-details-item">
                            <h3>Overview</h3>
                            <p>
                                A content management system helps you create,
                                manage, and publish content on the web. It also
                                keep content organized and accessible so it can
                                be used and repurposed effectively. There are
                                various kinds of content management systems
                                available—from cloud-based to a headless
                            </p>

                            <p>
                                CMS provides user-friendly features for easy
                                editing and is compatible with installing
                                plugins and tools that provide even more
                                features for advanced functions. API CMS’s are
                                built to have an excellent user-friendly
                                interface that is easy to use.
                            </p>
                        </div>
                        <div class="optech-service-details-item">
                            <h3>Features</h3>
                            <p>
                                A content management system (CMS) is an
                                application that is used to manage content,
                                allowing multiple contributors to create, edit
                                and publish. Content in a CMS is typically
                                stored in a database and displayed in a
                                presentation layer based on a set of templates
                                like a website.
                            </p>
                            <div class="optech-icon-list">
                                <ul>
                                    <li v-for="(item, i) in features" :key="i">
                                        <i class="ri-check-line"></i>{{ item }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="optech-service-details-item">
                            <h3>Goal</h3>
                            <p>
                                A content management system (CMS) is an
                                application that is used to manage content,
                                allowing multiple contributors to create, edit
                                and publish. Content in a CMS is typically
                                stored in a database and displayed in a
                                presentation layer based on a set of templates
                                like a website.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <!-- sidebar start -->
                    <SingleServceSidebar />
                    <!-- sidebar end -->
                </div>
            </div>
        </div>
    </div>
</template>
