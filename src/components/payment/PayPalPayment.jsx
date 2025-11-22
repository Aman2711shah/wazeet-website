import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import './PayPalPayment.css';

// Replace with your actual Client ID from PayPal Developer Dashboard
const CLIENT_ID = "test";

export default function PayPalPayment({ amount, description, onSuccess, onError }) {
    const [paid, setPaid] = useState(false);
    const [error, setError] = useState(null);

    const handleApprove = (data, actions) => {
        return actions.order.capture().then((details) => {
            setPaid(true);
            if (onSuccess) {
                onSuccess(details);
            }
        });
    };

    const handleError = (err) => {
        setError(err);
        if (onError) {
            onError(err);
        }
    };

    if (paid) {
        return (
            <div className="payment-success">
                <div className="success-icon">✅</div>
                <h3>Payment Successful!</h3>
                <p>Thank you for your payment.</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="payment-error">
                <div className="error-icon">⚠️</div>
                <h3>Payment Failed</h3>
                <p>Something went wrong. Please try again.</p>
                <button onClick={() => setError(null)} className="retry-btn">Try Again</button>
            </div>
        );
    }

    return (
        <div className="paypal-container">
            <div className="payment-summary">
                <h4>Order Summary</h4>
                <p className="description">{description}</p>
                <p className="amount">Total: AED {amount}</p>
            </div>

            <PayPalScriptProvider options={{ "client-id": CLIENT_ID, currency: "AED" }}>
                <PayPalButtons
                    style={{ layout: "vertical", shape: "rect", borderRadius: 10 }}
                    createOrder={(data, actions) => {
                        return actions.order.create({
                            purchase_units: [
                                {
                                    description: description,
                                    amount: {
                                        value: amount,
                                    },
                                },
                            ],
                        });
                    }}
                    onApprove={handleApprove}
                    onError={handleError}
                />
            </PayPalScriptProvider>
            <p className="secure-note">🔒 Secure payment processed by PayPal</p>
        </div>
    );
}
