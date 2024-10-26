<template>
    <div class="optech-comment-box">
        <h3>Leave a comments:</h3>
        <form action="/">
            <div class="optech-comment-box-form">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="optech-comment-form">
                            <input type="text" placeholder="Your Name*" />
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="optech-comment-form">
                            <input type="email" placeholder="Email Address*" />
                        </div>
                    </div>
                </div>
                <div class="optech-comment-form">
                    <textarea
                        name="textarea"
                        placeholder="Write us your comment"
                    ></textarea>
                </div>
                <div class="optech-check">
                    <input type="checkbox" id="css" />
                    <label for="css"
                        >Save my name, email, and website in this browser for
                        the next time I comment.</label
                    >
                </div>
                <button
                    id="optech-default-btn"
                    type="button"
                    data-text="Send Message"
                >
                    <span class="btn-wraper">Send Message</span>
                </button>
            </div>
        </form>
    </div>
</template>
