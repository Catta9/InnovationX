import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaRocket, FaShoppingCart, FaBuilding, FaLaptopCode, FaBrain, FaNetworkWired, FaCheck, FaArrowRight, FaMobileAlt, FaCode, FaChartLine } from 'react-icons/fa';
import { WebDesignVisual, DevelopmentVisual, AiVisual } from '../components/ProductVisuals';
import ScrollRevealText from '../components/ScrollRevealText';
import './Services.css';

const services = [
    {
        id: 1,
        title: "Web Design & UX",
        description: "User-centric designs that captivate and convert.",
        icon: <FaMobileAlt />,
        features: ["UX Research", "UI Design", "Prototyping"]
    },
    {
        id: 2,
        title: "Custom Development",
        description: "Robust, scalable code built for performance.",
        icon: <FaCode />,
        features: ["React/Next.js", "Node.js", "API Integration"]
    },
    {
        id: 3,
        title: "Web Apps",
        description: "Powerful applications for complex business needs.",
        icon: <FaLaptopCode />,
        features: ["SaaS Platforms", "Internal Tools", "Dashboards"]
    },
    {
        id: 4,
        title: "E-commerce",
        description: "Online stores optimized for sales and growth.",
        icon: <FaShoppingCart />,
        features: ["Shopify/Woo", "Custom Checkout", "Analytics"]
    },
    {
        id: 5,
        title: "AI Automation",
        description: "Smart solutions to streamline your workflow.",
        icon: <FaBrain />,
        features: ["Chatbots", "Auto-Workflows", "Data Analysis"]
    },
    {
        id: 6,
        title: "Integrations",
        description: "Seamlessly connect your favorite tools.",
        icon: <FaNetworkWired />,
        features: ["CRM Sync", "Payment Gateways", "Custom APIs"]
    }
];

const detailedServices = [
    {
        id: "web-design",
        title: "Web Design & UX",
        content: "We don't just make things look pretty; we design for results. Our UX/UI process involves deep user research, wireframing, and interactive prototyping to ensure every pixel serves a purpose. We focus on accessibility, responsiveness, and conversion optimization.",
        visual: <WebDesignVisual color="var(--color-primary)" />,
        color: "var(--color-primary)"
    },
    {
        id: "custom-dev",
        title: "Custom Web Development",
        content: "From simple landing pages to complex enterprise systems, our code is clean, maintainable, and built for speed. We utilize modern frameworks like React, Vue, and Next.js to deliver lightning-fast experiences that rank high on search engines.",
        visual: <DevelopmentVisual color="var(--color-secondary)" />,
        color: "var(--color-secondary)"
    },
    {
        id: "ai-automation",
        title: "AI Automation & Chatbots",
        content: "Leverage the power of Artificial Intelligence to automate repetitive tasks and enhance customer support. We build custom AI chatbots, workflow automations, and data analysis tools that save you time and money.",
        visual: <AiVisual color="var(--color-accent)" />,
        color: "var(--color-accent)"
    }
];

const bundles = [
    {
        title: "Launch-ready Website",
        description: "Perfect for startups needing a quick, professional presence.",
        features: ["5-Page Custom Design", "CMS Integration", "SEO Basics", "1 Month Support"],
        badge: "Best for Startups"
    },
    {
        title: "E-commerce Growth",
        description: "Everything you need to start selling online effectively.",
        features: ["Custom Storefront", "Payment Setup", "Product Upload", "Analytics Dashboard"],
        badge: "Most Popular"
    },
    {
        title: "AI Assistant",
        description: "Automate customer service with a smart chatbot.",
        features: ["Custom AI Model", "Website Integration", "Multi-language", "24/7 Availability"],
        badge: "New"
    }
];

const processSteps = [
    { num: "01", title: "Discovery", desc: "We learn about your business and goals." },
    { num: "02", title: "Design", desc: "We create stunning visuals and prototypes." },
    { num: "03", title: "Develop", desc: "We build your solution with clean code." },
    { num: "04", title: "Launch", desc: "We deploy and ensure everything runs smoothly." },
    { num: "05", title: "Grow", desc: "We help you optimize and scale." }
];

const Services = () => {
    return (
        <div className="services-page">
            {/* Hero Section */}
            <section className="services-hero">
                <div className="container">
                    <motion.div
                        className="hero-content-centered"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="hero-title-large">
                            Elevate Your Digital Presence
                        </h1>
                        <p className="hero-subtitle-centered">
                            From stunning designs to powerful web applications, we craft digital solutions that drive results and exceed expectations.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="services-overview">
                <div className="container">
                    <motion.h2
                        className="section-title center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Our Expertise
                    </motion.h2>
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                className="service-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="card-icon">{service.icon}</div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <ul>
                                    {service.features.map((feature, i) => (
                                        <li key={i}><FaCheck className="check-icon" /> {feature}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Sections */}
            <section className="detailed-services">
                {detailedServices.map((service, index) => (
                    <div key={service.id} className={`service-detail ${index % 2 !== 0 ? 'reverse' : ''}`}>
                        <div className="container detail-container">
                            <motion.div
                                className="detail-content"
                                initial={{ opacity: 0, x: index % 2 !== 0 ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2>{service.title}</h2>
                                <p>
                                    <ScrollRevealText>{service.content}</ScrollRevealText>
                                </p>
                                <Link to="/contact" className="btn-text">Learn More <FaArrowRight /></Link>
                            </motion.div>
                            <motion.div
                                className="detail-visual"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="mockup-container" style={{ '--accent-color': service.color }}>
                                    <div className="mockup-visual-wrapper">{service.visual}</div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                ))}
            </section>

            {/* Bundles */}
            <section className="bundles-section">
                <div className="container">
                    <h2 className="section-title center">Packaged Solutions</h2>
                    <div className="bundles-grid">
                        {bundles.map((bundle, index) => (
                            <motion.div
                                key={index}
                                className="bundle-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                            >
                                {bundle.badge && <span className="bundle-badge">{bundle.badge}</span>}
                                <h3>{bundle.title}</h3>
                                <p>{bundle.description}</p>
                                <ul className="bundle-features">
                                    {bundle.features.map((feat, i) => (
                                        <li key={i}><FaCheck /> {feat}</li>
                                    ))}
                                </ul>
                                <button className="btn btn-full">Request Solution</button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="process-section">
                <div className="container">
                    <h2 className="section-title center">How We Work</h2>
                    <div className="process-stepper">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                className="process-step"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="step-number">{step.num}</div>
                                <h4>{step.title}</h4>
                                <p>{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
