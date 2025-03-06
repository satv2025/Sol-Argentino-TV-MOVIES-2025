document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.querySelector('.search-form');
    const searchButton = searchForm.querySelector('button');
    const searchInput = document.getElementById('search'); // Campo de búsqueda
    const peliculas = document.querySelectorAll('.pelicula'); // Todas las películas en la página

    // Función para alternar la barra de búsqueda
    searchButton.addEventListener('click', function(e) {
        e.preventDefault(); // Evita que el formulario se envíe
        
        // Alternar la clase 'active' en el formulario
        searchForm.classList.toggle('active');

        // Si el campo de búsqueda está oculto, limpiamos su valor
        if (!searchForm.classList.contains('active')) {
            searchInput.value = "";
        }
    });

    // Función para filtrar las películas en tiempo real
    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();
        peliculas.forEach(pelicula => {
            const title = pelicula.querySelector('h3').textContent.toLowerCase();
            const description = pelicula.querySelector('p').textContent.toLowerCase();
            pelicula.style.display = (title.includes(query) || description.includes(query)) ? 'block' : 'none';
        });
    });