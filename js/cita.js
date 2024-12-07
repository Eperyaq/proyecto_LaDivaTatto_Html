// Seleccionamos el enlace de "Pide tu cita"
const citaLink = document.querySelector('.menu .cita');
const dropdown = document.querySelector('.menu .dropdown');

// Seleccionamos el enlace de la bandera (para cambiar el idioma)
const paisLink = document.querySelector('.menu .pais');
const dropdownPaisesMenu = document.querySelector('.menu .dropdown-paises');

// Añadimos un evento de clic para alternar la visibilidad del desplegable
citaLink.addEventListener('click', function(event) {
    // Prevenir el comportamiento por defecto del enlace (evitar el desplazamiento de página)
    event.preventDefault();
    
    // Alternamos la clase 'active' que mostrará/ocultará el dropdown
    citaLink.classList.toggle('active');
});


// Añadimos un evento al documento para cerrar el desplegable si se hace clic fuera
document.addEventListener('click', function (event) {
    // Verificamos si el clic ocurrió fuera del enlace "Pide tu cita" y del desplegable
    if (!citaLink.contains(event.target) && !dropdown.contains(event.target)) {
        citaLink.classList.remove('active'); // Cerramos el desplegable
    }
});

//IDIOMAS

// Añadimos un evento de clic para alternar la visibilidad del desplegable de idiomas
paisLink.addEventListener('click', function(event) {
    event.preventDefault();
    
    // Alternamos la clase 'active' en el enlace y mostramos/ocultamos el desplegable
    paisLink.classList.toggle('active');
});

// Cerramos el menú de países si se hace clic fuera
document.addEventListener('click', function (event) {
    // Verificamos si el clic ocurrió fuera del enlace y del dropdown de países
    if (!paisLink.contains(event.target) && !dropdownPaisesMenu.contains(event.target)) {
        paisLink.classList.remove('active'); // Quitamos la clase del enlace
        dropdownPaisesMenu.classList.remove('active'); // Ocultamos el desplegable
    }
});