// Datos de las películas y series
const peliculas = {
    matiponcepeli: {
        year: "2022",
        duration: "1h",
        description: "Matías Ponce, creador de contenido en redes, se enfrenta a alienígenas y hackers tras la misteriosa suspensión de su canal de YouTube, o como él lo llama 'Yutun', desatando una hilarante y absurda aventura.",
        cast: "<strong>Elenco:</strong> Matias Ponce, Santino Ponce, Indio Ponce, <a href='#about'>más</a>",
        title: "<span class='about'>Acerca de</span> <strong class='titulo'></span> <strong class='titulo'>Matias Ponce - La Película</strong>",
        genres: "<strong>Géneros:</strong> Humor, humor absurdo, hackers, fama, grandes élites",
        titleType: "<strong>Este título es:</strong> Original, delirante",
        ageRating: "<span class='age'>16+</span> adolescentes, adultos, lenguaje inapropiado, delirante",
        background: "maxresdefault.jpg",
        link: "<a id='watch-button' href='https://movies.solargentinotv.com.ar/matiponcepeli' target='_self'>▶ Reproducir</a>",
        createdBy: "<div class='modal-createdBy' style='position: absolute; top: 1360px; padding-left: 2.2em; font-size: 0.875em;'><span class='fcbprefix' style='color: #bcbcbc;'>Creado por:</span> <span class='fcbcontent'>Matías Ponce</span></div>",
        fullcast: "<div class='fullcast' style='position: absolute; top: 1382px; text-align: justify; padding-left: 2.2em; padding-right: 3em; font-size: 0.875em;'><span class='fcprefix' style='color: #bcbcbc;'>Elenco:</span> <span class='fccontent'>Matías Ponce, Santino Ponce, Indio Ponce, Antonella Ponce, Valeria Volpi, Julieta</span></div>", 
        fullscript: "<div class='fullscript' style='position: absolute; top: 1403px; padding-left: 2.2em; padding-right: 2em; font-size: 0.875em;'><span class='fsprefix' style='color: #bcbcbc;'>Guión:</span> <span class='fscontent'>Matías Ponce</span></div>", 
        fullgenres: "<div class='fullgenres' style='position: absolute; top: 1424.8px; padding-left: 2.2em; text-align: justify; padding-right: 3em;'><span class='fgprefix' style='color: #bcbcbc; font-size: 0.875em;'>Géneros:</span><span class='fgcontent'> Humor, humor absurdo, hackers, fama, grandes élites, paranoia, haters, YouTube</span></div>", 
        fulltitletype: "<div class='fulltitletype' style='position: absolute; top: 1445px; text-align: justify; padding-left: 2.2em; padding-right: 3em; font-size: 0.875em;'><span class='fttprefix' style='color: #bcbcbc;'>Este titulo es:</span> <span class='fttcontent'> Original, delirante</span></div>", 
        fullage: "<div class='fullage' style='position: absolute; top: 1466.6px; text-align: justify; padding-right: 3em; padding-left: 2em; font-size: 0.875em;'><span class='faprefix' style='color: #bcbcbc;'>Clasificación por edad: </span> <span class='facontent'><span class='age'>12+</span> adolescentes, adultos, lenguaje inapropiado, delirante</span> <span class='facontent2'>Apta para mayores de 12 años</span></div>"
    },
    cienporcientolucha: {
        year: "2008-09",
        duration: "1h 20m (por película)",
        description: "Los productores detrás del famoso programa 100% Lucha decidieron hacerle películas.",
        curiosity: "<strong class='curiosidad'>Último día para ver esto: 10 de marzo</strong>",
        cast: "<strong>Elenco:</strong> Maria Fernanda Neil, Carlos Kaspar, Daniel Garcilazo, <a href='#about'>más</a>",
        title: "<span class='about'>Acerca de</span> <strong class='titulo'> 100%Lucha - Las Películas</strong>",
        genres: "<strong>Géneros:</strong> Humor, lucha libre, luchas clandestinas",
        titleType: "<strong>Este título es:</strong> Intenso, Íntimo, Delirante, Divertido",
        ageRating: "<span class='age'>12+</span> lenguaje inapropiado, daños físicos, humor absurdo",
        background: "https://www.mediafire.com/convkey/4a6d/478xmus1d6v68eh9g.jpg?size_id=6",
        link: "<a id='watch-button' href='https://movies.solargentinotv.com.ar/cienporcientolucha' target='_self'>▶ Reproducir</a>",
        createdBy: "<div class='modal-createdBy' style='position: absolute; top: 1360px; padding-left: 32px; font-size: 0.875em;'><span class='fcbprefix' style='color: #bcbcbc;'>Creado por:</span> <span class='fcbcontent'>Eduardo Husni</span></div>",
        fullcast: "<div class='fullcast' style='position: absolute; top: 1382px; text-align: justify; padding-left: 32px; padding-right: 48px; font-size: 0.875em;'><span class='fcprefix' style='color: #bcbcbc;'>Elenco:</span> <span class='fccontent'>Maria Fernanda Neil, Carlos Kaspar, Daniel Garcilazo, Paulo Giardina, Gabriel Emanuelli, Norberto Adrián Fernandez, Marcelo Benítez, Miguel Ángel Wellington, Rubén Piuselli, Leonardo Montero, Eduardo Husni, Osvaldo Principi, Julio Mario Sibara (Turco Naím), Cecilia Bonelli, Delfina Gérez Bosco</span></div>",
        fullscript: "<div class='fullscript' style='position: absolute; top: 1440px; padding-left: 32px; padding-right: 32px; font-size: 0.875em;'><span class='fsprefix' style='color: #bcbcbc;'>Guión:</span> <span class='fscontent'>CineAR</span></div>",
        fullgenres: "<div class='fullgenres' style='position: absolute; top: 1461px; padding-left: 32px; text-align: justify; padding-right: 48px; font-size: 0.875em;'><span class='fgprefix' style='color: #bcbcbc;'>Géneros:</span><span class='fgcontent'> Humor, Lucha Libre, Luchas Clandestinas, Apuestas, Secuestros, Traiciones</span></div>",
        fulltitletype: "<div class='fulltitletype' style='position: absolute; top: 1482px; text-align: justify; padding-left: 32px; padding-right: 48px; font-size: 0.875em;'><span class='fttprefix' style='color: #bcbcbc;'>Este titulo es:</span> <span class='fttcontent'> Intenso, Íntimo, Delirante, Divertido</span></div>",
        fullage: "<div class='fullage' style='position: absolute; top: 1503px; text-align: justify; padding-right: 48px; padding-left: 32px; font-size: 0.875em;'><span class='faprefix' style='color: #bcbcbc;'>Clasificación por edad: </span> <span class='facontent'><span class='age'>12+</span> lenguaje inapropiado, daños físicos, humor absurdo</span> <span class='facontent2'>Apta para mayores de 16 años</span></div>"
    },
    app: {
        year: "2024",
        duration: "6 episodios",
        description: "En este thriller atrapante, una estudiante investiga, para un proyecto escolar, un caso ocurrido hace cinco años.",
        cast: "<strong>Elenco:</strong> Emma Myers, Zain Iqbal, Asha Banks, <a href='#about'>más</a>",
        title: "<span class='about'>Acerca de</span> <strong class='titulo'> Asesinato Para Principiantes</strong>",
        episodelist: "<strong class='eplist'>Episodios</strong>",
        genres: "<strong>Géneros:</strong> Series dramáticas, De Gran Bretaña, Series basadas en libros",
        titleType: "<strong>Este título es:</strong> Íntimo, Sombrío, De suspenso",
        ageRating: "<span class='age'>16+</span> lenguaje inapropiado, drogas, violencia sexual",
        curiosity: "<strong class='curiosidad'>Es oficial: Se estrenará otra temporada</strong>",
        background: "https://occ-0-2443-1380.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABVp5EI24Pn-MhqBfRt6inhEm3YWfGw1YvxCWHJG7OhVZ9_F_9fV814k46BJ6cRj99iPL2YS_FxacJ6-qFRBAs-yS6ktTfnrTAYFh.webp?r=d16",
        link: "<a id='watch-button' href='https://movies.solargentinotv.com.ar/app' target='_self'>▶ Reproducir</a>",
        createdBy: "<div class='modal-createdBy' style='position: absolute; top: 1360px; padding-left: 32px; font-size: 0.875em;'><span class='fcbprefix' style='color: #bcbcbc;'>Creado por:</span> <span class='fcbcontent'>Poppy Cogan</span></div>",
        fullcast: "<div class='fullcast' style='position: absolute; top: 1383px; text-align: justify; padding-left: 32px; padding-right: 48px; font-size: 0.875em;'><span class='fcprefix' style='color: #bcbcbc;'>Elenco:</span> <span class='fccontent'>Emma Myers Zain Iqbal, Asha Banks, Raiko Gohara, Jude Morgan-Collie, Yali Topol Margalith, Yasmin Al-Khudhairi, Henry Ashton, Carla Woodcock, Mathew Baynton, Gary Beadle, Anna Maxwell Martin</span></div>",
        fullscript: "<div class='fullscript' style='position: absolute; top: 1423px; padding-left: 32px; padding-right: 32px; font-size: 0.875em;'><span class='fsprefix' style='color: #bcbcbc;'>Guión:</span> <span class='fscontent'>Poppy Cogan, Ruby Thomas, Zia Ahmed, Ajoke Ibironke</span></div>",
        fullgenres: "<div class='fullgenres' style='position: absolute; top: 1445px; padding-left: 32px; text-align: justify; padding-right: 48px; font-size: 0.875em;'><span class='fgprefix' style='color: #bcbcbc;'>Géneros:</span><span class='fgcontent'> Series dramáticas, De Gran Bretaña, Series basadas en libros, Series de adolescentes, Series de misterio</span></div>",
        fulltitletype: "<div class='fulltitletype' style='position: absolute; top: 1467px; text-align: justify; padding-left: 32px; padding-right: 48px; font-size: 0.875em;'><span class='fttprefix' style='color: #bcbcbc;'>Este titulo es:</span> <span class='fttcontent'>Íntimo, Sombrío, De suspenso</span></div>",
        fullage: "<div class='fullage' style='position: absolute; top: 1488px; text-align: justify; padding-right: 48px; padding-left: 32px; font-size: 0.875em;'><span class='faprefix' style='color: #bcbcbc;'>Clasificación por edad: </span> <span class='facontent'><span class='age'>16+</span> lenguaje inapropiado, drogas, violencia sexual</span> <span class='facontent2'>Apta para mayores de 16 años</span></div>",
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
            number: "<strong class='epnumber1'>1</strong>",
            description: "Pip elige un caso de homicidio para su proyecto escolar. Pero cuando empieza a investigar, descubre que para algunas personas era mejor dejarlo enterrado para siempre.",
            image: "https://www.mediafire.com/convkey/8ebd/67e8toxnggmojw09g.jpg",
            duration: "43 min",
            link: "app"
        },
        {
            title: "Episodio 2",
            number: "<strong class='epnumber2'>2</strong>",
            description: "Luego de entrevistar a las mejores amigas de Andie, Pip tiene una idea más clara de quién era la víctima, pero tras reorganizar fotos viejas empieza a comprender mejor todo.",
            image: "https://www.mediafire.com/convkey/88d0/o7ja6efkgc857oo9g.jpg",
            duration: "44 min",
            link: "app"
        },
        {
            title: "Episodio 3",
            number: "<strong class='epnumber3'>3</strong>",
            description: "Pip descubre por primera vez en su vida el lado oscuro cuando va a una fiesta clandestina. Y su siguiente pista la lleva a territorio aún más peligroso.",
            image: "https://www.mediafire.com/convkey/6ed1/6870czca0karqn29g.jpg",
            duration: "43 min",
            link: "app"
        },
        {
            title: "Episodio 4",
            number: "<strong class='epnumber4'>4</strong>",
            description: "Pip y Ravi siguen una nueva pista que los lleva lejos de Little Kilton. Allí, descubren una valiosa prueba... y una desagradable sorpresa.",
            image: "https://www.mediafire.com/convkey/0de9/czivzlrwjyr2rlj9g.jpg",
            duration: "44 min",
            link: "app"
        },
        {
            title: "Episodio 5",
            number: "<strong class='epnumber5'>5</strong>",
            description: "Una impactante confesión arroja luz en la investigación. Antes de que Pip pueda decidir qué hacer, recibe otro mensaje amenazador.",
            image: "https://occ-0-2442-1380.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABeED_UJixLwFl5Ln39ljb3EY3B-_bE2aisB_eLtQVDlnZTf_vQ3hbjJseEWVQtQR3_xSoTLDsQaJqB20WoXVRq4ALdwp2VwxqDgvq9ssa8GfB9Ed925tZ5zk.jpg?r=2f5",
            duration: "50 min",
            link: "app"
        },
        {
            title: "Episodio 6",
            number: "<strong class='epnumber6'>6</strong>",
            description: "La policía hace un arresto, pero Pip no está segura de que el caso esté solucionado, así que va a visitar a la única persona que podría tener respuestas.",
            image: "https://www.mediafire.com/convkey/0869/05fmkuq6l9kj4159g.jpg",
            duration: "51 min",
            link: "app"
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
    document.getElementById("modal-title").innerHTML = movie.title;
    document.getElementById("modal-year").innerHTML = movie.year;
    document.getElementById("modal-description").innerText = movie.description;
    document.getElementById("modal-cast").innerHTML = movie.cast;
    document.getElementById("modal-genres").innerHTML = movie.genres;
    document.getElementById("modal-titleType").innerHTML = movie.titleType;
    document.getElementById("modal-ageRating").innerHTML = movie.ageRating;
    document.getElementById("modal-curiosity").innerHTML = movie.curiosity || "";
    document.getElementById("modal-duration").innerText = movie.duration;
    document.getElementById("modal-episodelist").innerHTML = movie.episodelist || "";
    document.getElementById("modal-seasons").innerHTML = movie.seasons || "";
    document.getElementById("modal-createdBy").innerHTML = movie.createdBy;
    document.getElementById("modal-fullcast").innerHTML = movie.fullcast
    document.getElementById("modal-fullscript").innerHTML = movie.fullscript;
    document.getElementById("modal-fullgenres").innerHTML = movie.fullgenres;
    document.getElementById("modal-fulltitletype").innerHTML = movie.fulltitletype;
    document.getElementById("modal-fullage").innerHTML = movie.fullage;
    document.getElementById("watch-button").innerHTML = movie.link;

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

// Función para cambiar la lista de episodios según la temporada seleccionada
function changeSeason(season) {
    const episodeList = document.getElementById("episode-list");
    episodeList.innerHTML = ""; // Limpiar lista de episodios antes de agregar nuevos

    // Verifica si la temporada existe en el objeto 'episodios'
    if (episodios[season]) {
        episodios[season].forEach(ep => {
            const li = document.createElement("li");
            li.innerHTML = `
                <img src="${ep.image}" alt="${ep.title}" class="episode-img">
                <div class="episode-info">
                    <h3>${ep.title}</h3>
                    <p>${ep.description}</p>
                    <span>${ep.duration}</span>
                    <div>${ep.number}</div> <!-- Aquí se insertará el 'number' -->
        </div>
            `;
            episodeList.appendChild(li);
        });
    } else {
        // Si no se encuentra la temporada, muestra un mensaje
        const li = document.createElement("li");
        li.innerText = "No hay episodios disponibles para esta temporada.";
        episodeList.appendChild(li);
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

    // Solo cerrar el modal si el clic es fuera de la caja de contenido y el modal está abierto
    if (modal.style.display === "block" && !modalContent.contains(event.target) && !event.target.closest(".moreinfobutton")) {
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

const modal = document.getElementById('modal');

modal.addEventListener('hidden.bs.modal', () => {
  // Resetear todos los campos que mencionaste
  document.getElementById("modal-background").src = '';  // Imagen de fondo
  document.getElementById("modal-title").innerHTML = '';  // Título
  document.getElementById("modal-year").innerHTML = '';  // Año
  document.getElementById("modal-description").innerText = '';  // Descripción
  document.getElementById("modal-cast").innerHTML = '';  // Elenco
  document.getElementById("modal-genres").innerHTML = '';  // Géneros
  document.getElementById("modal-titleType").innerHTML = '';  // Tipo de título
  document.getElementById("modal-ageRating").innerHTML = '';  // Clasificación por edad
  document.getElementById("modal-curiosity").innerHTML = '';  // Curiosidad
  document.getElementById("modal-duration").innerText = '';  // Duración
  document.getElementById("modal-episodelist").innerHTML = '';  // Lista de episodios
  document.getElementById("modal-seasons").innerHTML = '';  // Temporadas
  document.getElementById("watch-button").href = '#';  // Enlace para ver
  document.getElementById("modal-createdBy").innerHTML = '';  // Creador
  document.getElementById("modal-fullcast").innerHTML = '';  // Elenco completo
  document.getElementById("modal-fullscript").innerHTML = '';  // Guion completo
  document.getElementById("modal-fullgenres").innerHTML = '';  // Géneros completos
  document.getElementById("modal-fulltitletype").innerHTML = '';  // Tipo de título completo
  document.getElementById("modal-fullage").innerHTML = '';  // Clasificación por edad completa
});

function scrollToBottom() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth' // Hace el scroll de forma suave
    });
  }