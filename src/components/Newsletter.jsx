import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';
import './Newsletter.css';

const Newsletter = () => {
    return (
        <section className="newsletter-section" id="contact">
            <div className="container">
                <motion.div
                    className="newsletter-content"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="newsletter-text">
                        <h2 className="section-title">Stay Ahead of the Curve</h2>
                        <p className="section-subtitle">Join our newsletter for the latest insights on web trends, design, and technology.</p>
                    </div>

                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="input-group">
                            <input type="email" placeholder="Enter your email address" required />
                            <button type="submit" className="btn-submit">
                                <span className="btn-text">Subscribe</span>
                                <span className="btn-icon"><FaPaperPlane /></span>
                            </button>
                        </div>
                        <p className="privacy-note">
                            We care about your data in our <a href="#">privacy policy</a>.
                        </p>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Newsletter;
