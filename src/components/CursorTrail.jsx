import { useEffect } from 'react';

const CursorTrail = () => {
    useEffect(() => {
        const canvas = document.createElement('canvas');
        canvas.id = 'cursor-trail-canvas';
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = '9999';
        document.body.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const trail = [];
        const maxTrailLength = 25;
        const fadeSpeed = 0.05; // Velocità di dissolvenza
        let lastMouseMoveTime = Date.now();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const handleMouseMove = (e) => {
            lastMouseMoveTime = Date.now();
            trail.push({
                x: e.clientX,
                y: e.clientY,
                alpha: 1.0,
                timestamp: Date.now()
            });
            if (trail.length > maxTrailLength) {
                trail.shift();
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const currentTime = Date.now();
            const timeSinceLastMove = currentTime - lastMouseMoveTime;

            // Rimuovi punti vecchi e aggiorna alpha
            for (let i = trail.length - 1; i >= 0; i--) {
                const point = trail[i];
                const age = currentTime - point.timestamp;

                // Dissolvenza rapida dopo 150ms o se il mouse è fermo
                if (age > 150 || timeSinceLastMove > 100) {
                    point.alpha -= fadeSpeed;
                }

                if (point.alpha <= 0) {
                    trail.splice(i, 1);
                }
            }

            // Disegna la scia
            if (trail.length > 1) {
                for (let i = 0; i < trail.length - 1; i++) {
                    const point = trail[i];
                    const nextPoint = trail[i + 1];
                    const progress = (i / trail.length);
                    const opacity = progress * 0.6 * point.alpha;
                    const width = progress * 8;

                    const gradient = ctx.createRadialGradient(
                        point.x, point.y, 0,
                        point.x, point.y, width * 2
                    );
                    gradient.addColorStop(0, `rgba(139, 92, 246, ${opacity})`);
                    gradient.addColorStop(0.5, `rgba(139, 92, 246, ${opacity * 0.5})`);
                    gradient.addColorStop(1, 'rgba(139, 92, 246, 0)');

                    ctx.strokeStyle = gradient;
                    ctx.lineWidth = width;
                    ctx.lineCap = 'round';
                    ctx.lineJoin = 'round';

                    ctx.beginPath();
                    ctx.moveTo(point.x, point.y);
                    ctx.lineTo(nextPoint.x, nextPoint.y);
                    ctx.stroke();
                }
            }

            requestAnimationFrame(animate);
        };

        window.addEventListener('resize', handleResize);
        document.addEventListener('mousemove', handleMouseMove);
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('mousemove', handleMouseMove);
            canvas.remove();
        };
    }, []);

    return null;
};

export default CursorTrail;
