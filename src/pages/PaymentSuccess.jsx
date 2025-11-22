import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './PaymentSuccess.css';

export default function PaymentSuccess() {
    const location = useLocation();
    const navigate = useNavigate();
    const { details } = location.state || {};

    useEffect(() => {
        if (!details) {
            navigate('/');
        }
    }, [details, navigate]);

    if (!details) return null;

    return (
        <div className="payment-success-page">
            <div className="container">
                <motion.div
                    className="success-card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="success-icon-large">🎉</div>
                    <h1>Payment Successful!</h1>
                    <p className="order-id">Transaction ID: {details.id}</p>

                    <div className="order-details">
                        <div className="detail-row">
                            <span>Amount Paid:</span>
                            <span className="amount">
                                {details.purchase_units[0].amount.currency_code} {details.purchase_units[0].amount.value}
                            </span>
                        </div>
                        <div className="detail-row">
                            <span>Status:</span>
                            <span className="status-badge">COMPLETED</span>
                        </div>
                        <div className="detail-row">
                            <span>Date:</span>
                            <span>{new Date(details.create_time).toLocaleDateString()}</span>
                        </div>
                    </div>

                    <p className="confirmation-msg">
                        A confirmation email has been sent to {details.payer.email_address}.
                        Our team will contact you shortly to schedule your consultation.
                    </p>

                    <div className="action-buttons">
                        <button onClick={() => navigate('/')} className="home-btn">
                            Return Home
                        </button>
                        <button onClick={() => navigate('/services')} className="services-btn">
                            Browse Services
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
