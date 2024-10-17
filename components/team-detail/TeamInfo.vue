<script setup lang="ts">
import { social1 } from "~/data/data";
import TeamForm from "./ui/TeamForm.vue";
</script>

<template>
    <div class="section optech-section-padding">
        <div class="container">
            <div class="optech-team-single-wrap">
                <div class="row">
                    <div class="col-lg-5">
                        <div
                            class="optech-team-single-thumb"
                            data-aos="fade-up"
                            data-aos-duration="800"
                        >
                            <NuxtImg
                                src="/assets/images/team/team-details.png"
                                alt="team"
                            />
                        </div>
                    </div>
                    <div class="col-lg-6 offset-lg-1">
                        <div class="optech-team-single-content">
                            <h2>Sophia Rodriguez</h2>
                            <span>CEO & Founder</span>
                            <p>
                                A content management system helps you create,
                                manage, and publish content on the web. It also
                                keep content organized and accessible so it can
                                be used and repurposed effectively.
                            </p>
                            <div class="optech-footer-info dark-color">
                                <ul>
                                    <li>
                                        <NuxtLink href="tel:123"
                                            ><i class="ri-phone-fill"></i
                                            >518-564-3200</NuxtLink
                                        >
                                    </li>
                                    <li>
                                        <NuxtLink href="mailto:name@email.com"
                                            ><i class="ri-mail-fill"></i
                                            >mthemeus@example.com</NuxtLink
                                        >
                                    </li>
                                </ul>
                            </div>
                            <div class="optech-extra-mt">
                                <div class="optech-social-icon-box style-two">
                                    <ul>
                                        <li
                                            v-for="(item, i) in social1"
                                            :key="i"
                                        >
                                            <NuxtLink :href="item.url">
                                                <i :class="item.icon"></i>
                                            </NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <!-- team form start -->
                        <TeamForm />
                        <!-- team form end -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
