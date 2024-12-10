
document.addEventListener("DOMContentLoaded", () => {
    const service = new google.maps.places.PlacesService(document.createElement('div'));
    const request = {
        placeId: 'ChIJyYqBjqIlRgwRgoMcgVd77zM',
        fields: ['name', 'rating', 'reviews'],
        language:'de'
    };

    // Selecciona el contenedor donde se agregarán las reseñas
    const reviewsContainer = document.getElementById('reviews-container');

    service.getDetails(request, (place, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            console.log("Detalles del lugar:", place);

            const reviews = place.reviews;
            if (reviews && reviews.length > 0) {
                // Limpia el contenedor (por si ya tenía contenido)
                reviewsContainer.innerHTML = "";

                // Itera sobre cada reseña y crea un div
                reviews.forEach(review => {
                    const reviewDiv = document.createElement('div');
                    reviewDiv.classList.add('review'); // Agrega una clase para estilizar
                    reviewDiv.innerHTML = `
                        <p><strong>${review.author_name}</strong></p>
                        <p>${review.text}</p>
                    `;
                    reviewsContainer.appendChild(reviewDiv); // Agrega el div al contenedor
                });
            } else {
                reviewsContainer.innerHTML = '<p>No hay reseñas disponibles.</p>';
            }
        } else {
            console.error('Error al obtener los detalles:', status);
            reviewsContainer.innerHTML = '<p>Error al cargar las reseñas.</p>';
        }
    });
});
