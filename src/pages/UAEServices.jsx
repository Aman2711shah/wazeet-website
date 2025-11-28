import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/pages/UAEServices.css';

export default function UAEServices() {
    return (
        <div className="uae-services-page">
            {/* Hero Section */}
            <section className="uae-hero">
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Your AI-Powered Partner for Doing Business in the UAE
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Comprehensive support for visa & immigration, business setup, banking, and taxation in the United Arab Emirates.
                    </motion.p>
                    <motion.div
                        className="hero-buttons"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <Link to="/contact" className="btn btn-primary">Book a Free Consultation</Link>
                        <a href="#core-services" className="btn btn-secondary">Explore UAE Services</a>
                    </motion.div>
                </div>
            </section>

            {/* Why the UAE? */}
            <section className="why-uae">
                <div className="container">
                    <h2 className="section-title">Why the UAE?</h2>
                    <div className="benefits-grid">
                        <div className="benefit-item">
                            <span className="icon">🌍</span>
                            <h3>Strategic Location</h3>
                            <p>Global gateway connecting East and West.</p>
                        </div>
                        <div className="benefit-item">
                            <span className="icon">💰</span>
                            <h3>Tax Advantages</h3>
                            <p>Competitive corporate tax and 0% personal income tax.</p>
                        </div>
                        <div className="benefit-item">
                            <span className="icon">🏙️</span>
                            <h3>World-Class Infrastructure</h3>
                            <p>State-of-the-art facilities and logistics.</p>
                        </div>
                        <div className="benefit-item">
                            <span className="icon">⚖️</span>
                            <h3>Investor-Friendly</h3>
                            <p>100% foreign ownership in many sectors.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core UAE Services */}
            <section id="core-services" className="core-services">
                <div className="container">
                    <h2 className="section-title">Our Core UAE Services</h2>
                    <div className="services-grid">
                        {/* Visa & Immigration */}
                        <div className="service-card">
                            <div className="card-icon">✈️</div>
                            <h3>Visa & Immigration</h3>
                            <ul>
                                <li>Tourist, employment, investor & partner visas</li>
                                <li>Residence visas & Emirates ID assistance</li>
                                <li>Visa renewals, status change & dependants</li>
                            </ul>
                        </div>

                        {/* Business Setup */}
                        <div className="service-card">
                            <div className="card-icon">🏢</div>
                            <h3>Business Setup</h3>
                            <ul>
                                <li>Company formation in major Freezones (Dubai, Sharjah, etc.)</li>
                                <li>Mainland LLC & professional licences</li>
                                <li>Trade name, MOA drafting & licensing</li>
                            </ul>
                        </div>

                        {/* Banking */}
                        <div className="service-card">
                            <div className="card-icon">🏦</div>
                            <h3>Banking & Financial</h3>
                            <ul>
                                <li>Corporate bank account opening support</li>
                                <li>Compliance, KYC & documentation guidance</li>
                                <li>Banking options for startups & SMEs</li>
                            </ul>
                        </div>

                        {/* Tax & Compliance */}
                        <div className="service-card">
                            <div className="card-icon">📊</div>
                            <h3>Tax & Compliance</h3>
                            <ul>
                                <li>UAE corporate tax registration & advisory</li>
                                <li>VAT registration & periodic filing</li>
                                <li>Bookkeeping, accounting & compliance</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* How Wazeet Works */}
            <section className="how-it-works">
                <div className="container">
                    <h2 className="section-title">How Wazeet Works</h2>
                    <div className="process-steps">
                        <div className="step-card">
                            <div className="step-number">1</div>
                            <h3>Discovery Call</h3>
                            <p>We understand your goals, budget, and timeline.</p>
                        </div>
                        <div className="step-card">
                            <div className="step-number">2</div>
                            <h3>Tailored Plan</h3>
                            <p>We recommend the best freezone/mainland option and visa plan.</p>
                        </div>
                        <div className="step-card">
                            <div className="step-number">3</div>
                            <h3>Documentation</h3>
                            <p>We handle government submissions, approvals, and licensing.</p>
                        </div>
                        <div className="step-card">
                            <div className="step-number">4</div>
                            <h3>Launch & Support</h3>
                            <p>Banking, tax setup, and ongoing business growth guidance.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Wazeet */}
            <section className="why-choose">
                <div className="container">
                    <h2 className="section-title">Why Choose Wazeet</h2>
                    <div className="reasons-grid">
                        <div className="reason-card">
                            <h3>AI-Driven Recommendations</h3>
                            <p>Data-backed advice for the best freezone and licence choices.</p>
                        </div>
                        <div className="reason-card">
                            <h3>End-to-End Support</h3>
                            <p>From initial setup and visas to banking and tax compliance.</p>
                        </div>
                        <div className="reason-card">
                            <h3>Transparent Pricing</h3>
                            <p>Clear costs and timelines with no hidden fees.</p>
                        </div>
                        <div className="reason-card">
                            <h3>Expertise</h3>
                            <p>Trusted by freelancers, startups, SMEs, and investors.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="use-cases">
                <div className="container">
                    <h2 className="section-title">Who We Help</h2>
                    <div className="cases-grid">
                        <div className="case-card">
                            <h3>Freelancers & Consultants</h3>
                            <p>Looking for low-cost UAE licences and visa independence.</p>
                        </div>
                        <div className="case-card">
                            <h3>Startups & SMEs</h3>
                            <p>Expanding into the Middle East market with a solid foundation.</p>
                        </div>
                        <div className="case-card">
                            <h3>Investors</h3>
                            <p>Seeking holding companies, SPVs, or asset protection structures.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="faq-section">
                <div className="container">
                    <h2 className="section-title">Frequently Asked Questions</h2>
                    <div className="faq-grid">
                        <div className="faq-item">
                            <h4>How long does it take to set up a company?</h4>
                            <p>Timelines vary by jurisdiction, but typically range from 3-10 working days for freezones.</p>
                        </div>
                        <div className="faq-item">
                            <h4>Freezone vs. Mainland?</h4>
                            <p>Freezones offer 100% ownership and tax benefits but trade within the zone/internationally. Mainland allows trading directly within the local UAE market.</p>
                        </div>
                        <div className="faq-item">
                            <h4>Can a foreigner own 100%?</h4>
                            <p>Yes, 100% foreign ownership is now permitted for most commercial and industrial activities on the Mainland, and always in Freezones.</p>
                        </div>
                        <div className="faq-item">
                            <h4>Bank account requirements?</h4>
                            <p>Typically requires passport, visa, Emirates ID, proof of address, and business profile/plan.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="final-cta">
                <div className="container">
                    <h2>Ready to Start Your UAE Journey?</h2>
                    <p>Book a consultation or get a custom plan today.</p>
                    <div className="cta-buttons">
                        <Link to="/contact" className="btn btn-primary">Talk to an Expert</Link>
                        <Link to="/contact" className="btn btn-secondary">Get a Custom UAE Plan</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
