import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-page">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Get in Touch</h2>
                    <p className="section-subtitle">We'd love to hear from you. Fill out the form below.</p>
                </motion.div>

                <div className="contact-content">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="info-item">
                            <div className="icon-box"><FaEnvelope /></div>
                            <div>
                                <h3>Email Us</h3>
                                <p>hello@innovationx.com</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="icon-box"><FaPhone /></div>
                            <div>
                                <h3>Call Us</h3>
                                <p>+1 (555) 123-4567</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="icon-box"><FaMapMarkerAlt /></div>
                            <div>
                                <h3>Visit Us</h3>
                                <p>123 Innovation Blvd, Tech City, TC 90210</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        className="contact-form"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="your@email.com" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="5" placeholder="How can we help you?" required></textarea>
                        </div>
                        <button type="submit" className="btn-primary">Send Message</button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
