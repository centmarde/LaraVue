<template>
    <div>
        <TopNav />
        <main id="indexbody2">
            <!-- parallax -->
            <section>
                <img :src="lastImg" id="last" />
                <img :src="starsImg" id="stars" />
                <img :src="moonImg" id="moon" />
                <img :src="midLayerImg" id="mountains_behind" />
                <div id="texth2" class="text-light">Untitled App</div>
                <img :src="frontLayerImg" id="mountains_front" />
                <img :src="firstLayerImg" id="firstLayer" />
            </section>
            <!-- parallax end -->
            <div id="sec">
                <!-- parallax end -->
                <br />
                <br />
                <br />
                <br />
                <div>

                </div>
                <br />
                <br />

                <div id="margin"></div>
                <br />
                <br />
                <br />
                <!-- modal shower -->

                <div id="modal_show" class="text-center">
                    <!-- copy this modal trigger to your other HTML -->
                    <div class="hiddenAnimate">
                        <div id="button_intro" class="d-grid gap-2 mx-1 col-lg-3 col-sm-12 col-md-5 mx-auto"
                            data-bs-toggle="modal" data-bs-target="#form_modal" href="#">
                            <button class="btn btn-light shadow " type="submit">Sign up</button>
                        </div>
                    </div>
                </div>
                <div></div>



                <!-- Modal Btn and Form -->
                <!-- Modal -->
                <div class="modal fade" id="form_modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                    aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div id="b" class="modal-header">
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>

                            <!-- Item Form -->
                            <form id="form_register" class="text-dark">
                                <!-- Modal Body -->
                                <div class="modal-body">
                                    <!-- Item Name Field -->
                                    <div class="row mb-3">
                                        <div class="col-sm-12">
                                            <div class="d-flex justify-content-center">

                                                <dotlottie-player
                                                    src="https://lottie.host/52fcc8ef-4eb9-4b1a-a0b3-23a64fc5fd1e/3BM3K9Eaek.json"
                                                    background="transparent" speed="0.8"
                                                    style="width: 300px; height: 300px;" loop
                                                    autoplay></dotlottie-player>

                                            </div>
                                            <div>
                                                <h1 class="text-center">Acceptance of Terms:</h1>
                                                <span>

                                                    <br />
                                                    By using the Snooze Tutor app, you agree to these Terms
                                                    and Conditions. <br />
                                                    <br /><b>Description of Service:</b> Snooze Tutor
                                                    provides tools and resources for improving sleep quality
                                                    and habits. <br /><br />

                                                    <b>User Accounts:</b> You may need an account to access
                                                    certain features. Keep your account information secure
                                                    and updated. <br /><br />
                                                    <b>Intellectual Property:</b> All content in the app is
                                                    protected by copyright. You may not use it without
                                                    permission. <br /><br />
                                                    <b>Privacy Policy:</b> Your privacy is important to us.
                                                    Our Privacy Policy governs how we collect and use your
                                                    data. <br /><br />
                                                    <b>Prohibited Conduct:</b> Don't use the app for
                                                    unlawful purposes or to disrupt others' use of the
                                                    service. <br /><br />

                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Modal Footer -->
                                <div class="modal-footer">
                                    <div class="d-grid gap-2">
                                        <button type="submit" class="btn"
                                            style="background-color: #1c0522; color: aliceblue;">I agree</button>
                                    </div>
                                </div>
                            </form>
                            <!-- End Slides Form -->
                        </div>
                    </div>
                </div>
                <!-- End Modal -->

                <div class="hiddenAnimate">
                    <div class="row">
                        <div id="p_intro" class="col mt-3 mb-5 d-flex justify-content-center">
                            <p>Already have an account?</p>
                            <router-link to="/login" class="btn btn-outline-light ms-4"
                                type="button">
                                Sign in
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import lastImg from '/public/assets/imgs/last.png';
import starsImg from '/public/assets/imgs/stars.png';
import moonImg from '/public/assets/imgs/moon.png';
import midLayerImg from '/public/assets/imgs/mid_layer.png';
import frontLayerImg from '/public/assets/imgs/front_layer.png';
import firstLayerImg from '/public/assets/imgs/first_layer.png';

onMounted(() => {
    const last = document.getElementById('last');
    const stars = document.getElementById('stars');
    const moon = document.getElementById('moon');
    const mountains_behind = document.getElementById('mountains_behind');
    const text = document.getElementById('texth2');
    const mountains_front = document.getElementById('mountains_front');
    const firstLayer = document.getElementById('firstLayer');

    window.addEventListener('scroll', function () {
        const value = window.scrollY;
        last.style.top = value * 0.4 + 'px';
        stars.style.left = value * 0.25 + 'px';
        moon.style.top = value * 2.25 + 'px';
        mountains_behind.style.top = value * 0.25 + 'px';
        mountains_front.style.top = value * 0 + 'px';
        firstLayer.style.left = value * 0.1 + 'px';
        text.style.marginRight = value * 4 + 'px';
        text.style.marginTop = value * 0.5 + 'px';
    });
});
</script>

<style>

</style>