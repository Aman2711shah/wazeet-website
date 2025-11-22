import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FreezoneFinder.css';

const QUESTIONS = [
    {
        id: 'activity',
        question: "What is your primary business activity?",
        options: [
            { value: 'tech', label: 'Technology & Software', icon: 'computer' },
            { value: 'media', label: 'Media & Creative', icon: 'movie' },
            { value: 'trade', label: 'General Trading', icon: 'store' },
            { value: 'consulting', label: 'Consultancy', icon: 'school' },
            { value: 'logistics', label: 'Logistics & Transport', icon: 'local_shipping' }
        ]
    },
    {
        id: 'budget',
        question: "What is your estimated annual budget for licensing?",
        options: [
            { value: 'low', label: 'Under AED 15,000', icon: 'savings' },
            { value: 'medium', label: 'AED 15,000 - 30,000', icon: 'account_balance_wallet' },
            { value: 'high', label: 'Above AED 30,000', icon: 'diamond' }
        ]
    },
    {
        id: 'visas',
        question: "How many residence visas do you require?",
        options: [
            { value: '0', label: 'None (Remote)', icon: 'no_accounts' },
            { value: '1-2', label: '1 - 2 Visas', icon: 'person' },
            { value: '3-5', label: '3 - 5 Visas', icon: 'groups' },
            { value: '6+', label: '6+ Visas', icon: 'diversity_3' }
        ]
    }
];

const RECOMMENDATIONS = {
    tech: {
        low: { name: 'Sharjah Media City (Shams)', price: 'Starting from AED 11,500', features: ['0% Corporate Tax', '100% Ownership', 'Quick Setup'] },
        medium: { name: 'Dubai Silicon Oasis (DSO)', price: 'Starting from AED 20,000', features: ['Tech Hub', 'State-of-the-art Infrastructure', 'Strategic Location'] },
        high: { name: 'DIFC Innovation Hub', price: 'Starting from AED 35,000', features: ['Global Financial Center', 'Access to VC', 'Premium Address'] }
    },
    media: {
        low: { name: 'Fujairah Creative City', price: 'Starting from AED 13,000', features: ['No Physical Office Required', 'Media Focused', 'Fast Processing'] },
        medium: { name: 'Dubai Media City', price: 'Starting from AED 25,000', features: ['Global Media Hub', 'Networking Opportunities', 'Premium Facilities'] },
        high: { name: 'twofour54 Abu Dhabi', price: 'Starting from AED 32,000', features: ['Content Creation Hub', 'Government Support', 'World-class Studios'] }
    },
    trade: {
        low: { name: 'IFZA Dubai', price: 'Starting from AED 12,900', features: ['Cost Effective', 'Wide Range of Activities', 'Dubai Address'] },
        medium: { name: 'DMCC', price: 'Starting from AED 28,000', features: ['Global Trade Hub', 'Commodities Trading', 'JLT Location'] },
        high: { name: 'Jebel Ali Free Zone (JAFZA)', price: 'Starting from AED 40,000', features: ['Largest Free Zone', 'Sea Port Access', 'Logistics Hub'] }
    },
    consulting: {
        low: { name: 'Meydan Free Zone', price: 'Starting from AED 12,500', features: ['Premium Location', 'Cost Effective', 'Broad Activities'] },
        medium: { name: 'Dubai World Trade Centre', price: 'Starting from AED 22,000', features: ['Central Location', 'Exhibition Access', 'Prestige'] },
        high: { name: 'Abu Dhabi Global Market (ADGM)', price: 'Starting from AED 38,000', features: ['Common Law Jurisdiction', 'Financial Center', 'Global Recognition'] }
    },
    logistics: {
        low: { name: 'Ras Al Khaimah Economic Zone (RAKEZ)', price: 'Starting from AED 14,000', features: ['Industrial Hub', 'Cost Effective', 'Port Access'] },
        medium: { name: 'Dubai South', price: 'Starting from AED 25,000', features: ['Near Al Maktoum Airport', 'Logistics District', 'Expo City Proximity'] },
        high: { name: 'JAFZA', price: 'Starting from AED 40,000', features: ['Global Logistics Hub', 'Sea & Air Connectivity', 'Warehousing'] }
    }
};

export default function FreezoneFinder() {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState({});
    const [result, setResult] = useState(null);

    const handleOptionSelect = (value) => {
        const currentQuestion = QUESTIONS[step];
        const newAnswers = { ...answers, [currentQuestion.id]: value };
        setAnswers(newAnswers);

        if (step < QUESTIONS.length - 1) {
            setStep(step + 1);
        } else {
            calculateResult(newAnswers);
        }
    };

    const calculateResult = (finalAnswers) => {
        // Simple logic to pick a recommendation
        // Default to 'low' budget if not specified or complex mapping
        let budgetKey = finalAnswers.budget;
        // Fallback logic if exact match isn't perfect, but here keys match options

        const rec = RECOMMENDATIONS[finalAnswers.activity]?.[budgetKey] || RECOMMENDATIONS[finalAnswers.activity]?.['medium'];
        setResult(rec);
    };

    const resetQuiz = () => {
        setStep(0);
        setAnswers({});
        setResult(null);
    };

    return (
        <section id="freezones" className="freezone-section">
            <div className="freezone-container">
                <div className="freezone-header">
                    <h2>Find Your Perfect Freezone</h2>
                    <p>Answer 3 simple questions to discover the ideal jurisdiction for your business.</p>
                </div>

                <div className="wizard-card">
                    <AnimatePresence mode="wait">
                        {!result ? (
                            <motion.div
                                key="question"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="question-view"
                            >
                                <div className="progress-bar">
                                    <div
                                        className="progress-fill"
                                        style={{ width: `${((step + 1) / QUESTIONS.length) * 100}%` }}
                                    ></div>
                                </div>

                                <h3>{QUESTIONS[step].question}</h3>

                                <div className="options-grid">
                                    {QUESTIONS[step].options.map((option) => (
                                        <button
                                            key={option.value}
                                            className="option-card"
                                            onClick={() => handleOptionSelect(option.value)}
                                        >
                                            <span className="material-icons">{option.icon}</span>
                                            <span>{option.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="result"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="result-view"
                            >
                                <div className="result-badge">RECOMMENDED FOR YOU</div>
                                <h3>{result.name}</h3>
                                <div className="price-tag">{result.price}</div>

                                <div className="features-list">
                                    {result.features.map((feature, idx) => (
                                        <div key={idx} className="feature-item">
                                            <span className="material-icons">check_circle</span>
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                <div className="action-buttons">
                                    <button className="primary-btn">Get Started with {result.name}</button>
                                    <button className="secondary-btn" onClick={resetQuiz}>Start Over</button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
