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
                description: 'Pip elige un caso de homicidio para su proyecto escolar. Pero cuando empieza a investigar, descubre que para algunas personas era mejor dejarlo enterrado para siempre.',
                videoPath: 'https://p-def3.pcloud.com/cBZbnz8UGZ0Fc4MS7ZZZ8WJuXkZQ5ZZdIRZkZfRxn5XZJQZr0ZDpZmYZdQZXYZTpZb4ZQYZM4ZRRZwYZVQZ34Zw6zJ5Z6cE1Xa8PEg4NAjYI5OgdPBWgDhzy/Asesinato%20Para%20Principiantes%20-%20T1%20E1.mp4',
                image: 'https://th3.pcloud.com/tLZvN9mUGZgEVZ9EWM7ZZ5TJuXkZdIRZJZZg0ZpXZ8QZP8ZHzZz1w5oOgTWKhbhpUIDwp3lSFYOWaX/ThumbE1.jpg',
                duration: '43 min'
            },
            {
                title: 'Episodio 2',
                description: 'Luego de entrevistar a las mejores amigas de Andie, Pip tiene una idea más clara de quién era la víctima, pero tras reorganizar fotos viejas empieza a comprender mejor todo.',
                videoPath: 'https://p-def8.pcloud.com/cfZtyumUGZBMHhMS7Z9EWM7ZZyMJuXkZQ5ZZdIRZZz5E3AZTpZOQZSRZqYZGzZ2JZKHZi4ZwRZt4ZizZF8ZmLZbZE5X0y859CGLmiOrKbq7yJfOxKl4y/Asesinato%20Para%20Principiantes%20-%20T1%20E2.mkv',
                image: 'https://th3.pcloud.com/tLZv39mUGZye0Z9EWM7ZZhTJuXkZdIRZJZZg0ZpXZXYZuQZc8ZocAH58INTEhXIcz0E5zz1fSmExl7/ThumbE2.jpg',
                duration: '44 min'
            },
            {
                title: 'Episodio 3',
                description: 'Pip descubre por primera vez en su vida el lado oscuro cuando va a una fiesta clandestina. Y su siguiente pista la lleva a territorio aún más peligroso.',
                videoPath: 'https://p-def8.pcloud.com/cfZtyumUGZBMHhMS7Z9EWM7ZZyMJuXkZQ5ZZdIRZZz5E3AZTpZOQZSRZqYZGzZ2JZKHZi4ZwRZt4ZizZF8ZmLZbZE5X0y859CGLmiOrKbq7yJfOxKl4y/Asesinato%20Para%20Principiantes%20-%20T1%20E2.mkv',
                image: 'https://th3.pcloud.com/tLZ9v9mUGZqEXZ9EWM7ZZ7MJuXkZdIRZJZZg0ZpXZHQZEYZc4ZgnuD6KaYtSHOy2eMwVIV2uHF7SUV/ThumbE3.jpg',
                duration: '43 min'
            },
            {
                title: 'Episodio 4',
                description: 'Pip y Ravi siguen una nueva pista que los lleva lejos de Little Kilton. Allí, descubren una valiosa prueba... y una desagradable sorpresa.',
                videoPath: 'https://p-def8.pcloud.com/cfZtyumUGZBMHhMS7Z9EWM7ZZyMJuXkZQ5ZZdIRZZz5E3AZTpZOQZSRZqYZGzZ2JZKHZi4ZwRZt4ZizZF8ZmLZbZE5X0y859CGLmiOrKbq7yJfOxKl4y/Asesinato%20Para%20Principiantes%20-%20T1%20E2.mkv',
                image: 'https://th3.pcloud.com/tLZKfFbUGZmjVZ9EWM7ZZ2lJuXkZdIRZJZZg0ZpXZeQZUYZrpZT2M62EBjLeVjnBhKxhu02BFuJf8V/ThumbE4.jpg',
                duration: '44 min'
            },
            {
                title: 'Episodio 5',
                description: 'Una impactante confesión arroja luz en la investigación. Antes de que Pip pueda decidir qué hacer, recibe otro mensaje amenazador.',
                videoPath: 'https://p-def5.pcloud.com/cfZrA9mUGZTtWhMS7Z9EWM7ZZYMJuXkZQ5ZZdIRZZvH5kcZQYZr8Z2YZ1RZmzZjYZrRZPHZPpZlFZsQZU4ZzzZ8pZEnGrDJkEp6pBEbyhjnyEV5MTce8k/Asesinato%20Para%20Principiantes%20-%20T1%20E5.mkv',
                image: 'https://th2.pcloud.com/tLZu2FbUGZhV0Z9EWM7ZZWlJuXkZdIRZJZZg0ZpXZ58ZsLZn4ZFTuxEaNaKMzUisvHhGrwhjcq6z5y/ThumbE5.jpg',
                duration: '50 min'
            },
            {
                title: 'Episodio 6',
                description: 'La policía hace un arresto, pero Pip no está segura de que el caso esté solucionado, así que va a visitar a la única persona que podría tener respuestas.',
                videoPath: 'https://p-def2.pcloud.com/cfZ5q9mUGZpnWhMS7Z9EWM7ZZeMJuXkZQ5ZZdIRZZG8UaoZX8ZoRZEzZoQZF4ZlYZXzZEpZtFZzFZFYZKRZQ8Z18Zntso3Nc1z6063G5MDxj6NHdIcfUk/Asesinato%20Para%20Principiantes%20-%20T1%20E6.mkv',
                image: 'https://th3.pcloud.com/tLZDWFbUGZykXZ9EWM7ZZWlJuXkZdIRZJZZg0ZpXZMQZtpZHFZOdeFKQV72T72LRonQQdvQzSUPOPy/ThumbE6.jpg',
                duration: '51 min'
            }
        ],
        2: [
            {
                title: 'Próxima temporada',
                description: 'Otra temporada está por llegar...',
                videoPath: '#', // No hay video para la temporada 2
                image: '', // Imagen vacía
                duration: ''
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
        durationDiv.textContent = episode.duration;

        // Aplicar el estilo para alineación a la derecha
        episodeText.appendChild(h3);
        episodeText.appendChild(p);

        episodeInfo.appendChild(episodeImg);
        episodeInfo.appendChild(episodeText);
        episodeInfo.appendChild(durationDiv);  // Añadir duración

        episodeButton.appendChild(episodeInfo);
        episodeItem.appendChild(episodeButton);
        episodeList.appendChild(episodeItem);
    });
}

// Función para cargar un episodio
function loadEpisode(videoPath) {
    const video = document.querySelector('#videoPlayer');
    video.src = videoPath;
    video.play();
}

// CSS adicional para la alineación y estilo de la duración (debería añadirse al CSS existente)
const style = document.createElement('style');
style.innerHTML = `
    .episodio-duration {
        font-size: 14px;
        color: #fff;
        position: absolute;
        right: 10px;  /* Pegado a la derecha */
        top: 10px;    /* Alineado en la misma línea */
    }
    .episodio-info {
        display: flex;
        justify-content: space-between;
        position: relative;
    }
`;
document.head.appendChild(style);
