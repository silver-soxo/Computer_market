document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const offset = 100; // Получаем высоту верхнего меню
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset; // Вычисляем позицию якоря с учетом высоты меню
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('active');
});
