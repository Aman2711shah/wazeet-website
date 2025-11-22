import React, { Suspense, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { freezonesData, getTopRatedFreezones } from '../data/freezonesData';
import '../styles/pages/Freezones.css';

const FreezoneFinder = React.lazy(() => import('../components/features/FreezoneFinder'));

export default function Freezones() {
    const [selectedEmirate, setSelectedEmirate] = useState('All');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Get unique emirates for filter
    const emirates = ['All', ...new Set(freezonesData.map(fz => fz.emirate))];

    // Filter freezones
    const filteredFreezones = selectedEmirate === 'All'
        ? freezonesData
        : freezonesData.filter(fz => fz.emirate === selectedEmirate);

    return (
        <div className="freezones-page">
            <section className="page-hero">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1>UAE Free Zones Directory</h1>
                        <p>Browse all 52 UAE freezones and find the perfect match for your business</p>
                        <div className="stats-row">
                            <div className="stat">
                                <span className="stat-number">52</span>
                                <span className="stat-label">Total Freezones</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">7</span>
                                <span className="stat-label">Emirates</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">200K+</span>
                                <span className="stat-label">Companies</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="freezones-directory">
                <div className="container">
                    <div className="filter-bar">
                        <h3>Filter by Emirate:</h3>
                        <div className="filter-buttons">
                            {emirates.map(emirate => (
                                <button
                                    key={emirate}
                                    className={`filter-btn ${selectedEmirate === emirate ? 'active' : ''}`}
                                    onClick={() => setSelectedEmirate(emirate)}
                                >
                                    {emirate}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="freezones-count">
                        Showing {filteredFreezones.length} freezone{filteredFreezones.length !== 1 ? 's' : ''}
                    </div>

                    <div className="freezones-grid">
                        {filteredFreezones.map((fz, index) => (
                            <motion.div
                                key={fz.id}
                                className="freezone-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: (index % 12) * 0.05 }}
                            >
                                <div className="fz-header">
                                    <span className="fz-icon">{fz.icon}</span>
                                    <div className="fz-rating">⭐ {fz.rating}</div>
                                </div>
                                <h3>{fz.name}</h3>
                                <p className="fz-full-name">{fz.fullName}</p>
                                <p className="fz-location">📍 {fz.location}, {fz.emirate}</p>
                                <div className="fz-specialization">{fz.specialization}</div>
                                <p className="fz-description">{fz.description}</p>

                                <div className="fz-details">
                                    <div className="fz-detail">
                                        <strong>Companies:</strong> {fz.companies}
                                    </div>
                                    <div className="fz-detail">
                                        <strong>Est:</strong> {fz.established}
                                    </div>
                                    <div className="fz-detail">
                                        <strong>Cost Range:</strong> AED {fz.minCost.toLocaleString()} - {fz.maxCost.toLocaleString()}
                                    </div>
                                    <div className="fz-detail">
                                        <strong>Setup Time:</strong> {fz.setupTime}
                                    </div>
                                </div>

                                <div className="fz-activities">
                                    <strong>Popular Activities:</strong>
                                    <div className="tags">
                                        {fz.popularActivities.slice(0, 3).map(act => (
                                            <span key={act} className="tag">{act}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className="fz-actions">
                                    <button className="btn-primary-outline">Learn More</button>
                                    <a href={fz.website} target="_blank" rel="noopener noreferrer" className="btn-link">
                                        Website →
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
