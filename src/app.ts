import gsap from 'gsap';

// Animación del header al cargar la página
const header = document.querySelector('header');
if (header) {
  gsap.from(header, { y: -100, opacity: 0, duration: 1, ease: 'power2.out' });
}

// Animación del hero al cargar
const heroTitle = document.querySelector('#inicio h2');
const heroText = document.querySelector('#inicio p');
const heroBtn = document.querySelector('#inicio a');

if (heroTitle && heroText && heroBtn) {
  gsap.from(heroTitle, { y: 50, opacity: 0, duration: 1, delay: 0.5, ease: 'power2.out' });
  gsap.from(heroText, { y: 50, opacity: 0, duration: 1, delay: 0.7, ease: 'power2.out' });
  gsap.from(heroBtn, { scale: 0.8, opacity: 0, duration: 0.8, delay: 1, ease: 'back.out(1.7)' });
}

// Animaciones al hacer scroll para secciones
const sections = document.querySelectorAll('section');

sections.forEach((section) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power2.out',
    stagger: 0.2
  });
});
