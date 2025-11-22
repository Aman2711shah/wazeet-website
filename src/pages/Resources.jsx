import React, { Suspense, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/pages/Resources.css';

const BlogSection = React.lazy(() => import('../components/features/BlogSection'));

export default function Resources() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const faqs = [
        {
            question: 'How long does it take to set up a business in UAE?',
            answer: 'Typically 3-7 working days depending on the freezone and business activity.'
        },
        {
            question: 'Do I need a local sponsor?',
            answer: 'In freezones, no local sponsor is required. Mainland companies may require 51% UAE national ownership unless in specific categories.'
        },
        {
            question: 'What is the corporate tax rate?',
            answer: '9% on profits exceeding AED 375,000. First AED 375,000 is tax-free.'
        }
    ];

    return (
        <div className="resources-page">
            <section className="page-hero">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1>Resources</h1>
                        <p>Knowledge base, guides, and insights to help you succeed</p>
                    </motion.div>
                </div>
            </section>

            <section className="blog-section-wrapper">
                <Suspense fallback={<div className="loading">Loading Blog...</div>}>
                    <BlogSection />
                </Suspense>
            </section>

            <section className="faq-section">
                <div className="container">
                    <h2>Frequently Asked Questions</h2>
                    <div className="faq-list">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                className="faq-item"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <h3>{faq.question}</h3>
                                <p>{faq.answer}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
