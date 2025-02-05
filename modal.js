// Datos de las películas y series
const peliculas = {
    app: {
        title: "Asesinato para Principiantes",
        tagline: "Un misterio atrapante por resolver.",
        year: "2021",
        rating: "13+ | violencia, lenguaje inapropiado",
        genres: "Series dramáticas, Thriller",
        description: "En este thriller atrapante, una estudiante investiga un caso ocurrido hace cinco años.",
        background: "Asesinato para principiantes.jpg",
        link: "app"
    }
};

// Función para abrir el modal con la info de la película/serie
function openModal(movieKey) {
    const modal = document.getElementById("infoModal");
    const movie = peliculas[movieKey];

    document.getElementById("modal-title").innerText = movie.title;
    document.getElementById("modal-tagline").innerText = movie.tagline;
    document.getElementById("modal-year").innerText = movie.year;
    document.getElementById("modal-rating").innerText = movie.rating;
    document.getElementById("modal-genres").innerText = movie.genres;
    document.getElementById("modal-description").innerText = movie.description;
    document.getElementById("modal-background").src = movie.background;
    document.getElementById("watch-button").href = movie.link;

    // Si es "Asesinato para Principiantes", mostrar dropdown
    if (movieKey === "app") {
        document.getElementById("season-dropdown-container").innerHTML = `
            <div class="season-dropdown">
                <button class="dropdown-button" onclick="toggleDropdown()">Temporada 1</button>
                <div class="dropdown-content">
                    <button onclick="loadEpisodes(1)">Temporada 1</button>
                    <button onclick="loadEpisodes(2)">Temporada 2 (Próximamente)</button>
                </div>
            </div>
        `;
        loadEpisodes(1);
    } else {
        document.getElementById("season-dropdown-container").innerHTML = "";
        document.getElementById("episodes-container").innerHTML = "";
    }

    modal.style.display = "block";
}

// Cerrar modal
document.querySelector(".close").addEventListener("click", () => {
    document.getElementById("infoModal").style.display = "none";
});

// Mostrar dropdown de temporadas
function toggleDropdown() {
    document.querySelector(".dropdown-content").classList.toggle("open");
}

// Cargar episodios de la temporada seleccionada
function loadEpisodes(season) {
    const episodesContainer = document.getElementById("episodes-container");
    episodesContainer.innerHTML = "";

    if (season === 1) {
        episodes[1].forEach(ep => {
            episodesContainer.innerHTML += `
                <div class="episode">
                    <img src="${ep.image}" alt="${ep.title}">
                    <div>
                        <h3>${ep.title}</h3>
                        <p>${ep.description}</p>
                        <p><strong>Duración:</strong> ${ep.duration}</p>
                    </div>
                </div>
            `;
        });
    } else {
        episodesContainer.innerHTML = "<p>La temporada 2 está en desarrollo.</p>";
    }
}

// Detectar clic en los botones "Más Información"
document.querySelectorAll(".moreinfobutton").forEach(button => {
    button.addEventListener("click", function() {
        const movieKey = this.getAttribute("data-movie");
        openModal(movieKey);
    });
});