// Variable global para llevar la cuenta del episodio actual
let currentEpisodeIndex = 0;

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
    const episodes = [
        {
            title: 'Episodio 1',
            duration: '43 min',
            description: 'Pip elige un caso de homicidio para su proyecto escolar. Pero cuando empieza a investigar, descubre que para algunas personas era mejor dejarlo enterrado para siempre.',
            videoPath: 'https://p-def3.pcloud.com/cBZbnz8UGZ0Fc4MS7ZZZ8WJuXkZQ5ZZdIRZkZfRxn5XZJQZr0ZDpZmYZdQZXYZTpZb4ZQYZM4ZRRZwYZVQZ34Zw6zJ5Z6cE1Xa8PEg4NAjYI5OgdPBWgDhzy/Asesinato%20Para%20Principiantes%20-%20T1%20E1.mp4',
            image: 'https://th3.pcloud.com/tLZvN9mUGZgEVZ9EWM7ZZ5TJuXkZdIRZJZZg0ZpXZ8QZP8ZHzZz1w5oOgTWKhbhpUIDwp3lSFYOWaX/ThumbE1.jpg'
        },
        {
            title: 'Episodio 2',
            duration: '44 min',
            description: 'Luego de entrevistar a las mejores amigas de Andie, Pip tiene una idea más clara de quién era la víctima, pero tras reorganizar fotos viejas empieza a comprender mejor todo.',
            videoPath: 'https://p-def8.pcloud.com/cfZtyumUGZBMHhMS7Z9EWM7ZZyMJuXkZQ5ZZdIRZZz5E3AZTpZOQZSRZqYZGzZ2JZKHZi4ZwRZt4ZizZF8ZmLZbZE5X0y859CGLmiOrKbq7yJfOxKl4y/Asesinato%20Para%20Principiantes%20-%20T1%20E2.mkv',
            image: 'https://th3.pcloud.com/tLZv39mUGZye0Z9EWM7ZZhTJuXkZdIRZJZZg0ZpXZXYZuQZc8ZocAH58INTEhXIcz0E5zz1fSmExl7/ThumbE2.jpg'
        },
        {
            title: 'Episodio 3',
            duration: '43 min',
            description: 'Pip descubre por primera vez en su vida el lado oscuro cuando va a una fiesta clandestina. Y su siguiente pista la lleva a territorio aún más peligroso.',
            videoPath: 'https://p-def8.pcloud.com/cfZtyumUGZBMHhMS7Z9EWM7ZZyMJuXkZQ5ZZdIRZZz5E3AZTpZOQZSRZqYZGzZ2JZKHZi4ZwRZt4ZizZF8ZmLZbZE5X0y859CGLmiOrKbq7yJfOxKl4y/Asesinato%20Para%20Principiantes%20-%20T1%20E2.mkv',
            image: 'https://th3.pcloud.com/tLZ9v9mUGZqEXZ9EWM7ZZ7MJuXkZdIRZJZZg0ZpXZHQZEYZc4ZgnuD6KaYtSHOy2eMwVIV2uHF7SUV/ThumbE3.jpg'
        },
        {
            title: 'Episodio 4',
            duration: '44 min',
            description: 'Pip y Ravi siguen una nueva pista que los lleva lejos de Little Kilton. Allí, descubren una valiosa prueba... y una desagradable sorpresa.',
            videoPath: 'https://p-def8.pcloud.com/cfZtyumUGZBMHhMS7Z9EWM7ZZyMJuXkZQ5ZZdIRZZz5E3AZTpZOQZSRZqYZGzZ2JZKHZi4ZwRZt4ZizZF8ZmLZbZE5X0y859CGLmiOrKbq7yJfOxKl4y/Asesinato%20Para%20Principiantes%20-%20T1%20E2.mkv',
            image: 'https://th3.pcloud.com/tLZKfFbUGZmjVZ9EWM7ZZ2lJuXkZdIRZJZZg0ZpXZeQZUYZrpZT2M62EBjLeVjnBhKxhu02BFuJf8V/ThumbE4.jpg'
        },
        {
            title: 'Episodio 5',
            duration: '50 min',
            description: 'Una impactante confesión arroja luz en la investigación. Antes de que Pip pueda decidir qué hacer, recibe otro mensaje amenazador.',
            videoPath: 'https://p-def5.pcloud.com/cfZrA9mUGZTtWhMS7Z9EWM7ZZYMJuXkZQ5ZZdIRZZvH5kcZQYZr8Z2YZ1RZmzZjYZrRZPHZPpZlFZsQZU4ZzzZ8pZEnGrDJkEp6pBEbyhjnyEV5MTce8k/Asesinato%20Para%20Principiantes%20-%20T1%20E5.mkv',
            image: 'https://th2.pcloud.com/tLZu2FbUGZhV0Z9EWM7ZZWlJuXkZdIRZJZZg0ZpXZ58ZsLZn4ZFTuxEaNaKMzUisvHhGrwhjcq6z5y/ThumbE5.jpg'
        },
        {
            title: 'Episodio 6',
            duration: '51 min',
            description: 'La policía hace un arresto, pero Pip no está segura de que el caso esté solucionado, así que va a visitar a la única persona que podría tener respuestas.',
            videoPath: 'https://p-def2.pcloud.com/cfZ5q9mUGZpnWhMS7Z9EWM7ZZeMJuXkZQ5ZZdIRZZG8UaoZX8ZoRZEzZoQZF4ZlYZXzZEpZtFZzFZFYZKRZQ8Z18Zntso3Nc1z6063G5MDxj6NHdIcfUk/Asesinato%20Para%20Principiantes%20-%20T1%20E6.mkv',
            image: 'https://th3.pcloud.com/tLZDWFbUGZykXZ9EWM7ZZWlJuXkZdIRZJZZg0ZpXZMQZtpZHFZOdeFKQV72T72LRonQQdvQzSUPOPy/ThumbE6.jpg'
        }
    ];

    // Crear la lista de episodios
    episodes.forEach((episode, index) => {
        const episodeItem = document.createElement('li');
        const episodeButton = document.createElement('button');
        episodeButton.classList.add('episodio');
        episodeButton.onclick = () => loadEpisode(index);

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
        durationSpan.style.color = '#fff'; // Cambiado a blanco
        durationSpan.textContent = episode.duration;

        titleDurationDiv.appendChild(h3);
        titleDurationDiv.appendChild(durationSpan);

        const p = document.createElement('p');
        p.textContent = episode.description;

        episodeText.appendChild(titleDurationDiv);
        episodeText.appendChild(p);

        episodeInfo.appendChild(episodeImg);
        episodeInfo.appendChild(episodeText);
        episodeButton.appendChild(episodeInfo);

        // Resaltar el episodio actual
        episodeButton.classList.toggle('current', index === currentEpisodeIndex);
        if (index === currentEpisodeIndex) {
            episodeButton.style.backgroundColor = 'rgba(74, 91, 104, 0.719)';
        }

        episodeItem.appendChild(episodeButton);
        episodeList.appendChild(episodeItem);
    });
}

// Función para cargar un episodio
function loadEpisode(index) {
    const video = document.querySelector('#videoPlayer');
    const episodes = document.querySelectorAll('.episodio');

    currentEpisodeIndex = index; // Actualizar el índice del episodio actual
    video.src = episodes[index].getAttribute('data-video');
    video.play();

    // Resaltar el episodio actual
    episodes.forEach((episode, i) => {
        if (i === index) {
            episode.classList.add('current');
        } else {
            episode.classList.remove('current');
        }
    });
}

// Inicializar el texto del botón como "Seleccionar Temporada"
document.querySelector('.dropdown-button').textContent = "Seleccionar Temporada";

// Mostrar por defecto los episodios de la primera temporada
changeSeason(1);
