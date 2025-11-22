import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './InvestmentMap.css';

const INVESTMENT_ZONES = [
    {
        id: 'dubai',
        name: 'Dubai',
        type: 'Global Hub',
        taxRate: '9%',
        features: ['DIFC', 'DMCC', 'JAFZA', 'Dubai South'],
        description: 'The commercial capital of the Middle East, offering world-class infrastructure and global connectivity.',
        coordinates: { top: '35%', left: '65%' }
    },
    {
        id: 'abudhabi',
        name: 'Abu Dhabi',
        type: 'Capital & Energy',
        taxRate: '9%',
        features: ['ADGM', 'Masdar City', 'KIZAD'],
        description: 'The UAE capital, focusing on energy, fintech, and sustainable development.',
        coordinates: { top: '45%', left: '55%' }
    },
    {
        id: 'sharjah',
        name: 'Sharjah',
        type: 'Industrial & Culture',
        taxRate: '9%',
        features: ['Shams', 'SPC', 'Hamriyah'],
        description: 'A hub for industry, culture, and cost-effective business setups.',
        coordinates: { top: '30%', left: '70%' }
    },
    {
        id: 'northern',
        name: 'Northern Emirates',
        type: 'Emerging Markets',
        taxRate: '9%',
        features: ['RAKEZ', 'Fujairah Creative City', 'Ajman Free Zone'],
        description: 'Rapidly developing regions offering competitive costs and strategic ports.',
        coordinates: { top: '20%', left: '75%' }
    }
];

export default function InvestmentMap() {
    const [activeZone, setActiveZone] = useState(INVESTMENT_ZONES[0]);

    return (
        <section id="investment-map" className="investment-section">
            <div className="investment-container">
                <div className="section-header">
                    <h2>Investment Landscape</h2>
                    <p>Explore UAE's strategic business zones and corporate tax framework.</p>
                </div>

                <div className="map-interface">
                    <div className="map-visual">
                        {/* Abstract Map Representation */}
                        <div className="uae-map-placeholder">
                            <svg viewBox="0 0 400 300" className="map-svg">
                                {/* Simplified UAE Map Path - Placeholder */}
                                <path
                                    d="M50,250 Q100,200 150,220 T250,180 T350,100"
                                    fill="none"
                                    stroke="rgba(255,255,255,0.1)"
                                    strokeWidth="2"
                                />
                                {INVESTMENT_ZONES.map((zone) => (
                                    <g
                                        key={zone.id}
                                        className={`map-marker ${activeZone.id === zone.id ? 'active' : ''}`}
                                        style={{ transform: `translate(${zone.coordinates.left}, ${zone.coordinates.top})` }}
                                        onClick={() => setActiveZone(zone)}
                                    >
                                        <circle r="8" className="pulse" />
                                        <circle r="4" className="dot" />
                                        <text y="-15" className="marker-label">{zone.name}</text>
                                    </g>
                                ))}
                            </svg>
                            <div className="map-overlay-gradient"></div>
                        </div>
                    </div>

                    <div className="zone-details">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeZone.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="detail-card"
                            >
                                <div className="zone-header">
                                    <h3>{activeZone.name}</h3>
                                    <span className="zone-type">{activeZone.type}</span>
                                </div>

                                <p className="zone-desc">{activeZone.description}</p>

                                <div className="tax-info">
                                    <div className="tax-metric">
                                        <span className="label">Corporate Tax</span>
                                        <span className="value">{activeZone.taxRate}</span>
                                        <span className="sub">Above AED 375k Profit</span>
                                    </div>
                                    <div className="tax-metric">
                                        <span className="label">Personal Tax</span>
                                        <span className="value">0%</span>
                                        <span className="sub">On Income/Salary</span>
                                    </div>
                                </div>

                                <div className="key-zones">
                                    <h4>Key Free Zones</h4>
                                    <div className="tags">
                                        {activeZone.features.map(f => (
                                            <span key={f} className="tag">{f}</span>
                                        ))}
                                    </div>
                                </div>

                                <button className="explore-btn">
                                    Explore Opportunities in {activeZone.name}
                                </button>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
