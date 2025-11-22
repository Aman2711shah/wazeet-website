import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { servicesData } from '../../data/services';
import { getIcon } from '../../utils/iconMap';
import { motion, AnimatePresence } from 'framer-motion';
import './ServicesSection.css';

export default function ServicesSection() {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedType, setSelectedType] = useState(null);
    const [selectedPlan, setSelectedPlan] = useState(null);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setSelectedType(null);
        setSelectedPlan(null);
    };

    const handleBackToCategories = () => {
        setSelectedCategory(null);
        setSelectedType(null);
        setSelectedPlan(null);
    };

    const handleTypeClick = (type) => {
        setSelectedType(type);
        setSelectedPlan(null);
    };

    const handleBackToTypes = () => {
        setSelectedType(null);
        setSelectedPlan(null);
    };

    const handlePlanSelect = (subService, planType, cost) => {
        setSelectedPlan({
            id: subService.id,
            name: subService.name,
            planType,
            cost,
            description: subService.description
        });
    };

    const handleProceedToPayment = () => {
        if (selectedPlan) {
            navigate('/payment', {
                state: {
                    amount: selectedPlan.cost,
                    description: selectedPlan.description,
                    plan: `${selectedPlan.name} - ${selectedPlan.planType}`
                }
            });
        }
    };

    return (
        <section id="services" className="services-section">
            <div className="services-container">
                <h2 className="section-title">Our Services</h2>

                <AnimatePresence mode="wait">
                    {!selectedCategory ? (
                        <motion.div
                            key="categories"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="categories-grid"
                        >
                            {servicesData.map((category) => (
                                <div
                                    key={category.id}
                                    className="category-card"
                                    onClick={() => handleCategoryClick(category)}
                                    style={{ '--accent-color': category.color }}
                                >
                                    <div className="icon-wrapper">
                                        <span className="emoji-icon">{getIcon(category.icon)}</span>
                                    </div>
                                    <h3>{category.name}</h3>
                                    <p>{category.description}</p>
                                </div>
                            ))}
                        </motion.div>
                    ) : !selectedType ? (
                        <motion.div
                            key="types"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            className="types-view"
                        >
                            <button onClick={handleBackToCategories} className="back-button">
                                ← Back to Categories
                            </button>
                            <h3 className="category-header" style={{ color: selectedCategory.color }}>
                                {selectedCategory.name}
                            </h3>
                            <div className="types-grid">
                                {selectedCategory.serviceTypes.map((type) => (
                                    <div
                                        key={type.id}
                                        className="type-card"
                                        onClick={() => handleTypeClick(type)}
                                    >
                                        <div className="type-icon">
                                            <span className="emoji-icon">{getIcon(type.icon)}</span>
                                        </div>
                                        <h4>{type.name}</h4>
                                        <p>{type.description}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="subservices"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                            className="subservices-view"
                        >
                            <div className="subservices-header-row">
                                <button onClick={handleBackToTypes} className="back-button">
                                    ← Back to {selectedCategory.name}
                                </button>
                                {selectedPlan && (
                                    <motion.button
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="proceed-btn"
                                        onClick={handleProceedToPayment}
                                    >
                                        Proceed to Payment (AED {selectedPlan.cost}) →
                                    </motion.button>
                                )}
                            </div>

                            <h3 className="type-header">{selectedType.name}</h3>
                            <div className="subservices-list">
                                {selectedType.subServices.map((sub) => (
                                    <div key={sub.id} className="subservice-item">
                                        <div className="subservice-header">
                                            <span className="emoji-icon">{getIcon(sub.icon)}</span>
                                            <h5>{sub.name}</h5>
                                        </div>
                                        <p className="subservice-desc">{sub.description}</p>
                                        <div className="pricing-info">
                                            <div
                                                className={`price-tag standard ${selectedPlan?.id === sub.id && selectedPlan?.planType === 'Standard' ? 'selected' : ''}`}
                                                onClick={() => handlePlanSelect(sub, 'Standard', sub.standard.cost)}
                                            >
                                                <span>Standard</span>
                                                <strong>AED {sub.standard.cost}</strong>
                                                <small>{sub.standard.timeline}</small>
                                            </div>
                                            <div
                                                className={`price-tag premium ${selectedPlan?.id === sub.id && selectedPlan?.planType === 'Premium' ? 'selected' : ''}`}
                                                onClick={() => handlePlanSelect(sub, 'Premium', sub.premium.cost)}
                                            >
                                                <span>Premium</span>
                                                <strong>AED {sub.premium.cost}</strong>
                                                <small>{sub.premium.timeline}</small>
                                            </div>
                                        </div>
                                        <div className="requirements">
                                            <h6>Requirements:</h6>
                                            <ul>
                                                {sub.documentRequirements.slice(0, 3).map((req, idx) => (
                                                    <li key={idx}>{req}</li>
                                                ))}
                                                {sub.documentRequirements.length > 3 && (
                                                    <li>+{sub.documentRequirements.length - 3} more...</li>
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
