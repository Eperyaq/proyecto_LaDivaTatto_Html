// Seleccionamos el enlace de "Pide tu cita"
const citaLink = document.querySelector('.menu .cita');

// Añadimos un evento de clic para alternar la visibilidad del desplegable
citaLink.addEventListener('click', function(event) {
    // Prevenir el comportamiento por defecto del enlace (evitar el desplazamiento de página)
    event.preventDefault();
    
    // Alternamos la clase 'active' que mostrará/ocultará el dropdown
    citaLink.classList.toggle('active');
});