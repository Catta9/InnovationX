import { motion } from 'framer-motion';
import { FaCode, FaPaintBrush, FaSearch, FaCogs, FaMobileAlt, FaShieldAlt } from 'react-icons/fa';
import './Features.css';

const features = [
    {
        id: 1,
        title: "Custom Web Experiences",
        description: "Tailor-made digital solutions that perfectly align with your brand identity.",
        icon: <FaPaintBrush />
    },
    {
        id: 2,
        title: "High-Performance Frontend",
        description: "Blazing fast load times and smooth interactions using modern frameworks.",
        icon: <FaCode />
    },
    {
        id: 3,
        title: "SEO Optimization",
        description: "Built-in best practices to ensure your site ranks high on search engines.",
        icon: <FaSearch />
    },
    {
        id: 4,
        title: "Complex Integrations",
        description: "Seamlessly connect with your favorite tools, APIs, and third-party services.",
        icon: <FaCogs />
    },
    {
        id: 5,
        title: "Mobile-First Design",
        description: "Responsive layouts that look and work perfectly on every device.",
        icon: <FaMobileAlt />
    },
    {
        id: 6,
        title: "Enterprise Security",
        description: "Robust security measures to protect your data and your users.",
        icon: <FaShieldAlt />
    }
];

const Features = () => {
    return (
        <section className="features-section" id="features">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Our Expertise</h2>
                    <p className="section-subtitle">Crafting digital excellence with precision and passion.</p>
                </motion.div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <motion.div
                            className="feature-card"
                            key={feature.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className="feature-icon-wrapper">
                                {feature.icon}
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-desc">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
