import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import './Pricing.css';

const plans = [
    {
        id: 1,
        name: "Starter",
        desc: "Perfect for small businesses.",
        priceMonthly: 2900,
        priceYearly: 29000,
        features: ["Custom Design", "5 Pages", "Mobile Responsive", "Basic SEO", "1 Month Support"]
    },
    {
        id: 2,
        name: "Growth",
        desc: "Scale your digital presence.",
        priceMonthly: 4900,
        priceYearly: 49000,
        features: ["Everything in Starter", "CMS Integration", "Advanced Animations", "Performance Optimization", "3 Months Support"],
        recommended: true
    },
    {
        id: 3,
        name: "Enterprise",
        desc: "Full-scale digital transformation.",
        priceMonthly: 9900,
        priceYearly: 99000,
        features: ["Everything in Growth", "Custom Web App", "API Integrations", "Priority 24/7 Support", "Dedicated Manager"]
    }
];

const Pricing = () => {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <section className="pricing-section" id="pricing">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Simple Pricing</h2>
                    <p className="section-subtitle">Transparent costs. No hidden fees.</p>

                    <div className="pricing-toggle-container">
                        <span className={!isYearly ? "active" : ""}>Monthly</span>
                        <div
                            className={`pricing-toggle ${isYearly ? "yearly" : ""}`}
                            onClick={() => setIsYearly(!isYearly)}
                        >
                            <div className="toggle-handle"></div>
                        </div>
                        <span className={isYearly ? "active" : ""}>Yearly <span className="save-badge">Save 20%</span></span>
                    </div>
                </motion.div>

                <div className="pricing-grid">
                    {plans.map((plan, index) => (
                        <motion.div
                            className={`pricing-card ${plan.recommended ? "recommended" : ""}`}
                            key={plan.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            {plan.recommended && <div className="recommended-badge">Most Popular</div>}
                            <h3 className="plan-name">{plan.name}</h3>
                            <p className="plan-desc">{plan.desc}</p>
                            <div className="plan-price">
                                <span className="currency">$</span>
                                <span className="amount">
                                    {isYearly ? (plan.priceYearly / 100).toLocaleString() : (plan.priceMonthly / 100).toLocaleString()}
                                </span>
                                <span className="period">/{isYearly ? "yr" : "mo"}</span>
                            </div>
                            <ul className="plan-features">
                                {plan.features.map((feature, i) => (
                                    <li key={i}><FaCheck /> {feature}</li>
                                ))}
                            </ul>
                            <button className={`btn ${plan.recommended ? "btn-primary" : "btn-secondary"}`}>
                                Choose Plan
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
