<script setup lang="ts">
import Pagination3 from "../ui/Pagination3.vue";
import BlogSidebar from "../ui/sidebars/BlogSidebar.vue";
import BlogCommentForm from "./ui/BlogCommentForm.vue";
import BlogCommentList from "./ui/BlogCommentList.vue";
</script>

<template>
    <div class="section optech-section-padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div
                        class="optech-blog-thumb single-blog"
                        data-aos="fade-up"
                        data-aos-duration="800"
                    >
                        <NuxtImg
                            src="/assets/images/blog/blog-single.png"
                            alt="blog-single"
                        />
                    </div>
                    <div class="optech-single-post-content-wrap">
                        <div class="optech-single-post-meta">
                            <ul>
                                <li>
                                    <NuxtLink to="/"
                                        ><i class="ri-calendar-fill"></i> 26
                                        June 2023</NuxtLink
                                    >
                                </li>
                                <li>
                                    <NuxtLink to="/"
                                        ><i class="ri-bookmark-fill"></i>
                                        Technology</NuxtLink
                                    >
                                </li>
                                <li>
                                    <NuxtLink to="/"
                                        ><i class="ri-chat-2-fill"></i> 2
                                        Comments</NuxtLink
                                    >
                                </li>
                            </ul>
                        </div>
                        <div class="entry-content">
                            <p>
                                Vast numbers of employees now work remotely, and
                                it’s too late to develop a set of remote-work
                                policies if you didn’t already have one. But
                                there are ways to make the remote-work
                                experience productive and engaging for employees
                            </p>

                            <p>
                                Use both direct conversations and indirect
                                observations to get visibility into employees’
                                challenges and concerns. Use every opportunity
                                to make clear to employees that you support and
                                care them. To facilitate regular conversations
                                between managers and employees, provide managers
                                with guidance on how best to broach sensitive
                                subjects arising from the COVID-19 pandemic,
                                including alternative work models, job security
                                and prospects, impact on staffing
                            </p>

                            <div class="optech-single-thumb">
                                <div class="row">
                                    <div
                                        class="col-lg-6"
                                        data-aos="fade-up"
                                        data-aos-duration="600"
                                    >
                                        <NuxtImg
                                            src="/assets/images/blog/b-d-thumb1.png"
                                            alt="thumb"
                                        />
                                    </div>
                                    <div
                                        class="col-lg-6"
                                        data-aos="fade-up"
                                        data-aos-duration="800"
                                    >
                                        <NuxtImg
                                            src="/assets/images/blog/b-d-thumb2.png"
                                            alt="thumb"
                                        />
                                    </div>
                                </div>
                            </div>

                            <p>
                                The third Monday of January is supposed to be
                                the most depressing day of the year. Whether you
                                believe that or not, the long nights, cold
                                weather, and trying to keep to new year
                                resolutions are all probably getting to you a
                                little by now. To make matters worse many will
                                still be recovering from their Christmas
                                spending. So how can you make today
                            </p>

                            <blockquote>
                                <NuxtImg
                                    src="/assets/images/blog/quote.svg"
                                    alt=""
                                />
                                We appreciate the consistent high-quality
                                service provided by their team goes above and
                                beyond concerns promptly ”
                            </blockquote>

                            <p>
                                Vast numbers of employees now work remotely, and
                                it’s too late to develop a set of remote-work
                                policies if you didn’t already have one. But
                                there are ways to make the remote-work
                                experience productive and engaging for employees
                            </p>
                            <p>
                                Use both direct conversations and indirect
                                observations to get visibility into employees’
                                challenges and concerns. Use every opportunity
                                to make clear to employees that you support and
                                care them. To facilitate regular conversations
                                between managers and employees, provide managers
                                with guidance on how best to broach sensitive
                                subjects arising from the COVID-19 pandemic
                            </p>

                            <div class="optech-single-post-tag-wrap">
                                <div class="optech-blog-tags">
                                    <ul>
                                        <li>
                                            <NuxtLink to="/"
                                                >IT Solution</NuxtLink
                                            >
                                        </li>
                                        <li>
                                            <NuxtLink to="/"
                                                >Technology</NuxtLink
                                            >
                                        </li>
                                        <li>
                                            <NuxtLink to="/"
                                                >Cyber Security</NuxtLink
                                            >
                                        </li>
                                        <li>
                                            <NuxtLink to="/">Software</NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <!-- pagination start -->
                            <Pagination3 />
                            <!-- pagination end -->

                            <!-- blog comment list start -->
                            <BlogCommentList />
                            <!-- blog comment list end -->

                            <!-- blog comment form start -->
                            <BlogCommentForm />
                            <!-- blog comment form end -->
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <!-- blog sidebar start -->
                    <BlogSidebar />
                    <!-- blog sidebar end -->
                </div>
            </div>
        </div>
    </div>
</template>
