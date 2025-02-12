// Función para abrir el modal
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

// Función para cerrar el modal
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Cerrar el modal si se hace clic fuera de él
window.onclick = function(event) {
    var modals = document.querySelectorAll('.modal');
    modals.forEach(function(modal) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}

function verPelicula(url) {
    window.location.href = url;
}

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search'); // Campo de búsqueda
    const peliculasContainer = document.getElementById('peliculas-container'); // Contenedor de películas
    const peliculas = Array.from(document.querySelectorAll('.pelicula')); // Todas las películas en la página

    searchInput.addEventListener('input', function () {
        const query = searchInput.value.toLowerCase().trim();
        let hayResultados = false; // Para verificar si hay coincidencias

        peliculas.forEach(pelicula => {
            const title = pelicula.querySelector('h3').textContent.toLowerCase();
            const description = pelicula.querySelector('p').textContent.toLowerCase();
            
            if (title.includes(query) || description.includes(query)) {
                pelicula.style.display = 'flex'; // Muestra la película
                hayResultados = true;
            } else {
                pelicula.style.display = 'none'; // Oculta la película
            }
        });

        // Muestra u oculta el contenedor según haya resultados
        peliculasContainer.style.display = hayResultados ? 'flex' : 'none';
    });
});