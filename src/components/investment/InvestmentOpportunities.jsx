import React from 'react';
import { motion } from 'framer-motion';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
    PieChart, Pie, Cell
} from 'recharts';
import { sectorOpportunities } from '../../data/investmentData';
import './InvestmentOpportunities.css';

const COLORS = ['#6366f1', '#8b5cf6', '#ec4899', '#f43f5e', '#10b981', '#3b82f6'];

export default function InvestmentOpportunities() {
    // Prepare data for charts
    const growthData = sectorOpportunities.map(sector => ({
        name: sector.name,
        growth: parseFloat(sector.growthRate),
        marketSize: parseFloat(sector.marketSize)
    })).sort((a, b) => b.growth - a.growth).slice(0, 6);



    return (
        <section className="investment-opportunities">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>High-Growth Investment Sectors</h2>
                    <p>Analyze market trends and opportunities across key industries</p>
                </motion.div>

                <div className="charts-grid">
                    {/* Growth Rate Chart */}
                    <motion.div
                        className="chart-card"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3>Projected Annual Growth Rates</h3>
                        <div className="chart-container">
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={growthData} layout="vertical">
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                                    <XAxis type="number" stroke="#9ca3af" unit="%" />
                                    <YAxis dataKey="name" type="category" stroke="#9ca3af" width={100} />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px' }}
                                        itemStyle={{ color: '#fff' }}
                                    />
                                    <Bar dataKey="growth" fill="#6366f1" radius={[0, 4, 4, 0]} name="Growth Rate" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </motion.div>

                    {/* Market Size Distribution */}
                    <motion.div
                        className="chart-card"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3>Market Size Distribution (Billions AED)</h3>
                        <div className="chart-container">
                            <ResponsiveContainer width="100%" height={300}>
                                <PieChart>
                                    <Pie
                                        data={growthData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={100}
                                        paddingAngle={5}
                                        dataKey="marketSize"
                                    >
                                        {growthData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px' }}
                                        itemStyle={{ color: '#fff' }}
                                    />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </motion.div>
                </div>

                <div className="sectors-grid">
                    {sectorOpportunities.map((sector, index) => (
                        <motion.div
                            key={sector.id}
                            className="sector-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="sector-icon">{sector.icon}</div>
                            <h3>{sector.name}</h3>
                            <div className="sector-stats">
                                <div className="stat">
                                    <span className="label">Growth</span>
                                    <span className="value positive">+{sector.growthRate}</span>
                                </div>
                                <div className="stat">
                                    <span className="label">Market Size</span>
                                    <span className="value">{sector.marketSize}</span>
                                </div>
                            </div>
                            <div className="opportunities-list">
                                <h4>Top Opportunities:</h4>
                                <ul>
                                    {sector.opportunities.slice(0, 2).map((opp, idx) => (
                                        <li key={idx}>
                                            <span className="bullet">•</span>
                                            {opp.title}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <button className="learn-more-btn">View Analysis →</button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
