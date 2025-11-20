import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Globe from 'react-globe.gl';
import './Locations.css';

const locations = [
    { id: 1, city: "Bologna, Italy", lat: 44.4949, lng: 11.3426, address: "Via Rizzoli 1, 40125 Bologna" },
    { id: 2, city: "Paris, France", lat: 48.8566, lng: 2.3522, address: "10 Avenue des Champs-Élysées, 75008 Paris" },
    { id: 3, city: "Berlin, Germany", lat: 52.5200, lng: 13.4050, address: "Unter den Linden 77, 10117 Berlin" },
    { id: 4, city: "London, UK", lat: 51.5074, lng: -0.1278, address: "221B Baker Street, London NW1 6XE" },
    { id: 5, city: "New York, USA", lat: 40.7128, lng: -74.0060, address: "350 Fifth Avenue, New York, NY 10118" },
    { id: 6, city: "Tokyo, Japan", lat: 35.6762, lng: 139.6503, address: "1-1 Chiyoda, Chiyoda City, Tokyo 100-8111" },
    { id: 7, city: "Melbourne, Australia", lat: -37.8136, lng: 144.9631, address: "Flinders St, Melbourne VIC 3000" },
    { id: 8, city: "Cairo, Egypt", lat: 30.0444, lng: 31.2357, address: "Al Haram, Giza Governorate 12512" },
    { id: 9, city: "Shanghai, China", lat: 31.2304, lng: 121.4737, address: "The Bund, Shanghai 200002" },
    { id: 10, city: "Dublin, Ireland", lat: 53.3498, lng: -6.2603, address: "O'Connell Street Lower, Dublin 1" }
];

const Locations = () => {
    const globeEl = useRef();
    const [dimensions, setDimensions] = useState({ width: 600, height: 600 });
    const [activeLocation, setActiveLocation] = useState(null);

    useEffect(() => {
        // Initial view: Europe
        if (globeEl.current) {
            globeEl.current.pointOfView({ lat: 48, lng: 15, altitude: 2.5 });
            globeEl.current.controls().autoRotate = true;
            globeEl.current.controls().autoRotateSpeed = 0.5;
            globeEl.current.controls().enableZoom = false; // Disable zoom
        }

        // Responsive globe sizing
        const handleResize = () => {
            const container = document.getElementById('globe-container');
            if (container) {
                setDimensions({
                    width: container.offsetWidth,
                    height: container.offsetHeight
                });
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial size

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleLocationClick = (loc) => {
        setActiveLocation(loc.id);
        if (globeEl.current) {
            globeEl.current.pointOfView({ lat: loc.lat, lng: loc.lng, altitude: 1.5 }, 1000);
            globeEl.current.controls().autoRotate = false;
        }
    };

    return (
        <section className="locations-section" id="locations">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Where We Are</h2>
                    <p className="section-subtitle">Global presence, local expertise.</p>
                </motion.div>

                <div className="locations-content">
                    <div className="globe-column" id="globe-container">
                        <Globe
                            ref={globeEl}
                            width={dimensions.width}
                            height={dimensions.height}
                            globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
                            pointsData={[]} // No 3D points
                            htmlElementsData={locations}
                            htmlLat="lat"
                            htmlLng="lng"
                            htmlElement={(d) => {
                                const el = document.createElement('div');
                                el.className = `globe-marker ${activeLocation === d.id ? 'active' : ''}`;
                                el.style.width = '15px';
                                el.style.height = '15px';
                                el.style.backgroundColor = activeLocation === d.id ? '#fff' : '#8b5cf6';
                                el.style.borderRadius = '50%';
                                el.style.boxShadow = `0 0 10px ${activeLocation === d.id ? '#fff' : 'rgba(236, 72, 153, 0.8)'}`;
                                el.style.border = '2px solid white';
                                el.style.cursor = 'pointer';
                                el.onclick = () => handleLocationClick(d);
                                return el;
                            }}
                        />
                    </div>

                    <div className="locations-list-column">
                        <div className="locations-list">
                            {locations.map((loc) => (
                                <div
                                    key={loc.id}
                                    className={`location-item ${activeLocation === loc.id ? 'active' : ''}`}
                                    onClick={() => handleLocationClick(loc)}
                                >
                                    <h3>{loc.city}</h3>
                                    <p>{loc.address}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Locations;
