import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/pages/Contact.css';

export default function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        alert('Thank you! We will contact you soon.');
    };

    return (
        <div className="contact-page">
            <section className="page-hero">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1>Contact Us</h1>
                        <p>Get in touch with our business setup experts</p>
                    </motion.div>
                </div>
            </section>

            <section className="contact-content">
                <div className="container">
                    <div className="contact-grid">
                        <motion.div
                            className="contact-info"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h2>Let's Talk</h2>
                            <p>We're here to help you start and grow your business in the UAE.</p>

                            <div className="contact-details">
                                <div className="detail-item">
                                    <span className="icon">📧</span>
                                    <div>
                                        <h4>Email</h4>
                                        <p>info@wazeet.com</p>
                                    </div>
                                </div>
                                <div className="detail-item">
                                    <span className="icon">📞</span>
                                    <div>
                                        <h4>Phone</h4>
                                        <p>+971 4 XXX XXXX</p>
                                    </div>
                                </div>
                                <div className="detail-item">
                                    <span className="icon">📍</span>
                                    <div>
                                        <h4>Office</h4>
                                        <p>Dubai, United Arab Emirates</p>
                                    </div>
                                </div>
                            </div>

                            <div className="social-links">
                                <h4>Follow Us</h4>
                                <div className="social-icons">
                                    <a href="#" aria-label="LinkedIn">🔗</a>
                                    <a href="#" aria-label="Twitter">🐦</a>
                                    <a href="#" aria-label="Instagram">📷</a>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="contact-form-wrapper"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder="+971 XX XXX XXXX"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="service">Interested In</label>
                                    <select id="service" name="service">
                                        <option value="">Select a service</option>
                                        <option value="business-setup">Business Setup</option>
                                        <option value="freezone">Freezone Registration</option>
                                        <option value="tax">Tax Services</option>
                                        <option value="consulting">Consulting</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        required
                                        placeholder="Tell us about your business needs..."
                                    ></textarea>
                                </div>
                                <button type="submit" className="submit-button">
                                    Send Message
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
