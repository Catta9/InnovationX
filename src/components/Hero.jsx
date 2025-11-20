import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="container hero-centered">
                <motion.div
                    className="hero-content-centered"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="hero-title-large">InnovationX</h1>
                    <p className="hero-subtitle-centered">
                        We build immersive digital experiences for bold brands.
                    </p>
                </motion.div>

                <motion.div
                    className="hero-globe-container"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <div className="globe-glow"></div>
                    <div className="globe-sphere">
                        <div className="globe-inner-glow"></div>
                        <div className="globe-grid"></div>
                        <div className="globe-dots"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
