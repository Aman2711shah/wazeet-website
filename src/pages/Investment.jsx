import React, { Suspense, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/pages/Investment.css';

import ErrorBoundary from '../components/common/ErrorBoundary';

const InvestmentMap = React.lazy(() => import('../components/features/InvestmentMap'));
const InvestmentOpportunities = React.lazy(() => import('../components/investment/InvestmentOpportunities'));
const CostCalculator = React.lazy(() => import('../components/investment/CostCalculator'));

export default function Investment() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="investment-page">
            <section className="page-hero">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1>Investment Guide</h1>
                        <p>Everything you need to know about investing and doing business in the UAE</p>
                    </motion.div>
                </div>
            </section>

            <section className="investment-content">
                <ErrorBoundary>
                    <Suspense fallback={<div className="loading">Loading Investment Map...</div>}>
                        <InvestmentMap />
                    </Suspense>
                </ErrorBoundary>
            </section>

            <ErrorBoundary>
                <Suspense fallback={<div className="loading">Loading Analysis...</div>}>
                    <InvestmentOpportunities />
                </Suspense>
            </ErrorBoundary>

            <ErrorBoundary>
                <Suspense fallback={<div className="loading">Loading Calculator...</div>}>
                    <CostCalculator />
                </Suspense>
            </ErrorBoundary>

            <section className="tax-info">
                <div className="container">
                    <div className="info-grid">
                        <motion.div
                            className="info-card"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3>🏢 Corporate Tax</h3>
                            <p className="rate">9%</p>
                            <p>On profits exceeding AED 375,000</p>
                        </motion.div>
                        <motion.div
                            className="info-card"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3>👤 Personal Income Tax</h3>
                            <p className="rate">0%</p>
                            <p>No personal income tax in the UAE</p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
