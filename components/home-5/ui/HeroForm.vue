<template>
    <div class="optech-hero-form">
        <h4>Fill The Contact Form</h4>
        <p>Get Free Consultation For IT Solutions</p>
        <form action="/">
            <div class="optech-main-field">
                <input type="text" placeholder="Your name" required />
            </div>
            <div class="optech-main-field">
                <input type="email" placeholder="Email address" required />
            </div>
            <div class="optech-main-field">
                <textarea
                    name="textarea"
                    placeholder="Write your message"
                    required
                ></textarea>
            </div>
            <button
                id="optech-main-form-btn"
                type="submit"
                data-text="Send Message"
            >
                <span class="btn-wraper">Send Message</span>
            </button>
        </form>
    </div>
</template>
