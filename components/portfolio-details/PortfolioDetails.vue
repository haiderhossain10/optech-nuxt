<script setup lang="ts">
import PortfolioContact from "./PortfolioContact.vue";
import PortfolioProjectDetails from "./PortfolioProjectDetails.vue";
import Pagination from "./ui/Pagination.vue";
</script>

<template>
    <div class="section optech-section-padding">
        <div class="container">
            <div
                class="optech-pd-thumb"
                data-aos="fade-up"
                data-aos-duration="800"
            >
                <NuxtImg
                    height="677px"
                    width="1272px"
                    class="h-auto w-full"
                    src="/assets/images/p1/p_details.png"
                    alt="p_details"
                />
            </div>
            <div class="optech-pd-wrap">
                <div class="row">
                    <div class="col-xl-8 col-lg-7">
                        <div class="optech-pd-content-wrap">
                            <div class="optech-pd-content-item">
                                <h3>Project overview</h3>
                                <p>
                                    A content management system helps you
                                    create, manage, and publish content on the
                                    web. It also keep content organized and
                                    accessible so it can be used and repurposed
                                    effectively. There are various kinds of
                                    content management systems available—from
                                    cloud-based to a headless
                                </p>
                                <p>
                                    CMS provides user-friendly features for easy
                                    editing and is compatible with installing
                                    plugins and tools that provide even more
                                    features for advanced functions. API CMS’s
                                    are built to have an excellent user-friendly
                                    interface that is easy to use.
                                </p>
                            </div>
                            <div class="optech-pd-content-item">
                                <h3>The challenge of project</h3>
                                <p>
                                    A content management system (CMS) is an
                                    application that is used to manage content,
                                    allowing multiple contributors to create,
                                    edit and publish. Content in a CMS is
                                    typically stored in a database and displayed
                                    in a presentation layer based on a set of
                                    templates like a website.
                                </p>
                            </div>
                            <div class="optech-pd-content-item">
                                <div class="row">
                                    <div
                                        class="col-md-6"
                                        data-aos="fade-up"
                                        data-aos-duration="600"
                                    >
                                        <NuxtImg
                                            src="/assets/images/p1/p1.png"
                                            alt="img"
                                        />
                                    </div>
                                    <div
                                        class="col-md-6"
                                        data-aos="fade-up"
                                        data-aos-duration="800"
                                    >
                                        <NuxtImg
                                            src="/assets/images/p1/p2.png"
                                            alt="img"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="optech-pd-content-item">
                                <p>
                                    CMS provides user-friendly features for easy
                                    editing and is compatible with installing
                                    plugins and tools that provide even more
                                    features for advanced functions. API CMS’s
                                    are built to have an excellent user-friendly
                                    interface that is easy to use.
                                </p>
                            </div>
                            <div class="optech-icon-list">
                                <ul>
                                    <li>
                                        <i class="ri-check-line"></i>Creating
                                        and editing content
                                    </li>
                                    <li>
                                        <i class="ri-check-line"></i>Workflows,
                                        reporting, and content organization
                                    </li>
                                    <li>
                                        <i class="ri-check-line"></i>User &
                                        role-based administration and security
                                    </li>
                                    <li>
                                        <i class="ri-check-line"></i
                                        >Flexibility, scalability, and
                                        performance and analysis
                                    </li>
                                    <li>
                                        <i class="ri-check-line"></i
                                        >Multilingual content capabilities
                                    </li>
                                </ul>
                            </div>
                            <div class="optech-pd-content-item">
                                <h3>Final results</h3>
                                <p>
                                    Having a content management system for your
                                    website allows you to have control of your
                                    content. It means having the ability to
                                    update, change or delete any images, text,
                                    video, or audio. It allows you to keep your
                                    site organized, up to date and looking.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-5">
                        <div class="optech-pd-sidebar-wrap">
                            <PortfolioProjectDetails />
                            <PortfolioContact />
                        </div>
                    </div>
                </div>
            </div>
            <Pagination />
        </div>
    </div>
</template>
