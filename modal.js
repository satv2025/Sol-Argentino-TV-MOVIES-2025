// Definir los datos de cada película
const peliculas = {
    matiponcepeli: {
        title: "Matias Ponce - La Pelicula",
        tagline: "Un enfrentamiento con alienígenas y hackers.",
        year: "2023",
        rating: "PG-13 | Ciencia ficción, Acción",
        genres: "Aventura, Ciencia ficción",
        description: "Matías Ponce, creador de contenido en redes, se enfrenta a alienígenas y hackers tras la misteriosa suspensión de su canal de YouTube.",
        background: "maxresdefault.jpg",
        link: "https://www.youtube.com/"
    },
    cienporcientolucha: {
        title: "100% Lucha - Las Películas",
        tagline: "La lucha no termina en el ring.",
        year: "2008",
        rating: "ATP | Acción, Deportes",
        genres: "Acción, Deportes",
        description: "Los productores detrás del famoso programa 100% Lucha decidieron hacerle películas.",
        background: "https://www.mediafire.com/convkey/4a6d/478xmus1d6v68eh9g.jpg?size_id=6",
        link: "https://www.netflix.com/"
    },
    app: {
        title: "Asesinato para Principiantes",
        tagline: "Un thriller atrapante.",
        year: "2021",
        rating: "16+ | Thriller, Drama",
        genres: "Suspenso, Drama",
        description: "En este thriller atrapante, una estudiante investiga un caso ocurrido hace cinco años.",
        background: "Asesinato para principiantes.jpg",
        link: "https://www.primevideo.com/"
    }
};

// Función para abrir el modal y cargar los datos
function openModal(movieKey) {
    const modal = document.getElementById("infoModal");
    const movie = peliculas[movieKey];

    if (!movie) return;

    document.getElementById("modal-title").innerText = movie.title;
    document.getElementById("modal-tagline").innerText = movie.tagline;
    document.getElementById("modal-year").innerText = movie.year;
    document.getElementById("modal-rating").innerText = movie.rating;
    document.getElementById("modal-genres").innerText = movie.genres;
    document.getElementById("modal-description").innerText = movie.description;
    document.getElementById("modal-background").src = movie.background;
    document.getElementById("watch-button").href = movie.link;

    modal.style.display = "block";
}

// Función para cerrar el modal
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