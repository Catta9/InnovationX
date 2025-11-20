import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ScrollRevealText = ({ children, className = '' }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 0.9", "start 0.3"]
    });

    // Dividi il testo in parole
    const words = children.split(' ');

    return (
        <span ref={ref} className={className}>
            {words.map((word, index) => {
                // Calcola quando questa parola dovrebbe illuminarsi
                const start = index / words.length;
                const end = (index + 1) / words.length;

                const opacity = useTransform(
                    scrollYProgress,
                    [start, end],
                    [0.3, 1]
                );

                const color = useTransform(
                    scrollYProgress,
                    [start, end],
                    ['rgba(255, 255, 255, 0.3)', 'rgba(255, 255, 255, 1)']
                );

                return (
                    <motion.span
                        key={index}
                        style={{ opacity, color }}
                        className="inline-block"
                    >
                        {word}{index < words.length - 1 ? ' ' : ''}
                    </motion.span>
                );
            })}
        </span>
    );
};

export default ScrollRevealText;
