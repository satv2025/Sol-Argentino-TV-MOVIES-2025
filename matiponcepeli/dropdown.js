// Función para cargar los episodios según la temporada seleccionada
function changeSeason(season) {
    const episodeList = document.getElementById('episode-list');
    const dropdownButton = document.querySelector('.dropdown-button'); // Obtener el botón del dropdown
    const dropdownContent = document.querySelector('.dropdown-content'); // Obtener el contenido del dropdown

    // Cambiar el texto del botón a la temporada seleccionada
    if (season === 1) {
        dropdownButton.textContent = "Pelicula 1";
    } else if (season === 2) {
        dropdownButton.textContent = "Pelicula 2";
    }

    // Limpiar los episodios actuales
    episodeList.innerHTML = '';

    // Datos de los episodios para cada temporada
    const episodes = {
        1: [
            {
                title: 'Matias Ponce, La Película',
                description: 'Matías Ponce, creador de contenido en redes, se enfrenta a alienígenas y hackers tras la misteriosa suspensión de su canal de youtube, o como el lo llama "Yutun", desatando una hilarante y absurda aventura.',
                videoPath: 'https://codeberg.org/skb10x/mediatest/raw/branch/main/assets/media/videos/mpp/mp/MATIAS%20PONCE%20%20LA%20PEL%C3%8DCULA.m3u8',
                image: 'https://movies.solargentinotv.com.ar/assets/media/images/maxresdefault.jpg',
                duration: '60 min' // Duración actualizada
            },
        ],
        2: [
            {
                title: 'Paul Icia, el alguacil del pueblo',
                description: 'Paul Icia es una próxima película de acción y diversión de uno de los personajes. La trama cuenta como un alguacil va casando delitos. ',
                videoPath: '#', // No hay video para la temporada 2
                image: '', // Imagen vacía
                duration: '' // No hay duración para la próxima temporada
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