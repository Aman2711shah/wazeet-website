import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <div className="logo">WAZEET</div>
                    <p>Your AI-powered gateway to business success in the UAE.</p>
                </div>

                <div className="footer-links">
                    <div className="link-group">
                        <h4>Services</h4>
                        <a href="#services">Visa & Immigration</a>
                        <a href="#services">Business Setup</a>
                        <a href="#services">Banking</a>
                        <a href="#calculator">Tax Calculator</a>
                    </div>

                    <div className="link-group">
                        <h4>Company</h4>
                        <a href="#about">About Us</a>
                        <a href="#contact">Contact</a>
                        <a href="#careers">Careers</a>
                        <a href="/privacy-policy">Privacy Policy</a>
                    </div>

                    <div className="link-group">
                        <h4>Connect</h4>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Wazeet. All rights reserved. | <a href="https://www.wazeet.com" target="_blank" rel="noopener noreferrer">www.wazeet.com</a></p>
            </div>
        </footer>
    );
}
