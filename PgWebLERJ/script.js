document.addEventListener('DOMContentLoaded', () => {

    // ======== DARK MODE TOGGLE ========
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    const body = document.body;

    // Función para aplicar el tema
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }
    };

    // Detectar preferencia del sistema
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Cargar tema guardado o usar preferencia del sistema
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    } else if (prefersDarkScheme.matches) {
        applyTheme('dark');
    } else {
        applyTheme('light');
    }
    
    // Listener para el botón de cambio de tema
    themeToggle.addEventListener('click', () => {
        const currentTheme = localStorage.getItem('theme') || (prefersDarkScheme.matches ? 'dark' : 'light');
        applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });


    // ======== SMOOTH SCROLL PARA LINKS DE NAVEGACIÓN ========
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // ======== SIMULACIÓN DE ENVÍO DE FORMULARIO ========
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevenir el envío real
        
        // Simular validación simple
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert('¡Mensaje enviado con éxito! 📧');
            contactForm.reset(); // Limpiar el formulario
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });

});