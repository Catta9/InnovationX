import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

import logo from '../assets/logo.png';

const mainLinks = [
    { name: 'Clients', href: '/#clients' },
    { name: 'Features', href: '/#features' },
    { name: 'Integrations', href: '/#integrations' },
    { name: 'Why Us', href: '/#why-us' },
    { name: 'Team', href: '/#team' },
    { name: 'Testimonials', href: '/#testimonials' },
];

const infoLinks = [
    { name: 'Pricing', href: '/#pricing' },
    { name: 'Locations', href: '/#locations' },
    { name: 'FAQ', href: '/#faq' },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isInfoDropdownOpen, setIsInfoDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        setIsInfoDropdownOpen(false);

        if (href.startsWith('/#')) {
            const sectionId = href.substring(2);
            if (location.pathname === '/') {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                navigate('/');
                setTimeout(() => {
                    const element = document.getElementById(sectionId);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 100);
            }
        } else {
            navigate(href);
            window.scrollTo(0, 0);
        }
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo-link" onClick={() => window.scrollTo(0, 0)}>
                    <img src={logo} alt="InnovationX" className="navbar-logo-img" />
                </Link>

                <div className="navbar-desktop">
                    {mainLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="nav-link"
                            onClick={(e) => handleNavClick(e, link.href)}
                        >
                            {link.name}
                        </a>
                    ))}

                    <div
                        className="nav-dropdown"
                        onMouseEnter={() => setIsInfoDropdownOpen(true)}
                        onMouseLeave={() => setIsInfoDropdownOpen(false)}
                    >
                        <button className="nav-link dropdown-trigger">
                            Info <FaChevronDown className="dropdown-icon" />
                        </button>
                        <AnimatePresence>
                            {isInfoDropdownOpen && (
                                <motion.div
                                    className="dropdown-menu"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {infoLinks.map((link) => (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            className="dropdown-link"
                                            onClick={(e) => handleNavClick(e, link.href)}
                                        >
                                            {link.name}
                                        </a>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <a
                        href="/contact"
                        className="nav-link nav-contact-btn"
                        onClick={(e) => handleNavClick(e, '/contact')}
                    >
                        Contact
                    </a>
                </div>

                <div className="navbar-mobile-toggle" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </div>

                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            className="navbar-mobile-menu"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {mainLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="mobile-nav-link"
                                    onClick={(e) => handleNavClick(e, link.href)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="mobile-divider"></div>
                            {infoLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="mobile-nav-link"
                                    onClick={(e) => handleNavClick(e, link.href)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="/contact"
                                className="mobile-nav-link mobile-contact-btn"
                                onClick={(e) => handleNavClick(e, '/contact')}
                            >
                                Contact
                            </a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
