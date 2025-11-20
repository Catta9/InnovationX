import { motion } from 'framer-motion';
import { FaReact, FaStripe, FaSlack, FaGithub, FaDocker, FaAws } from 'react-icons/fa';
import { SiNextdotjs, SiFramer, SiFigma, SiFirebase, SiVercel, SiTailwindcss, SiTypescript, SiNotion } from 'react-icons/si';
import './Integrations.css';

const integrationsRow1 = [
    { id: 1, name: "React", icon: <FaReact /> },
    { id: 2, name: "Next.js", icon: <SiNextdotjs /> },
    { id: 3, name: "Framer", icon: <SiFramer /> },
    { id: 4, name: "Figma", icon: <SiFigma /> },
    { id: 5, name: "Stripe", icon: <FaStripe /> },
    { id: 6, name: "Firebase", icon: <SiFirebase /> },
    { id: 7, name: "Vercel", icon: <SiVercel /> },
];

const integrationsRow2 = [
    { id: 8, name: "Tailwind", icon: <SiTailwindcss /> },
    { id: 9, name: "TypeScript", icon: <SiTypescript /> },
    { id: 10, name: "GitHub", icon: <FaGithub /> },
    { id: 11, name: "Docker", icon: <FaDocker /> },
    { id: 12, name: "AWS", icon: <FaAws /> },
    { id: 13, name: "Slack", icon: <FaSlack /> },
    { id: 14, name: "Notion", icon: <SiNotion /> },
];

const Integrations = () => {
    return (
        <section className="integrations-section" id="integrations">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Seamless Integrations</h2>
                    <p className="section-subtitle">Powering your stack with the best tools in the industry.</p>
                </motion.div>

                <div className="integrations-container">
                    <div className="integrations-row row-left">
                        {[...integrationsRow1, ...integrationsRow1].map((tool, index) => (
                            <div className="integration-card" key={`r1-${index}`}>
                                <div className="integration-icon">{tool.icon}</div>
                                <span className="integration-name">{tool.name}</span>
                            </div>
                        ))}
                    </div>

                    <div className="integrations-row row-right">
                        {[...integrationsRow2, ...integrationsRow2].map((tool, index) => (
                            <div className="integration-card" key={`r2-${index}`}>
                                <div className="integration-icon">{tool.icon}</div>
                                <span className="integration-name">{tool.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Integrations;
