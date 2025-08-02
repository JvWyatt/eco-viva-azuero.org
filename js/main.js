// Efecto de overlay y zoom en el hero
const overlay = document.getElementById('overlay');
const heroBg = document.getElementById('hero-bg');

window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;
    // Aumentar oscuridad del overlay
    let maxOpacity = 0.8;
    let opacity = Math.min(scrollTop / 300, maxOpacity);
    overlay.style.background = `rgba(0,0,0,${opacity})`;

    // Efecto de zoom en la imagen de fondo
    let zoom = 1 + Math.min(scrollTop / 2000, 0.1);
    heroBg.style.transform = `scale(${zoom})`;
});
