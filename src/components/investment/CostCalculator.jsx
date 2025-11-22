import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import './CostCalculator.css';

const COLORS = ['#6366f1', '#8b5cf6', '#ec4899', '#f43f5e', '#10b981'];

const COST_FACTORS = {
    licenseType: {
        commercial: 15000,
        professional: 12000,
        industrial: 25000,
        freelance: 7500
    },
    jurisdiction: {
        freezone: 0,
        mainland: 5000 // Additional approvals
    },
    visas: {
        costPerVisa: 3500,
        insurancePerVisa: 1500
    },
    office: {
        virtual: 5000,
        flexi: 12000,
        physical: 35000
    }
};

export default function CostCalculator() {
    const [config, setConfig] = useState({
        licenseType: 'commercial',
        jurisdiction: 'freezone',
        visaCount: 1,
        officeType: 'flexi'
    });

    const [breakdown, setBreakdown] = useState([]);
    const [totalCost, setTotalCost] = useState(0);

    useEffect(() => {
        calculateCost();
    }, [config]);

    const calculateCost = () => {
        const licenseCost = COST_FACTORS.licenseType[config.licenseType];
        const jurisdictionCost = COST_FACTORS.jurisdiction[config.jurisdiction];
        const visaCost = config.visaCount * (COST_FACTORS.visas.costPerVisa + COST_FACTORS.visas.insurancePerVisa);
        const officeCost = COST_FACTORS.office[config.officeType];

        const total = licenseCost + jurisdictionCost + visaCost + officeCost;
        setTotalCost(total);

        setBreakdown([
            { name: 'License Fee', value: licenseCost },
            { name: 'Jurisdiction Fees', value: jurisdictionCost },
            { name: 'Visa Costs', value: visaCost },
            { name: 'Office Space', value: officeCost }
        ].filter(item => item.value > 0));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setConfig(prev => ({
            ...prev,
            [name]: name === 'visaCount' ? parseInt(value) || 0 : value
        }));
    };

    return (
        <section className="cost-calculator">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>Business Setup Cost Estimator</h2>
                    <p>Get a quick estimate of your initial setup costs</p>
                </motion.div>

                <div className="calculator-grid">
                    <motion.div
                        className="calculator-form"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="form-group">
                            <label>License Type</label>
                            <select name="licenseType" value={config.licenseType} onChange={handleChange}>
                                <option value="commercial">Commercial License</option>
                                <option value="professional">Professional License</option>
                                <option value="industrial">Industrial License</option>
                                <option value="freelance">Freelance Permit</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Jurisdiction</label>
                            <select name="jurisdiction" value={config.jurisdiction} onChange={handleChange}>
                                <option value="freezone">Free Zone</option>
                                <option value="mainland">Mainland</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Number of Visas</label>
                            <input
                                type="number"
                                name="visaCount"
                                min="0"
                                max="50"
                                value={config.visaCount}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Office Type</label>
                            <select name="officeType" value={config.officeType} onChange={handleChange}>
                                <option value="virtual">Virtual Office</option>
                                <option value="flexi">Flexi-Desk</option>
                                <option value="physical">Physical Office (Small)</option>
                            </select>
                        </div>

                        <div className="total-display">
                            <span>Estimated Total:</span>
                            <span className="amount">AED {totalCost.toLocaleString()}</span>
                        </div>
                        <p className="disclaimer">*Estimates only. Actual costs may vary based on specific requirements.</p>
                    </motion.div>

                    <motion.div
                        className="calculator-chart"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3>Cost Breakdown</h3>
                        <div className="chart-container">
                            <ResponsiveContainer width="100%" height={300}>
                                <PieChart>
                                    <Pie
                                        data={breakdown}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={100}
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {breakdown.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip
                                        formatter={(value) => `AED ${value.toLocaleString()}`}
                                        contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px' }}
                                        itemStyle={{ color: '#fff' }}
                                    />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
