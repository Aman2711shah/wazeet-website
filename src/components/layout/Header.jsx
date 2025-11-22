import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/services', label: 'Services' },
        {
            path: '/ai-tools',
            label: 'AI Tools',
            dropdown: [
                { path: '/ai-tools#calculator', label: 'Tax Calculator' },
                { path: '/ai-tools#chat', label: 'Business Expert' },
            ]
        },
        { path: '/freezones', label: 'Freezones' },
        { path: '/investment', label: 'Investment' },
        { path: '/resources', label: 'Resources' },
        { path: '/about', label: 'About' },
        { path: '/contact', label: 'Contact' }
    ];

    return (
        <header className="header">
            <div className="header-container">
                <Link to="/" className="logo">
                    <span className="logo-text">WAZEET</span>
                    <span className="logo-subtitle">Business Solutions</span>
                </Link>

                <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
                    {navLinks.map((link) => (
                        <div key={link.path} className="nav-item">
                            <Link
                                to={link.path}
                                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                            {link.dropdown && (
                                <div className="dropdown">
                                    {link.dropdown.map((item) => (
                                        <Link
                                            key={item.path}
                                            to={item.path}
                                            className="dropdown-item"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                <button
                    className="menu-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
}
