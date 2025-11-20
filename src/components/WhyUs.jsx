import { motion } from 'framer-motion';
import { FaRocket, FaUsers, FaHeadset, FaChartLine } from 'react-icons/fa';
import './WhyUs.css';

const reasons = [
    {
        id: 1,
        title: "Performance-First",
        description: "We obsess over every millisecond. Your site will load instantly and run smoothly.",
        icon: <FaRocket />,
        color: "var(--color-primary)"
    },
    {
        id: 2,
        title: "Design + Strategy",
        description: "We build strategic digital experiences that drive real business results.",
        icon: <FaUsers />,
        color: "var(--color-secondary)"
    },
    {
        id: 3,
        title: "End-to-End Support",
        description: "From concept to launch and beyond, we are your dedicated technical partner.",
        icon: <FaHeadset />,
        color: "var(--color-accent)"
    },
    {
        id: 4,
        title: "Data-Driven",
        description: "Every decision is backed by analytics and user behavior insights.",
        icon: <FaChartLine />,
        color: "var(--color-primary)"
    },
    {
        id: 5,
        title: "Scalable Architecture",
        description: "Built to grow with your business, handling millions of users effortlessly.",
        icon: <FaRocket />, // Reusing icon for now, ideally import more
        color: "var(--color-secondary)"
    },
    {
        id: 6,
        title: "Security First",
        description: "Enterprise-grade security protocols to keep your data safe and compliant.",
        icon: <FaHeadset />, // Reusing icon for now
        color: "var(--color-accent)"
    }
];

const WhyUs = () => {
    return (
        <section className="why-us-section" id="why-us">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Why InnovationX?</h2>
                    <p className="section-subtitle">We redefine what's possible on the web.</p>
                </motion.div>

                <div className="why-us-grid">
                    {reasons.map((reason, index) => (
                        <motion.div
                            className="why-us-card"
                            key={reason.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            style={{
                                borderColor: reason.color,
                                boxShadow: `0 0 30px ${reason.color}10`
                            }}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: `0 0 40px ${reason.color}30`
                            }}
                        >
                            <div className="why-us-icon" style={{ color: reason.color }}>
                                {reason.icon}
                            </div>
                            <div className="why-us-text">
                                <h3>{reason.title}</h3>
                                <p>{reason.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
