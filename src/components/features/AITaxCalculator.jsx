import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './AITaxCalculator.css';

export default function AITaxCalculator() {
    const [revenue, setRevenue] = useState('');
    const [profit, setProfit] = useState('');
    const [result, setResult] = useState(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);

    const calculateTax = () => {
        setIsAnalyzing(true);

        // Simulate AI analysis delay
        setTimeout(() => {
            const rev = parseFloat(revenue.replace(/,/g, '')) || 0;
            const prof = parseFloat(profit.replace(/,/g, '')) || 0;

            let taxAmount = 0;
            let effectiveRate = 0;
            let message = '';
            let recommendation = '';

            // UAE Corporate Tax Logic
            // 0% on first 375,000 AED
            // 9% on amount exceeding 375,000 AED

            if (rev < 1000000) {
                // Small Business Relief might apply
                message = "Small Business Relief Likely Available";
                recommendation = "Since your revenue is below AED 1M, you may be eligible for Small Business Relief, effectively paying 0% tax. However, you must register.";
                taxAmount = 0;
            } else {
                if (prof <= 375000) {
                    taxAmount = 0;
                    message = "No Tax Payable";
                    recommendation = "Your net profit is within the 0% tax bracket (up to AED 375,000). Registration is still mandatory.";
                } else {
                    const taxableAmount = prof - 375000;
                    taxAmount = taxableAmount * 0.09;
                    effectiveRate = (taxAmount / prof) * 100;
                    message = "Standard Corporate Tax Applies";
                    recommendation = `You are taxed 9% on profits exceeding AED 375,000. Your first AED 375,000 is tax-free.`;
                }
            }

            setResult({
                taxAmount,
                effectiveRate: effectiveRate.toFixed(2),
                message,
                recommendation,
                profit: prof,
                taxableIncome: Math.max(0, prof - 375000)
            });
            setIsAnalyzing(false);
        }, 1500);
    };

    return (
        <section id="calculator" className="calculator-section">
            <div className="calculator-container">
                <div className="calculator-header">
                    <span className="ai-badge">AI POWERED</span>
                    <h2>Corporate Tax Calculator</h2>
                    <p>Instant AI assessment of your UAE Corporate Tax liability</p>
                </div>

                <div className="calculator-grid">
                    <div className="input-panel">
                        <div className="input-group">
                            <label>Annual Revenue (AED)</label>
                            <input
                                type="number"
                                placeholder="e.g. 2,000,000"
                                value={revenue}
                                onChange={(e) => setRevenue(e.target.value)}
                            />
                            <small>Total turnover from all business activities</small>
                        </div>

                        <div className="input-group">
                            <label>Annual Net Profit (AED)</label>
                            <input
                                type="number"
                                placeholder="e.g. 500,000"
                                value={profit}
                                onChange={(e) => setProfit(e.target.value)}
                            />
                            <small>Revenue minus deductible expenses</small>
                        </div>

                        <button
                            className={`analyze-btn ${isAnalyzing ? 'analyzing' : ''}`}
                            onClick={calculateTax}
                            disabled={isAnalyzing || !revenue || !profit}
                        >
                            {isAnalyzing ? (
                                <>
                                    <span className="material-icons spin">sync</span>
                                    Analyzing Financials...
                                </>
                            ) : (
                                <>
                                    <span className="material-icons">analytics</span>
                                    Calculate Tax
                                </>
                            )}
                        </button>
                    </div>

                    <div className="result-panel">
                        {result ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="result-card"
                            >
                                <div className="result-header">
                                    <h3>Estimated Tax Liability</h3>
                                    <div className="tax-amount">
                                        AED {result.taxAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    </div>
                                </div>

                                <div className="breakdown">
                                    <div className="breakdown-item">
                                        <span>Net Profit</span>
                                        <span>AED {result.profit.toLocaleString()}</span>
                                    </div>
                                    <div className="breakdown-item highlight">
                                        <span>Tax-Free Allowance</span>
                                        <span>- AED 375,000</span>
                                    </div>
                                    <div className="breakdown-item">
                                        <span>Taxable Income</span>
                                        <span>AED {result.taxableIncome.toLocaleString()}</span>
                                    </div>
                                </div>

                                <div className="ai-insight">
                                    <div className="insight-icon">
                                        <span className="material-icons">psychology</span>
                                    </div>
                                    <div className="insight-content">
                                        <h4>AI Insight</h4>
                                        <p>{result.recommendation}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            <div className="placeholder-state">
                                <span className="material-icons large-icon">calculate</span>
                                <h3>Ready to Calculate</h3>
                                <p>Enter your financial details to get an instant tax assessment based on current UAE regulations.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
