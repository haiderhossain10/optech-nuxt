<template>
    <div
        class="optech-main-form bg-light1 ml60"
        data-aos="fade-up"
        data-aos-duration="800"
    >
        <h3>Fill The Contact Form</h3>
        <p>Feel free to contact with us, we don’t spam your email</p>
        <form action="/">
            <div class="row">
                <div class="col-lg-6">
                    <div class="optech-main-field">
                        <input type="text" placeholder="Your name" />
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="optech-main-field">
                        <input type="number" placeholder="Phone number" />
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="optech-main-field">
                        <input type="email" placeholder="Email address" />
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="optech-main-field">
                        <textarea
                            name="textarea"
                            placeholder="Write your message"
                        ></textarea>
                    </div>
                </div>
                <div class="col-lg-12">
                    <button
                        id="optech-main-form-btn"
                        type="button"
                        data-text="Send Message"
                    >
                        <span class="btn-wraper">Send Message</span>
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>
