// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Efeito de glow no header ao scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 0 50px rgba(255, 107, 53, 0.5)';
    } else {
        header.style.boxShadow = '0 0 30px rgba(255, 107, 53, 0.3)';
    }
});

// Tabs para notícias
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.tab-button').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
    });
});

// Animação ao carregar a página
window.addEventListener('load', function() {
    console.log('🎮 TALISMAN REBIRTH - Epic Gaming Platform Loaded!');
    console.log('⚔️ Welcome, Adventurer!');
    document.body.style.opacity = '1';
});

// Intersection Observer para animações ao scroll
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    document.querySelectorAll('.gallery-item, .news-item').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

observeElements();

console.log('✨ All systems operational. Get ready for the rebirth!');
