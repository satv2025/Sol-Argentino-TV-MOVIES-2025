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
        createdBy: "<div class='modal-createdBy'><span class='fcbprefix'>Creado por:</span> <span class='fcbcontent'>Matías Ponce</span></div>",
        fullcast: "<div class='fullcast'><span class='fcprefix'>Elenco:</span> <span class='fccontent'>Matías Ponce, Santino Ponce, Indio Ponce, Antonella Ponce, Valeria Volpi, Julieta</span></div>", 
        fullscript: "<div class='fullscript'><span class='fsprefix'>Guión:</span> <span class='fscontent'>Matías Ponce</span></div>", 
        fullgenres: "<div class='fullgenres'><span class='fgprefix'>Géneros:</span><span class='fgcontent'> Humor, humor absurdo, hackers, fama, grandes élites, paranoia, haters, YouTube</span></div>", 
        fulltitletype: "<div class='fulltitletype'><span class='fttprefix'>Este titulo es:</span> <span class='fttcontent'> Original, delirante</span></div>", 
        fullage: "<div class='fullage'><span class='faprefix'>Clasificación por edad: </span> <span class='facontent'><span class='age'>12+</span> adolescentes, adultos, lenguaje inapropiado, delirante</span> <span class='facontent2'>Apta para mayores de 12 años</span></div>"
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
        createdBy: "<div class='modal-createdBy'><span class='fcbprefix'>Creado por:</span> <span class='fcbcontent'>Eduardo Husni</span></div>",
        fullcast: "<div class='fullcast'><span class='fcprefix'>Elenco:</span> <span class='fccontent'>Norberto Adrián Fernandez, Marcelo Benítez, Miguel Ángel Wellington, Rubén Piuselli, Daniel Garcilazo, Paulo Giardina, Gabriel Emanuelli, Leonardo Montero, Eduardo Husni, Osvaldo Principi, Carlos Kaspar, Julio Mario Sibara 'Turco Naím', Roberto Carnaghi, Daniel Casablanca, Delfina Gerez Bosco, Pablo Rago, Juan Pablo Varsky, Berta Muñiz, Natalia Kim, Rocío Rodríguez Presedo, Esteban Rojas, Gonzalo Nennal, Axel Kuschevatzky, Alejandro 'Marley' Wiebe, Mario Pergolini</span></div>",
        fullscript: "<div class='fullscript'><span class='fsprefix'>Guión:</span> <span class='fscontent'>CineAR</span></div>",
        fullgenres: "<div class='fullgenres'><span class='fgprefix'>Géneros:</span><span class='fgcontent'> Humor, Lucha Libre, Luchas Clandestinas, Apuestas, Secuestros, Traiciones</span></div>",
        fulltitletype: "<div class='fulltitletype'><span class='fttprefix'>Este titulo es:</span> <span class='fttcontent'> Intenso, Íntimo, Delirante, Divertido</span></div>",
        fullage: "<div class='fullage'><span class='faprefix'>Clasificación por edad: </span> <span class='facontent'><span class='age'>12+</span> lenguaje inapropiado, daños físicos, humor absurdo</span> <span class='facontent2'>Apta para mayores de 16 años</span></div>"
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
        createdBy: "<div class='modal-createdBy app-createdBy'><span class='fcbprefix app-fcbprefix'>Creado por:</span> <span class='fcbcontent app-fcbcontent'>Poppy Cogan</span></div>",
        fullcast: "<div class='fullcast app-fullcast'><span class='fcprefix app-fcprefix'>Elenco:</span> <span class='fccontent app-fccontent'>Emma Myers Zain Iqbal, Asha Banks, Raiko Gohara, Jude Morgan-Collie, Yali Topol Margalith, Yasmin Al-Khudhairi, Henry Ashton, Carla Woodcock, Mathew Baynton, Gary Beadle, Anna Maxwell Martin</span></div>",
        fullscript: "<div class='fullscript app-fullscript'><span class='fsprefix app-fsprefix'>Guión:</span> <span class='fscontent app-fscontent'>Poppy Cogan, Ruby Thomas, Zia Ahmed, Ajoke Ibironke</span></div>",
        fullgenres: "<div class='fullgenres app-fullgenres'><span class='fgprefix app-fgprefix'>Géneros:</span><span class='fgcontent app-fgcontent'>Series dramáticas, De Gran Bretaña, Series basadas en libros, Series de adolescentes, Series de misterio</span></div>",
        fulltitletype: "<div class='fulltitletype app-fulltitletype'><span class='fttprefix app-fttprefix'>Este titulo es:</span> <span class='fttcontent app-fttcontent'>Íntimo, Sombrío, De suspenso</span></div>",
        fullage: "<div class='fullage app-fullage'><span class='faprefix app-faprefix'>Clasificación por edad: </span> <span class='facontent app-facontent'><span class='age app-age'>16+</span> lenguaje inapropiado, drogas, violencia sexual</span> <span class='facontent2 app-facontent2'>Apta para mayores de 16 años</span></div>",
        seasons: `
<div class="season-dropdown">
  <button class="dropdown-button" id="seasonToggle">
    Temporada 1
  </button>

  <div class="dropdown-content" id="seasonMenu">
    <div class="season-option">
      <button class="texto t1" onclick="changeSeason(1)">Temporada 1<span class="episode-count ep1">(6 episodios)</span></button>
    </div>
    <div class="season-option">
      <button class="texto t2" onclick="changeSeason(2)">Temporada 2 <span class="episode-count ep2">(1 episodio)</span></button>
    </div>
    <div class="sepaoption">
    </div>
        <div class="season-option">
      <button class="texto vtle" onclick="changeSeason(3)">Ver todos los episodios</button>
    </div>
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
    button.addEventListener("click", function () {
        const movieKey = this.getAttribute("data-movie");
        openModal(movieKey);
    });
});

// Función para abrir el modal y cargar los datos de la serie o película
function openModal(movieKey) {
    const modal = document.getElementById("infoModal");
    const movie = peliculas[movieKey];

    if (!movie) return;

    // Cargar los datos en el modal
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
    document.getElementById("modal-fullcast").innerHTML = movie.fullcast;
    document.getElementById("modal-fullscript").innerHTML = movie.fullscript;
    document.getElementById("modal-fullgenres").innerHTML = movie.fullgenres;
    document.getElementById("modal-fulltitletype").innerHTML = movie.fulltitletype;
    document.getElementById("modal-fullage").innerHTML = movie.fullage;
    document.getElementById("watch-button").innerHTML = movie.link;

    // Mostrar el modal
    modal.style.display = "block";
    document.body.classList.add("modal-open");

    // Si es "app", cargar temporada 1
    if (movieKey === "app") {
        changeSeason(1);
    } else {
        document.getElementById("episode-list").innerHTML = "";
    }
}

// Función global para cambiar temporada
function changeSeason(season) {
    const episodeList = document.getElementById("episode-list");
    episodeList.innerHTML = "";

    if (episodios[season]) {
        episodios[season].forEach(ep => {
            const li = document.createElement("li");
            li.innerHTML = `
                <img src="${ep.image}" alt="${ep.title}" class="episode-img">
                <div class="episode-info">
                    <h3>${ep.title}</h3>
                    <p>${ep.description}</p>
                    <span>${ep.duration}</span>
                    <div>${ep.number}</div>
                </div>
            `;
            episodeList.appendChild(li);
        });
    } else {
        const li = document.createElement("li");
        li.innerText = "No hay episodios disponibles para esta temporada.";
        episodeList.appendChild(li);
    }
}

// Cerrar modal con botón
document.querySelector(".close-button").addEventListener("click", () => {
    const modal = document.getElementById("infoModal");
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
});

// Cerrar modal al hacer clic fuera del contenido
document.addEventListener("click", (event) => {
    const modal = document.getElementById("infoModal");
    const modalContent = document.querySelector(".modal-content");

    if (modal.style.display === "block" &&
        !modalContent.contains(event.target) &&
        !event.target.closest(".moreinfobutton")) {
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
    }
});

// Cerrar modal con tecla Escape
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        const modal = document.getElementById("infoModal");
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
    }
});

// Dropdown para temporadas
document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.season-dropdown');
    if (!dropdown) return;

    const button = dropdown.querySelector('.dropdown-button');
    const arrow = button.querySelector('span');
    const seasonMenu = document.getElementById('seasonMenu');

    button.addEventListener('click', () => {
        seasonMenu.classList.toggle('show');
        arrow.classList.toggle('rotate');
    });
});