document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.querySelector('.search-form');
    const searchButton = document.getElementById('toggleSearch');
    const searchInput = document.getElementById('search');
    const peliculas = document.querySelectorAll('.pelicula');

    // Alternar la barra de búsqueda
    searchButton.addEventListener('click', function(e) {
        e.preventDefault();
        const isActive = searchForm.classList.toggle('active');
        searchButton.setAttribute('aria-expanded', isActive);
        
        if (!isActive) {
            searchInput.value = "";
            filtrarPeliculas("");
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

    // Cerrar barra de búsqueda al hacer clic fuera
    document.addEventListener('click', function(event) {
        if (!searchForm.contains(event.target) && searchForm.classList.contains('active')) {
            searchForm.classList.remove('active');
            searchButton.setAttribute('aria-expanded', "false");
            searchInput.value = "";
            filtrarPeliculas("");
        }
    });
});