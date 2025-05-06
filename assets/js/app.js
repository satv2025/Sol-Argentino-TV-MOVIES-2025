document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    const searchButton = document.getElementById('toggleSearch');
    const searchInput = document.getElementById('search');
    const peliculas = document.querySelectorAll('.pelicula');

    // Prevenir que el formulario se envíe
    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
    });

    // Alternar la barra de búsqueda con animación de cierre al presionar el botón nuevamente
    searchButton.addEventListener('click', function(e) {
        e.preventDefault();
        searchForm.classList.toggle('active');

        if (!searchForm.classList.contains('active')) {
            searchInput.value = ""; // Limpiar el campo de búsqueda
            filtrarPeliculas(""); // Restaurar todas las películas
        }
    });

    // Filtrar películas en tiempo real
    searchInput.addEventListener('input', function() {
        filtrarPeliculas(searchInput.value.toLowerCase());
    });

    function filtrarPeliculas(query) {
        peliculas.forEach(pelicula => {
            const title = pelicula.querySelector('h3')?.textContent.toLowerCase() || "";
            const description = pelicula.querySelector('p')?.textContent.toLowerCase() || "";
            pelicula.style.display = (title.includes(query) || description.includes(query)) ? 'block' : 'none';
        });
    }
});