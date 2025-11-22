import React, { Suspense, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/pages/AITools.css';

const AITaxCalculator = React.lazy(() => import('../components/features/AITaxCalculator'));
const AIBusinessChat = React.lazy(() => import('../components/features/AIBusinessChat'));

export default function AITools() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const tools = [
        {
            id: 'calculator',
            icon: '🧮',
            title: 'Tax Calculator',
            description: 'Calculate your UAE Corporate Tax obligations with AI-powered insights',
            component: AITaxCalculator
        },
        {
            id: 'chat',
            icon: '💬',
            title: 'Business Expert',
            description: 'Get instant answers from our AI business consultant',
            component: AIBusinessChat
        }
    ];

    return (
        <div className="ai-tools-page">
            <section className="page-hero">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1>AI-Powered Business Tools</h1>
                        <p>Smart tools powered by artificial intelligence to help you make informed decisions</p>
                    </motion.div>
                </div>
            </section>

            <section className="tools-grid-section">
                <div className="container">
                    <div className="tools-grid">
                        {tools.map((tool, index) => (
                            <motion.div
                                key={tool.id}
                                className="tool-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="tool-icon">{tool.icon}</div>
                                <h3>{tool.title}</h3>
                                <p>{tool.description}</p>
                                <button
                                    className="tool-button"
                                    onClick={() => document.getElementById(tool.id)?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Use Tool
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {tools.map((tool) => {
                const Component = tool.component;
                return (
                    <section key={tool.id} id={tool.id} className="tool-section">
                        <Suspense fallback={<div className="loading">Loading {tool.title}...</div>}>
                            <Component />
                        </Suspense>
                    </section>
                );
            })}
        </div>
    );
}
