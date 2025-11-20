import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import './Testimonials.css';

const testimonials = [
    {
        id: 1,
        name: "Elena Rossi",
        role: "CEO, TechFlow",
        text: "InnovationX transformed our digital presence. Their attention to detail and animation work is simply world-class.",
        rating: 5
    },
    {
        id: 2,
        name: "Mark Stevenson",
        role: "Founder, StartUp Inc",
        text: "The team delivered beyond our expectations. The site is fast, beautiful, and converts visitors into customers.",
        rating: 5
    },
    {
        id: 3,
        name: "Sarah Connor",
        role: "Marketing Director, CyberDyne",
        text: "Professional, creative, and technically brilliant. Working with InnovationX was a game-changer for us.",
        rating: 5
    },
    {
        id: 4,
        name: "James Cameron",
        role: "Director, Avatar Studios",
        text: "They understand how to tell a story through web design. The immersive experience they built is incredible.",
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <section className="testimonials-section" id="testimonials">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Client Stories</h2>
                    <p className="section-subtitle">Don't just take our word for it.</p>
                </motion.div>

                <div className="testimonials-carousel">
                    <div className="testimonials-track">
                        {[...testimonials, ...testimonials, ...testimonials].map((item, index) => (
                            <div className="testimonial-card" key={`${item.id}-${index}`}>
                                <div className="quote-icon"><FaQuoteLeft /></div>
                                <p className="testimonial-text">"{item.text}"</p>
                                <div className="testimonial-rating">
                                    {[...Array(item.rating)].map((_, i) => <FaStar key={i} />)}
                                </div>
                                <div className="testimonial-author">
                                    <h4>{item.name}</h4>
                                    <p>{item.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
