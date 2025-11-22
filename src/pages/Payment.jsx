import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PayPalPayment from '../components/payment/PayPalPayment';
import './Payment.css';

export default function Payment() {
    const location = useLocation();
    const navigate = useNavigate();
    const { amount, description, plan } = location.state || {
        amount: 1500,
        description: 'Business Consultation',
        plan: 'Standard Consultation'
    };

    const handleSuccess = (details) => {
        console.log('Payment successful:', details);
        // Here you would typically save the order to your database
        setTimeout(() => {
            navigate('/payment-success', { state: { details } });
        }, 2000);
    };

    return (
        <div className="payment-page">
            <div className="container">
                <motion.div
                    className="payment-wrapper"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="payment-header">
                        <h1>Complete Your Payment</h1>
                        <p>Secure checkout for {plan}</p>
                    </div>

                    <div className="payment-content">
                        <PayPalPayment
                            amount={amount}
                            description={description}
                            onSuccess={handleSuccess}
                        />
                    </div>

                    <button onClick={() => navigate(-1)} className="back-btn">
                        ← Back
                    </button>
                </motion.div>
            </div>
        </div>
    );
}
