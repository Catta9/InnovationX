import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import team1 from '../assets/team_v2_1.png';
import team2 from '../assets/team_v2_2.png';
import team3 from '../assets/team_v2_3.png';
import team4 from '../assets/team_v2_4.png';
import team5 from '../assets/team_v2_5.png';
import './Team.css';

const team = [
    { id: 1, name: "Jackson Mitchel", role: "AI Lead", img: team1 },
    { id: 2, name: "Sarah Jenkins", role: "Creative Director", img: team2 },
    { id: 3, name: "John Doe", role: "Product Head", img: team3 },
    { id: 4, name: "Emily Davis", role: "UX Strategist", img: team4 },
    { id: 5, name: "Armenia Sean", role: "Social Media Head", img: team5 },
    { id: 6, name: "David Wilson", role: "Motion Designer", img: team1 },
];

const Team = () => {
    const [activeIndex, setActiveIndex] = useState(2);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % team.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + team.length) % team.length);
    };

    // Auto-play
    useEffect(() => {
        const interval = setInterval(nextSlide, 4000);
        return () => clearInterval(interval);
    }, []);

    const getCardStyle = (index) => {
        const total = team.length;
        let diff = (index - activeIndex + total) % total;
        if (diff > total / 2) diff -= total;

        if (diff === 0) {
            // Center
            return {
                zIndex: 10,
                opacity: 1,
                scale: 1.1,
                x: 0,
                rotateY: 0,
                filter: 'brightness(1)',
            };
        } else if (diff === 1 || diff === -total + 1) {
            // Right
            return {
                zIndex: 5,
                opacity: 1,
                scale: 0.8,
                x: '105%', // Reduced gap
                rotateY: -35,
                filter: 'brightness(0.3)',
            };
        } else if (diff === -1 || diff === total - 1) {
            // Left
            return {
                zIndex: 5,
                opacity: 1,
                scale: 0.8,
                x: '-105%', // Reduced gap
                rotateY: 35,
                filter: 'brightness(0.3)',
            };
        } else {
            return {
                zIndex: 0,
                opacity: 0,
                scale: 0.5,
                x: 0,
                rotateY: 0,
                display: 'none'
            };
        }
    };

    return (
        <section className="team-section" id="team">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h4 className="team-label">TEAM</h4>
                    <h2 className="section-title">Meet the team that<br />talks to AI like it's a pet</h2>
                </motion.div>

                <div className="team-carousel-container">
                    <div className="team-carousel-track">
                        {team.map((member, index) => {
                            const style = getCardStyle(index);
                            const isCenter = style.zIndex === 10;
                            // Extract rotation for counter-rotation
                            const rotation = style.rotateY || 0;

                            return (
                                <motion.div
                                    className={`team-carousel-card ${isCenter ? 'active' : ''}`}
                                    key={member.id}
                                    animate={style}
                                    transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    <div className="team-card-inner">
                                        <motion.div
                                            className="team-img-container"
                                            animate={{ rotateY: -rotation }} // Counter-rotate image
                                            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                                        >
                                            <img src={member.img} alt={member.name} className="team-member-photo" />
                                        </motion.div>
                                        <div className="team-member-info">
                                            <h3>{member.name}</h3>
                                            <p>{member.role}</p>
                                        </div>

                                        {isCenter && (
                                            <>
                                                <button className="card-nav-btn prev" onClick={(e) => { e.stopPropagation(); prevSlide(); }}>
                                                    <FaChevronLeft />
                                                </button>
                                                <button className="card-nav-btn next" onClick={(e) => { e.stopPropagation(); nextSlide(); }}>
                                                    <FaChevronRight />
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
