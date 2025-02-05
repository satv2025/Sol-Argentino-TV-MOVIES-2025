// Definir los datos de cada película
const peliculas = {
    matiponcepeli: {
        year: "2022",
        duration: "1h",
        description: "Matías Ponce, creador de contenido en redes, se enfrenta a alienígenas y hackers tras la misteriosa suspensión de su canal de YouTube, o como él lo llama \"Yutun\", desatando una hilarante y absurda aventura.",
        createdBy: "Matias Ponce",
        cast: "Matias Ponce, Santino Ponce, Indio Ponce, Antonella Ponce, Valeria Volpi, Julieta",
        script: "Matias Ponce",
        genres: "Humor, humor absurdo, hackers, fama, grandes élites, paranoia, haters, YouTube",
        titleType: "Original, delirante",
        ageRating: "12+, adolescentes, adultos, lenguaje inapropiado, delirante | Apta para mayores de 16 años",
        background: "maxresdefault.jpg",
        link: "matiponcepeli"
    },
    cienporcientolucha: {
        year: "2008 y 2009",
        duration: "80-85 mins por película",
        description: "Los productores detrás del famoso programa 100% Lucha decidieron hacerle películas.",
        createdBy: "Eduardo Husni",
        cast: "Norberto Adrián Fernandez, Marcelo Benítez, Miguel Ángel Wellington, Rubén Piuselli, Daniel Garcilazo, Paulo Giardina, Gabriel Emanuelli, Leonardo Montero, Eduardo Husni, Osvaldo Principi, Carlos Kaspar, Julio Mario Sibara (Turco Naím)",
        script: "CineAR",
        genres: "Humor, lucha libre, luchas clandestinas, apuestas, secuestros, traiciones",
        titleType: "Intenso, Íntimo, Delirante, Divertido",
        ageRating: "12+ lenguaje inapropiado, daños físicos, humor absurdo",
        curiosity: "En el 2011 iba a salir una tercera película, pero debido a la cancelación del programa, se canceló por ende también la tercera película",
        background: "https://www.mediafire.com/convkey/4a6d/478xmus1d6v68eh9g.jpg?size_id=6",
        link: "cienporcientolucha"
    },
    app: {
        year: "2024",
        seasons: "1",
        episodes: "6",
        description: "En este thriller atrapante, una estudiante investiga, para un proyecto escolar, un caso ocurrido hace cinco años.",
        createdBy: "Poppy Cogan",
        cast: "Emma Myers Zain Iqbal, Asha Banks, Raiko Gohara, Jude Morgan-Collie, Yali Topol Margalith, Yasmin Al-Khudhairi, Henry Ashton, Carla Woodcock, Mathew Baynton, Gary Beadle, Anna Maxwell Martin",
        script: "Poppy Cogan, Ruby Thomas, Zia Ahmed, Ajoke Ibironke",
        genres: "Series dramáticas, De Gran Bretaña, Series basadas en libros",
        titleType: "Íntimo, Sombrío, De suspenso",
        ageRating: "16+ lenguaje inapropiado, drogas, violencia sexual | Apta para mayores de 16 años",
        curiosity: "ES OFICIAL: Una nueva temporada se acerca",
        background: "Asesinato para principiantes.jpg",
        link: "app"
    }
};

// Función para abrir el modal y cargar los datos
function openModal(movieKey) {
    const modal = document.getElementById("infoModal");
    const movie = peliculas[movieKey];

    if (!movie) return;

    // Cargar los datos de la película en el modal
    document.getElementById("modal-year").innerText = `Año: ${movie.year}`;
    document.getElementById("modal-duration").innerText = `Duración: ${movie.duration || "N/A"}`;
    document.getElementById("modal-description").innerText = movie.description;
    document.getElementById("modal-createdBy").innerText = `Creado por: ${movie.createdBy}`;
    document.getElementById("modal-cast").innerText = `Elenco: ${movie.cast}`;
    document.getElementById("modal-script").innerText = `Guión: ${movie.script}`;
    document.getElementById("modal-genres").innerText = `Géneros: ${movie.genres}`;
    document.getElementById("modal-titleType").innerText = `Este título es: ${movie.titleType}`;
    document.getElementById("modal-ageRating").innerText = `Clasificación por edad: ${movie.ageRating}`;
    document.getElementById("modal-curiosity").innerText = movie.curiosity || "";
    document.getElementById("modal-background").src = movie.background;
    document.getElementById("watch-button").href = movie.link;

    // Mostrar el modal
    modal.style.display = "block";

    // Añadir clase para ocultar el scroll del body
    document.body.classList.add("modal-open");
}

// Función para cerrar el modal
document.querySelector(".close").addEventListener("click", () => {
    // Ocultar el modal
    document.getElementById("infoModal").style.display = "none";

    // Quitar la clase para mostrar el scroll del body
    document.body.classList.remove("modal-open");
});

// Detectar clic en los botones "Más Información"
document.querySelectorAll(".moreinfobutton").forEach(button => {
    button.addEventListener("click", function() {
        const movieKey = this.getAttribute("data-movie");
        openModal(movieKey);
    });
});