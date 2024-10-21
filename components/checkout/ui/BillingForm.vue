<template>
    <div class="optech-checkout-form">
        <h5>Billing Details</h5>
        <form action="/">
            <div class="optech-checkout-field">
                <label>First name</label>
                <input type="text" />
            </div>
            <div class="optech-checkout-field">
                <label>Last name</label>
                <input type="text" />
            </div>
            <div class="optech-checkout-field">
                <label>Company name (optional)</label>
                <input type="text" />
            </div>
            <div class="optech-checkout-field dropdown">
                <label>Country / Region</label>
                <select>
                    <option value="Option 1">Bangladesh</option>
                    <option value="Option 2">India</option>
                    <option value="Option 3">Pakistan</option>
                </select>
            </div>
            <div class="optech-checkout-field">
                <label>Street address</label>
                <input
                    class="house-number"
                    type="text"
                    placeholder="House number and street name"
                />
                <input
                    type="text"
                    placeholder="Apartment, suite, unit, etc. (optional)"
                />
            </div>
            <div class="optech-checkout-field">
                <label>Town / City</label>
                <input type="text" />
            </div>
            <div class="optech-checkout-field dropdown">
                <label>State</label>
                <select>
                    <option value="Option 1">Select an option...</option>
                    <option value="Option 2">India</option>
                    <option value="Option 3">Pakistan</option>
                </select>
            </div>
            <div class="optech-checkout-field">
                <label>ZIP Code</label>
                <input type="text" />
            </div>
            <div class="optech-checkout-field">
                <label>Phone</label>
                <input type="number" />
            </div>
            <div class="optech-checkout-field">
                <label>Email address</label>
                <input type="email" />
            </div>
            <div class="optech-checkout-field checkout-additional-information">
                <h5>Additional Information</h5>
                <label>Order notes (optional)</label>
                <textarea
                    name="textarea"
                    placeholder="Notes about your order, e.g. special notes for delivery."
                ></textarea>
            </div>
        </form>
    </div>
</template>
