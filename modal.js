// Definir los datos de cada película
const peliculas = {
    matiponcepeli: {
        year: "2022",
        duration: "1h",
        description: "Matías Ponce, creador de contenido en redes, se enfrenta a alienígenas y hackers tras la misteriosa suspensión de su canal de YouTube, o como él lo llama 'Yutun', desatando una hilarante y absurda aventura.",
        createdBy: "<strong>Creado por:</strong> Matias Ponce",
        cast: "<strong>Elenco:</strong> Matias Ponce, Santino Ponce, Indio Ponce, <a>más</a>",
        title: "Acerca de Matias Ponce - La Película",
        script: "<strong>Guión:</strong> Matias Ponce",
        genres: "<strong>Géneros:</strong> Humor, humor absurdo, hackers, fama, grandes élites, paranoia, haters, YouTube",
        titleType: "<strong>Este título es:</strong> Original, delirante",
        ageRating: "<span class='age'>16+</span> adolescentes, adultos, lenguaje inapropiado, delirante | Apta para mayores de 16 años",
        background: "maxresdefault.jpg",
        link: "#"
    },
    cienporcientolucha: {
        year: "2008-09",
        duration: "1h 20m (por película)",
        description: "Los productores detrás del famoso programa 100% Lucha decidieron hacerle películas.",
        createdBy: "<strong>Creado por:</strong> Eduardo Husni",
        cast: "<strong>Elenco:</strong> Daniel Garcilazo, Paulo Giardina, Gabriel Emanuelli, <a>más</a>",
        title: "Acerca de 100%Lucha - Las Películas",
        script: "<strong>Guión:</strong> CineAR",
        genres: "<strong>Géneros:</strong> Humor, lucha libre, luchas clandestinas, apuestas, secuestros, traiciones",
        titleType: "<strong>Este título es:</strong> Intenso, Íntimo, Delirante, Divertido",
        ageRating: "<span class='age'>12+</span> lenguaje inapropiado, daños físicos, humor absurdo",
        curiosity: "<strong>En el 2011 iba a salir una tercera película, pero el programa fue cancelado</strong>",
        background: "https://www.mediafire.com/convkey/4a6d/478xmus1d6v68eh9g.jpg?size_id=6",
        link: "#"
    },
    app: {
        year: "2024",
        duration: "6 episodios",
        description: "En este thriller atrapante, una estudiante investiga, para un proyecto escolar, un caso ocurrido hace cinco años.",
        createdBy: "<strong>Creado por:</strong> Poppy Cogan",
        cast: "<strong>Elenco:</strong> Emma Myers, Zain Iqbal, Asha Banks, <a>más</a>",
        title: "Acerca de Asesinato Para Principiantes",
        script: "<strong>Guión:</strong> Poppy Cogan, Ruby Thomas, Zia Ahmed, Ajoke Ibironke",
        genres: "<strong>Géneros:</strong> Series dramáticas, De Gran Bretaña, Series basadas en libros",
        titleType: "<strong>Este título es:</strong> Íntimo, Sombrío, De suspenso",
        ageRating: "<span class='age'>16+</span> lenguaje inapropiado, drogas, violencia sexual | Apta para mayores de 16 años",
        curiosity: "<strong>Es oficial: Se estrenará otra temporada</strong>",
        background: "Asesinato para principiantes.jpg",
        link: "#"
    }
};

// Función para abrir el modal y cargar los datos
function openModal(movieKey) {
    const modal = document.getElementById("infoModal");
    const movie = peliculas[movieKey];

    if (!movie) return;

    // Cargar los datos de la película en el modal
    document.getElementById("modal-background").src = movie.background;
    document.getElementById("modal-title").innerText = movie.title;
    document.getElementById("modal-year").innerHTML = movie.year;
    document.getElementById("modal-description").innerText = movie.description;
    document.getElementById("modal-createdBy").innerHTML = movie.createdBy;
    document.getElementById("modal-cast").innerHTML = movie.cast;
    document.getElementById("modal-script").innerHTML = movie.script;
    document.getElementById("modal-genres").innerHTML = movie.genres;
    document.getElementById("modal-titleType").innerHTML = movie.titleType;
    document.getElementById("modal-ageRating").innerHTML = movie.ageRating;
    document.getElementById("modal-curiosity").innerHTML = movie.curiosity || "";

    // Enlace del botón "Reproducir"
    document.getElementById("watch-button").href = movie.link;

    // Mostrar el modal
    modal.style.display = "block";

    // Añadir clase para ocultar el scroll del body
    document.body.classList.add("modal-open");
}

// Función para cerrar el modal
document.querySelector(".close").addEventListener("click", () => {
    document.getElementById("infoModal").style.display = "none";
    document.body.classList.remove("modal-open");
});

// Detectar clic en los botones "Más Información"
document.querySelectorAll(".moreinfobutton").forEach(button => {
    button.addEventListener("click", function() {
        const movieKey = this.getAttribute("data-movie");
        openModal(movieKey);
    });
});