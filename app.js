document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    const searchButton = document.getElementById('toggleSearch');
    const searchInput = document.getElementById('search');
    const peliculas = document.querySelectorAll('.pelicula');

    // Prevenir que el formulario se envíe
    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
    });

    // Alternar la barra de búsqueda con animación de cierre
    searchButton.addEventListener('click', function(e) {
        e.preventDefault();
        if (searchForm.classList.contains('active')) {
            searchForm.classList.remove('active');
            searchForm.classList.add('inactive'); // Agrega animación de cierre
            setTimeout(() => {
                searchForm.classList.remove('inactive');
            }, 300); // Espera el tiempo de la animación para limpiar la clase
            searchInput.value = "";
            filtrarPeliculas("");
            searchButton.setAttribute('aria-expanded', "false");
        } else {
            searchForm.classList.add('active');
            searchButton.setAttribute('aria-expanded', "true");
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
            searchForm.classList.add('inactive'); // Agrega animación de cierre
            setTimeout(() => {
                searchForm.classList.remove('inactive');
            }, 300); // Espera el tiempo de la animación para limpiar la clase
            searchInput.value = "";
            filtrarPeliculas("");
            searchButton.setAttribute('aria-expanded', "false");
        }
    });
});