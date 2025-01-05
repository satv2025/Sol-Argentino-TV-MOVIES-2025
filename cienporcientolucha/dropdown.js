function changeSeason(season) {
    const episodeList = document.getElementById('episode-list');
    const dropdownButton = document.querySelector('.dropdown-button'); // Obtener el botón del dropdown
    const dropdownContent = document.querySelector('.dropdown-content'); // Obtener el contenido del dropdown

    // Cambiar el texto del botón a la temporada seleccionada
    if (season === 1) {
        dropdownButton.textContent = "Koshe Plostenko";
    } else if (season === 2) {
        dropdownButton.textContent = "El Amo De Los Clones";
    }

    // Limpiar los episodios actuales
    episodeList.innerHTML = '';

    // Datos de los episodios para cada temporada
    const episodes = {
        1: [
            {
                title: 'Koshe Plostenko',
                description: 'Koshe Plostenko, un mafioso implacable, dirige un club de lucha clandestino. Para alimentar su negocio, decide secuestrar a los luchadores de 100% Lucha y obligarlos a pelear bajo sus reglas.',
                videoPath: 'blob:https://disk.yandex.com/1067de88-9627-431b-a313-e1b892e8a38a',
                image: 'https://www.mediafire.com/convkey/4a6d/478xmus1d6v68eh9g.jpg?size_id=6',
                duration: '80 min' // Duración actualizada
            },
        ],
        2: [
            {
                title: 'El Amo De Los Clones',
                description: 'Damián Castillo, un doctor en biotecnología, odia a su vecino Vicente Viloni. Cansado de su fama, decide crear clones de los luchadores de 100% Lucha para destruir la imagen de su ídolo de la infancia.',
                videoPath: 'https://example.com/video2.webm', // Ruta del video para la temporada 2
                image: 'https://download1528.mediafire.com/aqx8uo65ndggpmlTMXtKdXqXumyNkwt4HvoIerexHOiaDvlQCG0m0MypWtttyzfh6-wmA84KpdAIkwe3IZCUwNmtKWzwQs4gwne2h_OsJKUJePkqGlDuTDdpuvrn8B5FlcSGVPgu6GxPgAeGidBZ8tiGssQ_Q_RCF5bDYI8eCNyAaXE/492wl1oh8fakveb/lucha.webp', // Imagen para la temporada 2
                duration: '85 min' // Duración para el episodio de la temporada 2
            }
        ]
    };

    // Obtener los episodios de la temporada seleccionada
    const selectedEpisodes = episodes[season];

    // Crear la lista de episodios
    selectedEpisodes.forEach(episode => {
        const episodeItem = document.createElement('li');
        const episodeButton = document.createElement('button');
        episodeButton.classList.add('episodio');
        episodeButton.onclick = () => loadEpisode(episode.videoPath);

        const episodeInfo = document.createElement('div');
        episodeInfo.classList.add('episodio-info');
        episodeInfo.style.position = 'relative'; // Asegurarse de que el contenedor tenga posición relativa

        const episodeImg = document.createElement('div');
        episodeImg.classList.add('episodio-img');
        const img = document.createElement('img');
        img.src = episode.image || 'default_image.jpg'; // Imagen por defecto si no hay imagen
        img.alt = episode.title;
        episodeImg.appendChild(img);

        const episodeText = document.createElement('div');
        episodeText.classList.add('episodio-text');
        const h3 = document.createElement('h3');
        h3.textContent = episode.title;
        const p = document.createElement('p');
        p.textContent = episode.description;

        // Crear el contenedor para la duración
        const durationDiv = document.createElement('div');
        durationDiv.classList.add('episodio-duration');
        durationDiv.style.position = 'absolute'; // Hacer que la duración esté en posición absoluta
        durationDiv.style.top = '10px'; // Ubicación en la parte superior
        durationDiv.style.right = '10px'; // Alineado a la derecha
        durationDiv.style.color = '#fff'; // Establecer color de la duración
        durationDiv.style.backgroundColor = '#ffffff00';
        durationDiv.style.padding = '2px 5px'; // Un pequeño padding para la duración
        durationDiv.textContent = episode.duration || 'N/A'; // Duración del episodio o "N/A" si no hay duración

        episodeText.appendChild(h3);
        episodeText.appendChild(p);

        // Agregar la duración al lado derecho arriba
        episodeText.appendChild(durationDiv);

        episodeInfo.appendChild(episodeImg);
        episodeInfo.appendChild(episodeText);
        episodeButton.appendChild(episodeInfo);

        episodeItem.appendChild(episodeButton);
        episodeList.appendChild(episodeItem);
    });

    // Cerrar el dropdown después de seleccionar la temporada
    dropdownContent.style.display = 'none';
    dropdownButton.classList.remove('open');
}

// Función para cargar un episodio
function loadEpisode(videoPath) {
    const video = document.querySelector('#videoPlayer');
    video.src = videoPath;
    video.play();
}

// Inicializar el texto del botón como "Seleccionar Temporada"
document.querySelector('.dropdown-button').textContent = "Seleccionar Temporada";

// Mostrar por defecto los episodios de la primera temporada
changeSeason(1);

// Manejo del dropdown
document.querySelector('.dropdown-button').addEventListener('click', function() {
    var dropdownContent = document.querySelector('.dropdown-content');
    var button = this;

    // Alterna la clase "open" para el botón
    button.classList.toggle('open');

    // Alterna la visibilidad del dropdown
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }
});

// Cerrar el dropdown si se hace clic fuera de él
document.addEventListener('click', function(event) {
    const dropdownContent = document.querySelector('.dropdown-content');
    const dropdownButton = document.querySelector('.dropdown-button');

    // Verifica si el clic fue fuera del menú desplegable
    if (!dropdownContent.contains(event.target) && !dropdownButton.contains(event.target)) {
        dropdownContent.style.display = 'none';
        dropdownButton.classList.remove('open');
    }
});
