import { motion } from 'framer-motion';

export const WebDesignVisual = ({ color }) => (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="product-visual-svg">
        <motion.rect
            x="50" y="50" width="300" height="200" rx="10"
            fill="rgba(255,255,255,0.05)" stroke={color} strokeWidth="2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
        />
        {/* Browser Header */}
        <rect x="50" y="50" width="300" height="30" rx="10" fill={color} fillOpacity="0.2" />
        <circle cx="70" cy="65" r="5" fill={color} />
        <circle cx="90" cy="65" r="5" fill={color} fillOpacity="0.5" />
        <circle cx="110" cy="65" r="5" fill={color} fillOpacity="0.5" />

        {/* Floating UI Elements */}
        <motion.rect
            x="80" y="100" width="100" height="80" rx="5"
            fill={color} fillOpacity="0.1" stroke={color} strokeWidth="1"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.rect
            x="200" y="100" width="120" height="20" rx="5"
            fill={color} fillOpacity="0.3"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.rect
            x="200" y="130" width="120" height="20" rx="5"
            fill={color} fillOpacity="0.2"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
        />
        <motion.rect
            x="80" y="200" width="240" height="30" rx="5"
            fill={color} fillOpacity="0.15"
            animate={{ scaleX: [0.95, 1, 0.95] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Cursor */}
        <motion.path
            d="M250 180L260 205L265 195L275 200L250 180Z"
            fill="white" stroke={color} strokeWidth="2"
            animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
    </svg>
);

export const DevelopmentVisual = ({ color }) => (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="product-visual-svg">
        {/* Code Window */}
        <motion.rect
            x="40" y="40" width="320" height="220" rx="8"
            fill="#0f0f0f" stroke={color} strokeWidth="2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        />
        <rect x="40" y="40" width="320" height="25" rx="8" fill="#1a1a1a" />
        <circle cx="60" cy="52.5" r="4" fill="#ff5f56" />
        <circle cx="75" cy="52.5" r="4" fill="#ffbd2e" />
        <circle cx="90" cy="52.5" r="4" fill="#27c93f" />

        {/* Code Lines */}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <rect x="60" y="80" width="80" height="10" rx="2" fill={color} fillOpacity="0.8" />
            <rect x="150" y="80" width="40" height="10" rx="2" fill="white" fillOpacity="0.3" />

            <rect x="80" y="105" width="60" height="10" rx="2" fill={color} fillOpacity="0.5" />
            <rect x="150" y="105" width="100" height="10" rx="2" fill="white" fillOpacity="0.3" />

            <rect x="80" y="130" width="140" height="10" rx="2" fill="white" fillOpacity="0.3" />

            <rect x="60" y="155" width="30" height="10" rx="2" fill={color} fillOpacity="0.8" />

            <motion.rect
                x="60" y="180" width="10" height="15" fill={color}
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
            />
        </motion.g>

        {/* Floating Symbols */}
        <motion.text x="300" y="100" fill={color} fontSize="40" opacity="0.2"
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}>
            &lt;/&gt;
        </motion.text>
        <motion.text x="280" y="200" fill={color} fontSize="50" opacity="0.15"
            animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}>
            {`{ }`}
        </motion.text>
    </svg>
);

export const AiVisual = ({ color }) => (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="product-visual-svg">
        {/* Central Brain/Core */}
        <motion.circle
            cx="200" cy="150" r="40"
            stroke={color} strokeWidth="2" fill="rgba(255,255,255,0.05)"
            animate={{ scale: [1, 1.1, 1], strokeOpacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.path
            d="M180 150 L220 150 M200 130 L200 170 M185 135 L215 165 M215 135 L185 165"
            stroke={color} strokeWidth="2"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />

        {/* Orbiting Nodes */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <motion.g key={i}>
                <motion.circle
                    cx="200" cy="150" r="8" fill={color}
                    animate={{
                        x: Math.cos(angle * Math.PI / 180) * 100,
                        y: Math.sin(angle * Math.PI / 180) * 100,
                        opacity: [0.3, 1, 0.3]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: i * 0.2
                    }}
                />
                <motion.line
                    x1="200" y1="150"
                    x2={200 + Math.cos(angle * Math.PI / 180) * 100}
                    y2={150 + Math.sin(angle * Math.PI / 180) * 100}
                    stroke={color} strokeWidth="1" strokeOpacity="0.2"
                    animate={{ strokeOpacity: [0.1, 0.4, 0.1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                />
            </motion.g>
        ))}

        {/* Chat Bubbles */}
        <motion.rect
            x="50" y="50" width="80" height="40" rx="10"
            fill={color} fillOpacity="0.1" stroke={color} strokeWidth="1"
            animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.rect
            x="270" y="220" width="80" height="40" rx="10"
            fill={color} fillOpacity="0.1" stroke={color} strokeWidth="1"
            animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, delay: 2 }}
        />
    </svg>
);
