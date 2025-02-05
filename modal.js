// Definir los datos de cada película
const peliculas = {
    matiponcepeli: {
        year: "2022",
        duration: "1h",
        description: "Matías Ponce, creador de contenido en redes, se enfrenta a alienígenas y hackers tras la misteriosa suspensión de su canal de YouTube, o como él lo llama 'Yutun', desatando una hilarante y absurda aventura.",
        fullcreatedBy: "<strong>Creado por:</strong> Matias Ponce",
        shortCast: "Matías Ponce, Santino Ponce, Indio Ponce, <a href='#' class='moreinfobuttona' data-movie='matiponcepeli'><em>Más</em></a>",  // Añadido "más"
        fullcast: "<strong>Elenco:</strong> Matias Ponce, Santino Ponce, Indio Ponce, Antonella Ponce, Valeria Volpi, Julieta",
        fullscript: "<strong>Guión:</strong> Matias Ponce",
        fullgenres: "<strong>Géneros:</strong> Humor, humor absurdo, hackers, fama, grandes élites, paranoia, haters, YouTube",
        genres: "<strong>Géneros:</strong> Humor, humor absurdo, hackers, fama, grandes élites, paranoia, haters, YouTube",
        titleType: "<strong>Este título es:</strong> Original, delirante",
        ageRating: "<strong>Clasificación por edad:</strong> 12+, adolescentes, adultos, lenguaje inapropiado, delirante | Apta para mayores de 16 años",
        background: "maxresdefault.jpg",
        link: "#"
    },
    cienporcientolucha: {
        year: "2008-09",
        duration: "1h 20m (por película)",
        description: "Los productores detrás del famoso programa 100% Lucha decidieron hacerle películas.",
        fullcreatedBy: "<strong>Creado por:</strong> Eduardo Husni",
        shortCast: "Norberto Adrián Fernandez, Marcelo Benítez, Miguel Ángel Wellington <a href='#' class='moreinfobuttona' data-movie='cienporcientolucha'><em>Más</em></a>",  // Añadido "más"
        fullcast: "<strong>Elenco:</strong> Norberto Adrián Fernandez, Marcelo Benítez, Miguel Ángel Wellington, Rubén Piuselli, Daniel Garcilazo, Paulo Giardina, Gabriel Emanuelli, Leonardo Montero, Eduardo Husni, Osvaldo Principi, Carlos Kaspar, Julio Mario Sibara (Turco Naím)",
        fullscript: "<strong>Guión:</strong> CineAR",
        fullgenres: "<strong>Géneros:</strong> Humor, lucha libre, luchas clandestinas, apuestas, secuestros, traiciones",
        genres: "<strong>Géneros:</strong> Humor, lucha libre, luchas clandestinas, apuestas, secuestros, traiciones",
        titleType: "<strong>Este título es:</strong> Intenso, Íntimo, Delirante, Divertido",
        ageRating: "<strong>Clasificación por edad:</strong> 12+ lenguaje inapropiado, daños físicos, humor absurdo",
        curiosity: "<strong>Curiosidad:</strong> En el 2011 iba a salir una tercera película, pero debido a la cancelación del programa, se canceló por ende también la tercera película",
        background: "https://www.mediafire.com/convkey/4a6d/478xmus1d6v68eh9g.jpg?size_id=6",
        link: "#"
    },
    app: {
        year: "2024",
        duration: "6 episodios",
        description: "En este thriller atrapante, una estudiante investiga, para un proyecto escolar, un caso ocurrido hace cinco años.",
        createdBy: "<strong>Creado por:</strong> Poppy Cogan",
        shortCast: "Emma Myers, Zain Iqbal, Asha Banks <a href='#' class='moreinfobuttona' data-movie='app'><em>Más</em></a>",
        fullcast: "<strong>Elenco:</strong> Emma Myers, Zain Iqbal, Asha Banks, Raiko Gohara, Jude Morgan-Collie, Yali Topol Margalith, Yasmin Al-Khudhairi, Henry Ashton, Carla Woodcock, Mathew Baynton, Gary Beadle, Anna Maxwell Martin",
        fullscript: "<strong>Guión:</strong> Poppy Cogan, Ruby Thomas, Zia Ahmed, Ajoke Ibironke",
        fullgenres: "<strong>Géneros:</strong> Series dramáticas, De Gran Bretaña, Series basadas en libros",
        genres: "<strong>Géneros:</strong> Series dramáticas, De Gran Bretaña, Series basadas en libros",
        titleType: "<strong>Este título es:</strong> Íntimo, Sombrío, De suspenso",
        fullageRating: "<strong>Clasificación por edad:</strong> 16+ lenguaje inapropiado, drogas, violencia sexual | Apta para mayores de 16 años",
        curiosity: "<strong>Curiosidad:</strong> ES OFICIAL: Una nueva temporada se acerca",
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
    document.getElementById("modal-cast").innerHTML = movie.shortCast + " <a href='#' class='moreinfobutton' data-movie='" + movieKey + "'><em>Más</em></a>";
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