document.addEventListener('DOMContentLoaded', () => {
    // Add mousemove effect for orbs
    document.addEventListener('mousemove', (e) => {
        const orbs = document.querySelectorAll('.orb');
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        orbs.forEach(orb => {
            const speed = orb.classList.contains('orb-1') ? 30 : -30;
            orb.style.transform = `translate(${mouseX * speed}px, ${mouseY * speed}px)`;
        });
    });
});