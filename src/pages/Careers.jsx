import React from 'react';
import { motion } from 'framer-motion';
import '../styles/pages/Careers.css';

export default function Careers() {
    return (
        <div className="careers-page">
            <section className="uae-hero">
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Join the Wazeet Team
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        We are always looking for talented individuals to help us build the future of business in the UAE.
                    </motion.p>
                </div>
            </section>

            <section className="why-uae">
                <div className="container">
                    <h2 className="section-title">Open Positions</h2>
                    <div className="benefits-grid">
                        <div className="benefit-item">
                            <h3>Business Development Manager</h3>
                            <p>Dubai, UAE</p>
                            <p>Full-time</p>
                        </div>
                        <div className="benefit-item">
                            <h3>Senior React Developer</h3>
                            <p>Remote / Dubai</p>
                            <p>Full-time</p>
                        </div>
                        <div className="benefit-item">
                            <h3>Content Marketing Specialist</h3>
                            <p>Dubai, UAE</p>
                            <p>Full-time</p>
                        </div>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <p>Don't see a role for you? Send your CV to careers@wazeet.com</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
