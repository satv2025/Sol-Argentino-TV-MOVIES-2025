// Datos de las películas y series
const peliculas = {
    matiponcepeli: {
        year: "2022",
        duration: "1h",
        description: "Matías Ponce, creador de contenido en redes, se enfrenta a alienígenas y hackers tras la misteriosa suspensión de su canal de YouTube, o como él lo llama 'Yutun', desatando una hilarante y absurda aventura.",
        createdBy: "<strong>Creado por:</strong> Matias Ponce",
        cast: "<strong>Elenco:</strong> Matias Ponce, Santino Ponce, Indio Ponce, <a>más</a>",
        title: "Acerca de Matias Ponce - La Película",
        script: "<strong>Guión:</strong> Matias Ponce",
        genres: "<strong>Géneros:</strong> Humor, humor absurdo, hackers, fama, grandes élites",
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
        genres: "<strong>Géneros:</strong> Humor, lucha libre, luchas clandestinas",
        titleType: "<strong>Este título es:</strong> Intenso, Íntimo, Delirante, Divertido",
        ageRating: "<span class='age'>12+</span> lenguaje inapropiado, daños físicos, humor absurdo",
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
        episodelist: "<strong class='eplist'>Episodios</strong>",
        script: "<strong>Guión:</strong> Poppy Cogan, Ruby Thomas, Zia Ahmed, Ajoke Ibironke",
        genres: "<strong>Géneros:</strong> Series dramáticas, De Gran Bretaña, Series basadas en libros",
        titleType: "<strong>Este título es:</strong> Íntimo, Sombrío, De suspenso",
        ageRating: "<span class='age'>16+</span> lenguaje inapropiado, drogas, violencia sexual",
        curiosity: "<strong class='curiosidad'>Es oficial: Se estrenará otra temporada</strong>",
        background: "https://occ-0-2443-1380.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABVp5EI24Pn-MhqBfRt6inhEm3YWfGw1YvxCWHJG7OhVZ9_F_9fV814k46BJ6cRj99iPL2YS_FxacJ6-qFRBAs-yS6ktTfnrTAYFh.webp?r=d16",
        link: "#",
        seasons: `
            <div class="season-dropdown">
                <button class="dropdown-button">Seleccionar Temporada</button>
                <div class="dropdown-content">
                    <button class="texto" onclick="changeSeason(1)"><span>Temporada 1</span></button>
                    <span class="episode-count">6 episodios</span>
                    <button class="texto" onclick="changeSeason(2)"><span>Temporada 2</span></button>
                    <span class="episode-count">Coming Soon</span>
                </div>
            </div>
            <div class="episodios">
                <h2>Lista de Episodios</h2>
                <ul id="episode-list"></ul>
            </div>
        `
    }
};

// Datos de episodios por temporada
const episodios = {
    1: [
        {
            title: "Episodio 1",
            description: "Pip elige un caso de homicidio para su proyecto escolar. Pero cuando empieza a investigar, descubre que para algunas personas era mejor dejarlo enterrado para siempre.",
            image: "https://www.mediafire.com/convkey/8ebd/67e8toxnggmojw09g.jpg",
            duration: "43 min"
        },
        {
            title: "Episodio 2",
            description: "Luego de entrevistar a las mejores amigas de Andie, Pip tiene una idea más clara de quién era la víctima, pero tras reorganizar fotos viejas empieza a comprender mejor todo.",
            image: "https://www.mediafire.com/convkey/88d0/o7ja6efkgc857oo9g.jpg",
            duration: "44 min"
        },
        {
            title: "Episodio 3",
            description: "Pip descubre por primera vez en su vida el lado oscuro cuando va a una fiesta clandestina. Y su siguiente pista la lleva a territorio aún más peligroso.",
            image: "https://www.mediafire.com/convkey/6ed1/6870czca0karqn29g.jpg",
            duration: "43 min"
        },
        {
            title: "Episodio 4",
            description: "Pip y Ravi siguen una nueva pista que los lleva lejos de Little Kilton. Allí, descubren una valiosa prueba... y una desagradable sorpresa.",
            image: "https://www.mediafire.com/convkey/0de9/czivzlrwjyr2rlj9g.jpg",
            duration: "44 min"
        },
        {
            title: "Episodio 5",
            description: "Una impactante confesión arroja luz en la investigación. Antes de que Pip pueda decidir qué hacer, recibe otro mensaje amenazador.",
            image: "https://occ-0-2442-1380.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABeED_UJixLwFl5Ln39ljb3EY3B-_bE2aisB_eLtQVDlnZTf_vQ3hbjJseEWVQtQR3_xSoTLDsQaJqB20WoXVRq4ALdwp2VwxqDgvq9ssa8GfB9Ed925tZ5zk.jpg?r=2f5",
            duration: "50 min"
        },
        {
            title: "Episodio 6",
            description: "La policía hace un arresto, pero Pip no está segura de que el caso esté solucionado, así que va a visitar a la única persona que podría tener respuestas.",
            image: "https://www.mediafire.com/convkey/0869/05fmkuq6l9kj4159g.jpg",
            duration: "51 min"
        }
    ],
    2: [
        {
            title: "Coming Soon...",
            description: "La temporada 2 aún no tiene episodios confirmados.",
            image: "https://www.mediafire.com/convkey/4a6d/478xmus1d6v68eh9g.jpg?size_id=6",
            duration: "?? min"
        }
    ]
};

// Detectar clic en los botones "Más Información"
document.querySelectorAll(".moreinfobutton").forEach(button => {
    button.addEventListener("click", function(event) {
        const movieKey = this.getAttribute("data-movie");
        openModal(movieKey);
    });
});

// Función para abrir el modal y cargar los datos de la serie o película
function openModal(movieKey) {
    const modal = document.getElementById("infoModal");
    const movie = peliculas[movieKey];

    if (!movie) return;

    // Cargar los datos de la película o serie en el modal
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
    document.getElementById("modal-duration").innerText = movie.duration;
    document.getElementById("modal-episodelist").innerHTML = movie.episodelist || "";
    document.getElementById("modal-seasons").innerHTML = movie.seasons || "";
    document.getElementById("watch-button").href = movie.link;

    // Mostrar el modal
    modal.style.display = "block";
    document.body.classList.add("modal-open");

    // Solo cargar episodios si la serie es "app" (Asesinato Para Principiantes)
    if (movieKey === "app") {
        // Cargar episodios de la temporada 1 por defecto
        changeSeason(1);
    } else {
        // Limpiar la lista de episodios para películas y otras series
        const episodeList = document.getElementById("episode-list");
        episodeList.innerHTML = ""; // Limpia la lista de episodios
    }
}

// Función para cerrar el modal al hacer clic en el botón de cierre
document.querySelector(".close-button").addEventListener("click", () => {
    const modal = document.getElementById("infoModal");
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
});

// Función para cerrar el modal al hacer clic fuera de la caja de contenido
document.addEventListener("click", (event) => {
    const modal = document.getElementById("infoModal");
    const modalContent = document.querySelector(".modal-content");

    // Solo cerrar el modal si el clic es fuera de la caja de contenido
    if (modal.style.display === "block" && !modalContent.contains(event.target)) {
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
    }
});

// Función para cerrar el modal al presionar la tecla Esc
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        const modal = document.getElementById("infoModal");
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
    }
});