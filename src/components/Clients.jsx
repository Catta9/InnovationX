import { motion } from 'framer-motion';
import { FaRocket, FaShoppingCart, FaBuilding, FaLaptopCode, FaGoogle, FaMicrosoft, FaAws, FaStripe, FaSpotify, FaSlack, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Clients.css';

const categories = [
    {
        id: 1,
        title: "SaaS Startups",
        description: "Scalable dashboards & platforms.",
        projects: ["FinTech Dashboard", "AI Analytics Tool"],
        icon: <FaRocket />
    },
    {
        id: 2,
        title: "E-commerce",
        description: "High-conversion online stores.",
        projects: ["Fashion Brand Store", "Tech Gear Shop"],
        icon: <FaShoppingCart />
    },
    {
        id: 3,
        title: "Enterprise",
        description: "Secure & robust corporate portals.",
        projects: ["Banking Portal", "Logistics System"],
        icon: <FaBuilding />
    },
    {
        id: 4,
        title: "Agencies",
        description: "Creative partner for digital agencies.",
        projects: ["Campaign Landing Page", "Portfolio Site"],
        icon: <FaLaptopCode />
    }
];

const clients = [
    { id: 1, name: "Google", icon: <FaGoogle /> },
    { id: 2, name: "Microsoft", icon: <FaMicrosoft /> },
    { id: 3, name: "AWS", icon: <FaAws /> },
    { id: 4, name: "Stripe", icon: <FaStripe /> },
    { id: 5, name: "Spotify", icon: <FaSpotify /> },
    { id: 6, name: "Slack", icon: <FaSlack /> },
];

const Clients = () => {
    return (
        <section className="clients-section" id="clients">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Clients & Industries</h2>
                    <p className="section-subtitle">Trusted by innovative companies worldwide.</p>
                    <Link to="/services" className="btn-products" onClick={() => window.scrollTo(0, 0)}>
                        Explore Our Services <FaArrowRight />
                    </Link>
                </motion.div>

                <motion.div
                    className="clients-grid"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                >
                    {categories.map((cat) => (
                        <motion.div
                            className="client-card"
                            key={cat.id}
                            variants={{
                                hidden: { opacity: 0, y: 50, scale: 0.9 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    transition: { type: "spring", stiffness: 50 }
                                }
                            }}
                        >
                            <div className="client-card-icon">{cat.icon}</div>
                            <h3 className="client-card-title">{cat.title}</h3>
                            <p className="client-card-desc">{cat.description}</p>
                            <ul className="client-projects">
                                {cat.projects.map((p, i) => (
                                    <li key={i}>{p}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="clients-logos">
                    <div className="logos-track">
                        {[...clients, ...clients, ...clients].map((client, index) => (
                            <div className="client-logo" key={`${client.id}-${index}`}>
                                {client.icon}
                                <span>{client.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;
