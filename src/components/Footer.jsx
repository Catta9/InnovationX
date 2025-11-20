import { FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h2 className="footer-logo">InnovationX</h2>
                        <p className="footer-desc">
                            Building immersive digital experiences for bold brands. We combine strategy, design, and technology to create websites that perform.
                        </p>
                        <div className="footer-socials">
                            <a href="#" aria-label="Twitter"><FaTwitter /></a>
                            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
                            <a href="#" aria-label="Instagram"><FaInstagram /></a>
                            <a href="#" aria-label="GitHub"><FaGithub /></a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <div className="footer-column">
                            <h3>Company</h3>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/#why-us">About Us</a></li>
                                <li><a href="/#team">Team</a></li>
                                <li><a href="/#locations">Locations</a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h3>Services</h3>
                            <ul>
                                <li><a href="/services">Our Services</a></li>
                                <li><a href="/services">Web Development</a></li>
                                <li><a href="/services">UI/UX Design</a></li>
                                <li><a href="/services">AI Automation</a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h3>Resources</h3>
                            <ul>
                                <li><a href="/#clients">Case Studies</a></li>
                                <li><a href="/#faq">FAQ</a></li>
                                <li><a href="/contact">Support</a></li>
                                <li><a href="/#certifications">Certifications</a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h3>Contact</h3>
                            <ul>
                                <li><a href="mailto:hello@innovationx.com">hello@innovationx.com</a></li>
                                <li><a href="tel:+1234567890">+1 (555) 123-4567</a></li>
                                <li>Bologna, Italy</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} InnovationX. All rights reserved.</p>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
