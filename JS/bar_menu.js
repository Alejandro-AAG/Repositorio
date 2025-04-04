// Función para alternar el menú
function toggleMenu() {
    const barMenu = document.querySelector('.bar_menu');
    barMenu.classList.toggle('active');
    
    // Mostrar u ocultar el overlay
    const overlay = document.querySelector('.overlay');
    overlay.style.display = barMenu.classList.contains('active') ? 'block' : 'none';
}

// Función para cerrar el menú al hacer clic fuera de él o en el botón de cierre
function closeMenu() {
    const barMenu = document.querySelector('.bar_menu');
    barMenu.classList.remove('active');
    
    // Ocultar el overlay
    const overlay = document.querySelector('.overlay');
    overlay.style.display = 'none';
}
