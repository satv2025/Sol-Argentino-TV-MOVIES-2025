// Datos de películas y series
const peliculas = {
    matiponcepeli: {
        title: "Matias Ponce - La Pelicula",
        description: "Matías Ponce, creador de contenido en redes, se enfrenta a alienígenas y hackers tras la misteriosa suspensión de su canal de YouTube.",
        link: "matiponcepeli"
    },
    cienporcientolucha: {
        title: "100% Lucha - Las Peliculas",
        description: "Los productores detrás del famoso programa 100% Lucha decidieron hacerle películas.",
        link: "cienporcientolucha"
    },
    app: {
        title: "Asesinato para Principiantes",
        description: "En este thriller atrapante, una estudiante investiga un caso ocurrido hace cinco años.",
        link: "app"
    }
};

// Función para abrir el modal
function openModal(movieKey) {
    const modal = document.getElementById("infoModal");
    const title = document.getElementById("modal-title");
    const description = document.getElementById("modal-description");
    const watchButton = document.getElementById("watch-button");
    const dropdownContainer = document.getElementById("season-dropdown-container");
    const episodesContainer = document.getElementById("episodes-container");

    const movie = peliculas[movieKey];
    title.innerText = movie.title;
    description.innerText = movie.description;
    watchButton.href = movie.link;

    // Si es "Asesinato para Principiantes", agregar dropdown
    if (movieKey === "app") {
        dropdownContainer.innerHTML = `
            <div class="season-dropdown">
                <button class="dropdown-button" onclick="toggleDropdown()">Seleccionar Temporada</button>
                <div class="dropdown-content">
                    <button onclick="loadEpisodes(1)">Temporada 1</button>
                    <button onclick="loadEpisodes(2)">Temporada 2 (Próximamente)</button>
                </div>
            </div>
        `;
        episodesContainer.innerHTML = ""; // Limpiar episodios anteriores
    } else {
        dropdownContainer.innerHTML = ""; // Ocultar dropdown en otras películas
        episodesContainer.innerHTML = ""; // Limpiar episodios
    }

    modal.style.display = "block";
}

// Cerrar modal al hacer clic en la "X"
document.querySelector(".close").addEventListener("click", () => {
    document.getElementById("infoModal").style.display = "none";
});

// Detectar clic en los botones "Más Información"
document.querySelectorAll(".moreinfobutton").forEach(button => {
    button.addEventListener("click", function() {
        const movieKey = this.getAttribute("data-movie");
        openModal(movieKey);
    });
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
                    <img src="${ep.image}" alt="${ep.title}" width="150">
                    <h3>${ep.title}</h3>
                    <p>${ep.description}</p>
                    <p><strong>Duración:</strong> ${ep.duration}</p>
                </div>
            `;
        });
    } else {
        episodesContainer.innerHTML = "<p>La temporada 2 está en desarrollo.</p>";
    }
}