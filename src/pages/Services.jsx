import React, { Suspense, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/pages/Services.css';

const ServicesSection = React.lazy(() => import('../components/features/ServicesSection'));

export default function Services() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="services-page">
            <section className="page-hero">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1>Our Services</h1>
                        <p>Comprehensive business setup and compliance services across the UAE</p>
                    </motion.div>
                </div>
            </section>

            <section className="services-content">
                <Suspense fallback={<div className="loading">Loading Services...</div>}>
                    <ServicesSection />
                </Suspense>
            </section>
        </div>
    );
}
