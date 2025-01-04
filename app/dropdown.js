// Función para cargar los episodios según la temporada seleccionada
function changeSeason(season) {
    const episodeList = document.getElementById('episode-list');
    const dropdownButton = document.querySelector('.dropdown-button'); // Obtener el botón del dropdown

    // Cambiar el texto del botón a la temporada seleccionada
    if (season === 1) {
        dropdownButton.textContent = "Temporada 1";
    } else if (season === 2) {
        dropdownButton.textContent = "Temporada 2";
    }

    // Limpiar los episodios actuales
    episodeList.innerHTML = '';

    // Datos de los episodios para cada temporada
    const episodes = {
        1: [
            {
                title: 'Episodio 1',
                duration: '43 min',
                propiedadviendo: 'Viendo',
                description: 'Pip elige un caso de homicidio para su proyecto escolar. Pero cuando empieza a investigar, descubre que para algunas personas era mejor dejarlo enterrado para siempre.',
                videoPath: 'https://p-def3.pcloud.com/cBZbnz8UGZ0Fc4MS7ZZZ8WJuXkZQ5ZZdIRZkZfRxn5XZJQZr0ZDpZmYZdQZXYZTpZb4ZQYZM4ZRRZwYZVQZ34Zw6zJ5Z6cE1Xa8PEg4NAjYI5OgdPBWgDhzy/Asesinato%20Para%20Principiantes%20-%20T1%20E1.mp4',
                image: 'https://th3.pcloud.com/tLZvN9mUGZgEVZ9EWM7ZZ5TJuXkZdIRZJZZg0ZpXZ8QZP8ZHzZz1w5oOgTWKhbhpUIDwp3lSFYOWaX/ThumbE1.jpg'
            },
            {
                title: 'Episodio 2',
                duration: '44 min',
                propiedadviendo: 'Viendo',
                description: 'Luego de entrevistar a las mejores amigas de Andie, Pip tiene una idea más clara de quién era la víctima, pero tras reorganizar fotos viejas empieza a comprender mejor todo.',
                videoPath: 'https://p-def8.pcloud.com/cfZtyumUGZBMHhMS7Z9EWM7ZZyMJuXkZQ5ZZdIRZZz5E3AZTpZOQZSRZqYZGzZ2JZKHZi4ZwRZt4ZizZF8ZmLZbZE5X0y859CGLmiOrKbq7yJfOxKl4y/Asesinato%20Para%20Principiantes%20-%20T1%20E2.mkv',
                image: 'https://th3.pcloud.com/tLZv39mUGZye0Z9EWM7ZZhTJuXkZdIRZJZZg0ZpXZXYZuQZc8ZocAH58INTEhXIcz0E5zz1fSmExl7/ThumbE2.jpg'
            },
            {
                title: 'Episodio 3',
                duration: '43 min',
                propiedadviendo: 'Viendo',
                description: 'Pip descubre por primera vez en su vida el lado oscuro cuando va a una fiesta clandestina. Y su siguiente pista la lleva a territorio aún más peligroso.',
                videoPath: 'https://p-def8.pcloud.com/cfZtyumUGZBMHhMS7Z9EWM7ZZyMJuXkZQ5ZZdIRZZz5E3AZTpZOQZSRZqYZGzZ2JZKHZi4ZwRZt4ZizZF8ZmLZbZE5X0y859CGLmiOrKbq7yJfOxKl4y/Asesinato%20Para%20Principiantes%20-%20T1%20E3.mkv',
                image: 'https://th3.pcloud.com/tLZv39mUGZye0Z9EWM7ZZhTJuXkZdIRZJZZg0ZpXZXYZuQZc8ZocAH58INTEhXIcz0E5zz1fSmExl7/ThumbE3.jpg'
            },
            {
                title: 'Episodio 4',
                duration: '45 min',
                propiedadviendo: 'Viendo',
                description: 'Pip continúa buscando pistas sobre la víctima, pero ahora comienza a dudar de sus propias suposiciones. Un giro inesperado la hace cuestionar todo.',
                videoPath: 'https://p-def8.pcloud.com/cfZtyumUGZBMHhMS7Z9EWM7ZZyMJuXkZQ5ZZdIRZZz5E3AZTpZOQZSRZqYZGzZ2JZKHZi4ZwRZt4ZizZF8ZmLZbZE5X0y859CGLmiOrKbq7yJfOxKl4y/Asesinato%20Para%20Principiantes%20-%20T1%20E4.mkv',
                image: 'https://th3.pcloud.com/tLZv39mUGZye0Z9EWM7ZZhTJuXkZdIRZJZZg0ZpXZXYZuQZc8ZocAH58INTEhXIcz0E5zz1fSmExl7/ThumbE4.jpg'
            },
            {
                title: 'Episodio 5',
                duration: '42 min',
                propiedadviendo: 'Viendo',
                description: 'En un esfuerzo por resolver el misterio, Pip recibe ayuda inesperada. Sin embargo, la verdad podría ser más oscura de lo que imaginaba.',
                videoPath: 'https://p-def8.pcloud.com/cfZtyumUGZBMHhMS7Z9EWM7ZZyMJuXkZQ5ZZdIRZZz5E3AZTpZOQZSRZqYZGzZ2JZKHZi4ZwRZt4ZizZF8ZmLZbZE5X0y859CGLmiOrKbq7yJfOxKl4y/Asesinato%20Para%20Principiantes%20-%20T1%20E5.mkv',
                image: 'https://th3.pcloud.com/tLZv39mUGZye0Z9EWM7ZZhTJuXkZdIRZJZZg0ZpXZXYZuQZc8ZocAH58INTEhXIcz0E5zz1fSmExl7/ThumbE5.jpg'
            },
            {
                title: 'Episodio 6',
                duration: '44 min',
                propiedadviendo: 'Viendo',
                description: 'El caso de Andie parece resolverse, pero Pip descubre una red de mentiras más grande de lo que pensaba. El final podría dejarla en shock.',
                videoPath: 'https://p-def8.pcloud.com/cfZtyumUGZBMHhMS7Z9EWM7ZZyMJuXkZQ5ZZdIRZZz5E3AZTpZOQZSRZqYZGzZ2JZKHZi4ZwRZt4ZizZF8ZmLZbZE5X0y859CGLmiOrKbq7yJfOxKl4y/Asesinato%20Para%20Principiantes%20-%20T1%20E6.mkv',
                image: 'https://th3.pcloud.com/tLZv39mUGZye0Z9EWM7ZZhTJuXkZdIRZJZZg0ZpXZXYZuQZc8ZocAH58INTEhXIcz0E5zz1fSmExl7/ThumbE6.jpg'
            }
        ],
        2: [
            {
                title: 'Próxima temporada',
                description: 'Otra temporada está por llegar...',
                videoPath: '#', // No hay video para la temporada 2
                image: '' // Imagen vacía
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
        episodeButton.onclick = () => loadEpisode(episode.videoPath, episodeButton, episode);

        const episodeInfo = document.createElement('div');
        episodeInfo.classList.add('episodio-info');

        const episodeImg = document.createElement('div');
        episodeImg.classList.add('episodio-img');
        const img = document.createElement('img');
        img.src = episode.image || 'default_image.jpg'; // Imagen por defecto si no hay imagen
        img.alt = episode.title;
        episodeImg.appendChild(img);

        const episodeText = document.createElement('div');
        episodeText.classList.add('episodio-text');

        // Título y duración alineados
        const titleDurationDiv = document.createElement('div');
        titleDurationDiv.style.display = 'flex';
        titleDurationDiv.style.justifyContent = 'space-between';

        const h3 = document.createElement('h3');
        h3.textContent = episode.title;

        const durationSpan = document.createElement('span');
        durationSpan.style.color = '#fff'; // Color de la duración en blanco
        durationSpan.textContent = episode.duration;

        titleDurationDiv.appendChild(h3);
        titleDurationDiv.appendChild(durationSpan);

        const p = document.createElement('p');
        p.textContent = episode.description;

        // Mostrar "Viendo" si el episodio está en reproducción
        const seeingDiv = document.createElement('div');
        seeingDiv.classList.add('seeing-text');
        episodeText.appendChild(titleDurationDiv);
        episodeText.appendChild(p);
        episodeText.appendChild(seeingDiv);  // Aquí se agregará el "Viendo"

        episodeInfo.appendChild(episodeImg);
        episodeInfo.appendChild(episodeText);
        episodeButton.appendChild(episodeInfo);

        episodeItem.appendChild(episodeButton);
        episodeList.appendChild(episodeItem);
    });
}

// Función para cargar un episodio y marcarlo como reproducido
function loadEpisode(videoPath, episodeButton, episode) {
    const video = document.querySelector('#videoPlayer');
    video.src = videoPath;
    video.play();

    // Resetear el estilo de todos los episodios
    const allEpisodes = document.querySelectorAll('.episodio');
    allEpisodes.forEach(ep => ep.style.backgroundColor = '');  // Eliminar el fondo de todos los episodios

    // Cambiar el fondo del episodio seleccionado
    episodeButton.style.backgroundColor = 'rgba(74, 91, 104, 0.719)'; // Fondo translúcido

    // Mostrar el texto "Viendo" en el episodio actual
    const seeingDiv = episodeButton.querySelector('.seeing-text');
    seeingDiv.textContent = episode.propiedadviendo;  // Aquí añadimos el texto "Viendo"

    // Ocultar "Viendo" en los demás episodios
    const allSeeingDivs = document.querySelectorAll('.seeing-text');
    allSeeingDivs.forEach(div => div.textContent = '');  // Borrar "Viendo" en los episodios no activos
}

// Crear instancia de Plyr y gestionar eventos
const player = new Plyr('#videoPlayer');

// Detectar cuando el video empieza a reproducirse
player.on('play', (event) => {
    const currentVideo = event.target;
    const allEpisodes = document.querySelectorAll('.episodio');

    allEpisodes.forEach(ep => {
        const videoPath = ep.getAttribute('data-video-path');  // Obtener la ruta del video desde el atributo
        if (videoPath === currentVideo.src) {
            ep.style.backgroundColor = 'rgba(74, 91, 104, 0.719)'; // Fondo de reproducción
        } else {
            ep.style.backgroundColor = ''; // Restablecer fondo a transparente
        }
    });
});

// Detectar cuando el video termina
player.on('ended', (event) => {
    const allEpisodes = document.querySelectorAll('.episodio');
    allEpisodes.forEach(ep => {
        ep.style.backgroundColor = ''; // Restablecer todos los fondos cuando el video termine
    });
});

// Inicializar el texto del botón como "Seleccionar Temporada"
document.querySelector('.dropdown-button').textContent = "Seleccionar Temporada";

// Mostrar por defecto los episodios de la primera temporada
changeSeason(1);
