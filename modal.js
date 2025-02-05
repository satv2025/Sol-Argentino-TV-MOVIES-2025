// Definir los datos de cada película
const peliculas = {
    matiponcepeli: {
        title: "Matias Ponce - La Película",
        year: "<strong>Año:</strong> 2022",
        duration: "<strong>Duración:</strong> 1h",
        description: "Matías Ponce, creador de contenido en redes, se enfrenta a alienígenas y hackers tras la misteriosa suspensión de su canal de YouTube, o como él lo llama 'Yutun', desatando una hilarante y absurda aventura.",
        createdBy: "<strong>Creado por:</strong> Matias Ponce",
        cast: "<strong>Elenco:</strong> Matias Ponce, Santino Ponce, Indio Ponce, Antonella Ponce, Valeria Volpi, Julieta",
        script: "<strong>Guión:</strong> Matias Ponce",
        genres: "<strong>Géneros:</strong> Humor, humor absurdo, hackers, fama, grandes élites, paranoia, haters, YouTube",
        titleType: "<strong>Este título es:</strong> Original, delirante",
        ageRating: "<strong>Clasificación por edad:</strong> 12+, adolescentes, adultos, lenguaje inapropiado, delirante | Apta para mayores de 16 años",
        background: "maxresdefault.jpg",
        link: "#"
    },
    cienporcientolucha: {
        title: "100% Lucha - Las Películas",
        year: "<strong>Año:</strong> 2008 y 2009",
        duration: "<strong>Duración:</strong> 80-85 mins por película",
        description: "Los productores detrás del famoso programa 100% Lucha decidieron hacerle películas.",
        createdBy: "<strong>Creado por:</strong> Eduardo Husni",
        cast: "<strong>Elenco:</strong> Norberto Adrián Fernandez, Marcelo Benítez, Miguel Ángel Wellington, Rubén Piuselli, Daniel Garcilazo, Paulo Giardina, Gabriel Emanuelli, Leonardo Montero, Eduardo Husni, Osvaldo Principi, Carlos Kaspar, Julio Mario Sibara (Turco Naím)",
        script: "<strong>Guión:</strong> CineAR",
        genres: "<strong>Géneros:</strong> Humor, lucha libre, luchas clandestinas, apuestas, secuestros, traiciones",
        titleType: "<strong>Este título es:</strong> Intenso, Íntimo, Delirante, Divertido",
        ageRating: "<strong>Clasificación por edad:</strong> 12+ lenguaje inapropiado, daños físicos, humor absurdo",
        curiosity: "<strong>Curiosidad:</strong> En el 2011 iba a salir una tercera película, pero debido a la cancelación del programa, se canceló por ende también la tercera película",
        background: "https://www.mediafire.com/convkey/4a6d/478xmus1d6v68eh9g.jpg?size_id=6",
        link: "#"
    },
    app: {
        title: "Asesinato para Principiantes",
        year: "<strong>Año:</strong> 2024",
        seasons: "<strong>Temporadas:</strong> 1",
        episodes: "<strong>Episodios:</strong> 6",
        description: "En este thriller atrapante, una estudiante investiga, para un proyecto escolar, un caso ocurrido hace cinco años.",
        createdBy: "<strong>Creado por:</strong> Poppy Cogan",
        cast: "<strong>Elenco:</strong> Emma Myers, Zain Iqbal, Asha Banks, Raiko Gohara, Jude Morgan-Collie, Yali Topol Margalith, Yasmin Al-Khudhairi, Henry Ashton, Carla Woodcock, Mathew Baynton, Gary Beadle, Anna Maxwell Martin",
        script: "<strong>Guión:</strong> Poppy Cogan, Ruby Thomas, Zia Ahmed, Ajoke Ibironke",
        genres: "<strong>Géneros:</strong> Series dramáticas, De Gran Bretaña, Series basadas en libros",
        titleType: "<strong>Este título es:</strong> Íntimo, Sombrío, De suspenso",
        ageRating: "<strong>Clasificación por edad:</strong> 16+ lenguaje inapropiado, drogas, violencia sexual | Apta para mayores de 16 años",
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