import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';
import './FAQ.css';

const faqs = [
    {
        id: 1,
        question: "What is your typical project timeline?",
        answer: "Timelines vary depending on the project's complexity. A standard marketing website typically takes 4-6 weeks, while more complex web applications can take 3-6 months. We provide a detailed schedule during our initial consultation."
    },
    {
        id: 2,
        question: "Do you offer ongoing support and maintenance?",
        answer: "Yes, we offer comprehensive maintenance packages to ensure your site remains secure, up-to-date, and performing optimally. We can also handle content updates and feature additions post-launch."
    },
    {
        id: 3,
        question: "What technologies do you specialize in?",
        answer: "We are experts in the modern React ecosystem (Next.js, Vite), TypeScript, and Tailwind CSS. For backend needs, we work with Node.js, Firebase, and Supabase. We choose the best stack for your specific requirements."
    },
    {
        id: 4,
        question: "How do you handle pricing and payments?",
        answer: "We work with a transparent pricing model. Typically, we require a 50% deposit to start, with the remaining balance due upon project completion. For larger projects, we can structure payments based on milestones."
    },
    {
        id: 5,
        question: "Can you help with SEO and content strategy?",
        answer: "Absolutely. All our websites are built with SEO best practices in mind (semantic HTML, fast load times, mobile optimization). We also partner with content strategists to help you craft compelling copy."
    },
    {
        id: 6,
        question: "Do you work with international clients?",
        answer: "Yes! We are a remote-first agency and have successfully delivered projects for clients across Europe, North America, and Asia. We use tools like Slack and Zoom to maintain seamless communication."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section" id="faq">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Frequently Asked Questions</h2>
                    <p className="section-subtitle">Everything you need to know about working with us.</p>
                </motion.div>

                <div className="faq-container">
                    {faqs.map((faq, index) => (
                        <motion.div
                            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                            key={faq.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="faq-question">
                                <h3>{faq.question}</h3>
                                <span className="faq-icon">
                                    {activeIndex === index ? <FaMinus /> : <FaPlus />}
                                </span>
                            </div>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        className="faq-answer"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <p>{faq.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
