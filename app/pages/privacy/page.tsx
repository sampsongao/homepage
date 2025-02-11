'use client';

import { Fragment } from "react";

export default function Privacy() {
    return (
        <Fragment>
            <h1>Privacy Policy</h1>
            <p>Last updated: 2/10/2025</p>

            <p>
                {`
                1. Introduction
                Welcome to [Your Company Name] ("we", "our", or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [Your Website URL] or use our services.

                2. Information We Collect
                We collect personal information that you provide to us, such as name, email address, and other contact details when you register for an account, subscribe to our newsletter, or contact us for support.

                3. How We Use Your Information
                We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to comply with legal obligations.

                4. Data Security
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage.

                5. Your Rights
                You have the right to access, correct, update, or request deletion of your personal information. You can exercise these rights by contacting us using the information provided at the end of this policy.

                6. Changes to This Policy
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.

                7. Contact Us
                If you have any questions about this Privacy Policy, please contact us at [Your Contact Email].
                `}
            </p>
        </Fragment>
    );
}