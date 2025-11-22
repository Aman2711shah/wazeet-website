import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/pages/PrivacyPolicy.css';

export default function PrivacyPolicy() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="privacy-page">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="privacy-content"
                >
                    <h1>WAZEET – Privacy Policy & Terms of Service</h1>
                    <p className="last-updated">Last Updated: January 2025</p>

                    <div className="divider"></div>

                    <section>
                        <h2>📌 PRIVACY POLICY</h2>
                        <p>Welcome to Wazeet (“we”, “our”, “us”). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, store, and safeguard your information when you use our website, mobile application, and services.</p>
                        <p>By using Wazeet, you agree to the practices described in this Privacy Policy.</p>
                    </section>

                    <div className="divider"></div>

                    <section>
                        <h3>1. Information We Collect</h3>
                        <p>We may collect the following types of information:</p>

                        <h4>1.1 Personal Information</h4>
                        <ul>
                            <li>Full name</li>
                            <li>Email address</li>
                            <li>Mobile number</li>
                            <li>Passport or Emirates ID details (if required for UAE business setup)</li>
                            <li>Company details and documents</li>
                            <li>Payment details (processed securely by third-party providers)</li>
                        </ul>

                        <h4>1.2 Automatically Collected Information</h4>
                        <ul>
                            <li>Device information</li>
                            <li>IP address</li>
                            <li>Browser type</li>
                            <li>App usage statistics</li>
                            <li>Cookies and tracking data</li>
                        </ul>

                        <h4>1.3 Uploaded Documents</h4>
                        <p>For business setup, visa, compliance, or trade services, you may upload:</p>
                        <ul>
                            <li>Passport copies</li>
                            <li>Visa documents</li>
                            <li>Business licenses</li>
                            <li>Company formation documents</li>
                        </ul>
                        <p>These files are encrypted and stored securely.</p>

                        <h4>1.4 Third-Party Data</h4>
                        <p>We may receive information from:</p>
                        <ul>
                            <li>Supabase authentication</li>
                            <li>Payment gateways</li>
                            <li>Government services APIs</li>
                            <li>Analytics partners (Google Analytics, App Store analytics)</li>
                        </ul>
                    </section>

                    <section>
                        <h3>2. How We Use Your Information</h3>
                        <p>We use your information to:</p>
                        <ul>
                            <li>Provide Wazeet services (business setup, visa services, cost calculator, compliance dashboards, etc.)</li>
                            <li>Verify identity and documents</li>
                            <li>Improve app performance and user experience</li>
                            <li>Send updates, notifications, and service alerts</li>
                            <li>Comply with UAE regulations</li>
                            <li>Prevent fraud and unauthorized access</li>
                        </ul>
                    </section>

                    <section>
                        <h3>3. Sharing of Information</h3>
                        <p>We do not sell your data.</p>
                        <p>We may share information only with:</p>
                        <ul>
                            <li>UAE government authorities (for business setup & visa processing)</li>
                            <li>Authorized free zone partners</li>
                            <li>Payment processors</li>
                            <li>Cloud storage and hosting partners (Supabase, AWS, etc.)</li>
                            <li>Legal compliance bodies when required</li>
                        </ul>
                        <p>All partners follow strict confidentiality protocols.</p>
                    </section>

                    <section>
                        <h3>4. Data Retention</h3>
                        <p>We retain your data only as long as needed for:</p>
                        <ul>
                            <li>Legal and regulatory requirements</li>
                            <li>Service delivery</li>
                            <li>Internal reporting</li>
                        </ul>
                        <p>You may request deletion of your data anytime.</p>
                    </section>

                    <section>
                        <h3>5. Data Security</h3>
                        <p>We implement:</p>
                        <ul>
                            <li>End-to-end encryption</li>
                            <li>Secure cloud storage (Supabase/AWS)</li>
                            <li>MFA authentication layers</li>
                            <li>Encrypted document uploads</li>
                            <li>Regular security audits</li>
                        </ul>
                        <p>Despite safeguards, no system is 100% secure. You use Wazeet at your own risk.</p>
                    </section>

                    <section>
                        <h3>6. Your Rights</h3>
                        <p>Depending on your location, you may have the right to:</p>
                        <ul>
                            <li>Access your data</li>
                            <li>Request correction</li>
                            <li>Request deletion</li>
                            <li>Withdraw consent</li>
                            <li>Port your data</li>
                        </ul>
                        <p>Contact: <a href="mailto:support@wazeet.com">support@wazeet.com</a></p>
                    </section>

                    <section>
                        <h3>7. Children’s Privacy</h3>
                        <p>Wazeet is not intended for users under 18 years old.</p>
                    </section>

                    <section>
                        <h3>8. Third-Party Links</h3>
                        <p>Our services may contain links to external websites. We are not responsible for their content or privacy practices.</p>
                    </section>

                    <section>
                        <h3>9. Cookies & Tracking</h3>
                        <p>We use cookies to:</p>
                        <ul>
                            <li>Improve experience</li>
                            <li>Analyze usage</li>
                            <li>Remember user preferences</li>
                        </ul>
                        <p>You may disable cookies through your browser settings.</p>
                    </section>

                    <section>
                        <h3>10. Updates to This Policy</h3>
                        <p>We may update this Privacy Policy periodically. Changes will be reflected on this page.</p>
                    </section>

                    <div className="divider"></div>

                    <section>
                        <h2>📌 TERMS OF SERVICE</h2>
                        <p>By accessing or using Wazeet, you agree to the following Terms of Service (“Terms”). Please read them carefully.</p>
                    </section>

                    <div className="divider"></div>

                    <section>
                        <h3>1. Acceptance of Terms</h3>
                        <p>By downloading, installing, or using Wazeet, you agree to be bound by these Terms and our Privacy Policy.</p>
                    </section>

                    <section>
                        <h3>2. Description of Services</h3>
                        <p>Wazeet provides:</p>
                        <ul>
                            <li>Business setup guidance</li>
                            <li>UAE free zone cost calculator</li>
                            <li>Visa & compliance services</li>
                            <li>Business documentation tools</li>
                            <li>AI-powered advisory</li>
                            <li>Company formation coordination</li>
                        </ul>
                        <p>Wazeet is a technology platform and works through authorized UAE free zones and partners.</p>
                    </section>

                    <section>
                        <h3>3. User Responsibilities</h3>
                        <p>You agree to:</p>
                        <ul>
                            <li>Provide accurate personal information</li>
                            <li>Maintain confidentiality of your login credentials</li>
                            <li>Not misuse, hack, reverse-engineer, or exploit the platform</li>
                            <li>Comply with UAE laws</li>
                        </ul>
                        <p>Any fraudulent or illegal use may result in account suspension.</p>
                    </section>

                    <section>
                        <h3>4. Payments & Refunds</h3>
                        <ul>
                            <li>All payments are processed securely by third-party payment gateways.</li>
                            <li>Fees may vary based on selected packages.</li>
                            <li>Government charges are non-refundable.</li>
                            <li>Service fees may be refunded only if no processing work has started.</li>
                        </ul>
                    </section>

                    <section>
                        <h3>5. Intellectual Property</h3>
                        <p>All content, branding, designs, trademarks, and software of Wazeet are the exclusive property of Wazeet Technologies FZCO.</p>
                        <p>You may not:</p>
                        <ul>
                            <li>Copy</li>
                            <li>Modify</li>
                            <li>Resell</li>
                            <li>Distribute</li>
                            <li>Reproduce any part of the platform without permission.</li>
                        </ul>
                    </section>

                    <section>
                        <h3>6. Limitation of Liability</h3>
                        <p>Wazeet is not liable for:</p>
                        <ul>
                            <li>Delays caused by government authorities</li>
                            <li>Errors caused by incorrect information submitted by you</li>
                            <li>Losses arising from misuse of the platform</li>
                            <li>Network outages or third-party service interruptions</li>
                        </ul>
                        <p>Platform is provided on an “as is” and “as available” basis.</p>
                    </section>

                    <section>
                        <h3>7. Account Termination</h3>
                        <p>We may suspend or terminate your account if:</p>
                        <ul>
                            <li>You violate these Terms</li>
                            <li>Attempt fraudulent activities</li>
                            <li>Abuse or misuse the platform</li>
                        </ul>
                        <p>You may request account deletion anytime.</p>
                    </section>

                    <section>
                        <h3>8. Governing Law</h3>
                        <p>These Terms are governed by the laws of the United Arab Emirates.</p>
                        <p>Disputes will be handled under UAE jurisdiction.</p>
                    </section>

                    <section>
                        <h3>9. Contact Information</h3>
                        <p>For queries, contact:</p>
                        <p>📧 Email: <a href="mailto:support@wazeet.com">support@wazeet.com</a></p>
                        <p>🌐 Website: <a href="https://www.wazeet.com">https://www.wazeet.com</a></p>
                    </section>

                    <section>
                        <h3>10. Updates to These Terms</h3>
                        <p>We may modify these Terms at any time. Updated versions will be posted on the website.</p>
                    </section>
                </motion.div>
            </div>
        </div>
    );
}
