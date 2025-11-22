import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/pages/About.css';

export default function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const stats = [
        { icon: '🏆', value: '10+', label: 'Years Experience' },
        { icon: '🌍', value: '50+', label: 'Countries Served' },
        { icon: '✨', value: '10K+', label: 'Happy Clients' },
        { icon: '⚡', value: '98%', label: 'Success Rate' }
    ];

    const team = [
        {
            name: 'Business Setup Experts',
            role: 'Freezone & Mainland Specialists',
            description: 'Expert guidance for company formation across UAE'
        },
        {
            name: 'Tax Consultants',
            role: 'VAT & Corporate Tax',
            description: 'Licensed tax advisors ensuring compliance'
        },
        {
            name: 'Legal Advisors',
            role: 'Documentation & Licensing',
            description: 'Complete legal support for business setup'
        }
    ];

    const values = [
        {
            icon: '🎯',
            title: 'Client-First Approach',
            description: 'Your success is our priority. We tailor solutions to your unique needs.'
        },
        {
            icon: '💡',
            title: 'Innovation',
            description: 'Leveraging AI and technology to simplify complex business processes.'
        },
        {
            icon: '🤝',
            title: 'Trust & Transparency',
            description: 'Clear pricing, honest advice, and reliable service every step of the way.'
        },
        {
            icon: '⚡',
            title: 'Speed & Efficiency',
            description: 'Fast turnaround times without compromising quality or compliance.'
        }
    ];

    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="page-hero">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1>About Wazeet</h1>
                        <p>Your trusted partner in UAE business setup and growth</p>
                    </motion.div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="mission-section">
                <div className="container">
                    <motion.div
                        className="mission-content"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Our Mission</h2>
                        <p className="mission-text">
                            To empower entrepreneurs and businesses by providing comprehensive,
                            AI-powered solutions for company formation, compliance, and growth in the UAE.
                            We combine cutting-edge technology with expert human guidance to make business
                            setup simple, fast, and affordable.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="container">
                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                className="stat-card"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="stat-icon">{stat.icon}</div>
                                <div className="stat-value">{stat.value}</div>
                                <div className="stat-label">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="values-section">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Our Values</h2>
                        <p>The principles that guide everything we do</p>
                    </motion.div>

                    <div className="values-grid">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                className="value-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                            >
                                <div className="value-icon">{value.icon}</div>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="team-section">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Our Expert Team</h2>
                        <p>Experienced professionals dedicated to your success</p>
                    </motion.div>

                    <div className="team-grid">
                        {team.map((member, index) => (
                            <motion.div
                                key={member.name}
                                className="team-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="team-avatar">👥</div>
                                <h3>{member.name}</h3>
                                <p className="team-role">{member.role}</p>
                                <p className="team-description">{member.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <motion.div
                        className="cta-content"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2>Ready to Start Your Business?</h2>
                        <p>Let's make your UAE business dreams a reality</p>
                        <button
                            className="cta-button"
                            onClick={() => window.location.href = '/contact'}
                        >
                            Get Started Today
                        </button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
