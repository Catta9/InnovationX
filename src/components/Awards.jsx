import './Awards.css';
import { FaAward, FaCertificate, FaTrophy, FaStar } from 'react-icons/fa';

const awards = [
    { id: 1, title: "Top Web Experience Agency 2024", icon: <FaTrophy /> },
    { id: 2, title: "Certified React Specialist", icon: <FaCertificate /> },
    { id: 3, title: "Best UI Animation Studio", icon: <FaAward /> },
    { id: 4, title: "Awwwards Site of the Day", icon: <FaStar /> },
    { id: 5, title: "FWA of the Month", icon: <FaAward /> },
    { id: 6, title: "CSS Design Awards Winner", icon: <FaTrophy /> },
];

const Awards = () => {
    return (
        <section className="awards-section">
            <div className="awards-track">
                {/* Double the content for seamless loop */}
                {[...awards, ...awards].map((award, index) => (
                    <div className="award-card" key={`${award.id}-${index}`}>
                        <div className="award-icon">{award.icon}</div>
                        <span className="award-title">{award.title}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Awards;
