import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroScene from '../components/3d/HeroScene';
import '../styles/pages/Home.css';

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <HeroScene />
                <div className="hero-overlay">
                    <motion.div
                        className="hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="hero-title">
                            Future of Business in UAE
                        </h1>
                        <p className="hero-subtitle">
                            Discover 400+ Services, AI Tools, and Investment Opportunities
                        </p>
                        <div className="hero-actions">
                            <button
                                className="cta-button primary"
                                onClick={() => window.location.href = '/services'}
                            >
                                Explore Services
                            </button>
                            <button
                                className="cta-button secondary"
                                onClick={() => window.location.href = '/contact'}
                            >
                                Get Started
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
