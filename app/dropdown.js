// Función para cargar los episodios según la temporada seleccionada
function changeSeason(season) {
    const episodeList = document.getElementById('episode-list');
    const dropdownButton = document.querySelector('.dropdown-button'); // Obtener el botón del dropdown
    const dropdownContent = document.querySelector('.dropdown-content'); // Obtener el contenido del dropdown

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
                videoPath: 'https:\/\/p-def3.pcloud.com\/cBZbnz8UGZ0Fc4MS7ZZZcifuXkZ2ZZysRZkZfRxn5XZJQZr0ZDpZmYZdQZXYZTpZb4ZQYZM4ZRRZwYZVQZ34Zw6zJ5Zk5PzqvSClo8dGA05gNlT65Sjphqk\/Asesinato%20Para%20Principiantes%20-%20T1%20E1.mp4',
                image: 'https://th3.pcloud.com/tLZvN9mUGZgEVZ9EWM7ZZ5TJuXkZdIRZJZZg0ZpXZ8QZP8ZHzZz1w5oOgTWKhbhpUIDwp3lSFYOWaX/ThumbE1.jpg',
                duration: '43 min'
            },
            {
                title: 'Episodio 2',
                description: 'Luego de entrevistar a las mejores amigas de Andie, Pip tiene una idea más clara de quién era la víctima, pero tras reorganizar fotos viejas empieza a comprender mejor todo.',
                videoPath: 'https:\/\/p-def8.pcloud.com\/cBZtyumUGZBMHhMS7ZZZ3UfuXkZ2ZZysRZkZz5E3AZTpZOQZSRZqYZGzZ2JZKHZi4ZwRZt4ZizZF8ZmLZbZr6zJ5ZitqHp0QVq5mhdGIHG5visp1zFRly\/Asesinato%20Para%20Principiantes%20-%20T1%20E2.mkv',
                image: 'https://th3.pcloud.com/tLZv39mUGZye0Z9EWM7ZZhTJuXkZdIRZJZZg0ZpXZXYZuQZc8ZocAH58INTEhXIcz0E5zz1fSmExl7/ThumbE2.jpg',
                duration: '44 min'
            },
            {
                title: 'Episodio 3',
                description: 'Pip descubre por primera vez en su vida el lado oscuro cuando va a una fiesta clandestina. Y su siguiente pista la lleva a territorio aún más peligroso.',
                videoPath: 'https:\/\/p-def8.pcloud.com\/cBZRkYmUGZntyhMS7ZZZBGfuXkZ2ZZysRZkZEC33IZ9FZ5QZe4ZgzZgHZuzZOpZ04ZD8ZK8ZUzZQ4ZWYZjLZo6zJ5ZMrCOymYUaLR60SYngDczAp16Xxey\/Asesinato%20Para%20Principiantes%20-%20T1%20E3.mkv',
                image: 'https://th3.pcloud.com/tLZ9v9mUGZqEXZ9EWM7ZZ7MJuXkZdIRZJZZg0ZpXZHQZEYZc4ZgnuD6KaYtSHOy2eMwVIV2uHF7SUV/ThumbE3.jpg',
                duration: '43 min'
            },
            {
                title: 'Episodio 4',
                description: 'Pip y Ravi siguen una nueva pista que los lleva lejos de Little Kilton. Allí, descubren una valiosa prueba... y una desagradable sorpresa.',
                videoPath: 'https:\/\/p-def6.pcloud.com\/cBZkyumUGZ1gHhMS7ZZZDGfuXkZ2ZZysRZkZ6TcaAZOQZ5RZDpZmzZx8Z0HZMLZF4ZMQZ6YZ78ZuRZhYZo8Z7EzJ5ZK8icG85gwipBf1a60nqV6JrqWt4y\/Asesinato%20Para%20Principiantes%20-%20T1%20E4.mkv',
                image: 'https://th3.pcloud.com/tLZKfFbUGZmjVZ9EWM7ZZRzLuXkZdIRZJZZg0ZpXZUYZeQZrpZX4IXELdnr0V4SuP0kAK8f7X5xyJX/ThumbE4.jpg',
                duration: '44 min'
            },
            {
                title: 'Episodio 5',
                description: 'Una impactante confesión arroja luz en la investigación. Antes de que Pip pueda decidir qué hacer, recibe otro mensaje amenazador.',
                videoPath: 'https:\/\/p-def5.pcloud.com\/cBZrA9mUGZTtWhMS7ZZZTGfuXkZ2ZZysRZkZvH5kcZQYZr8Z2YZ1RZmzZjYZrRZPHZPpZlFZsQZU4ZzzZ8pZpEzJ5ZlgUUaj3VmsLlr8U4uYosFBOGX5BV\/Asesinato%20Para%20Principiantes%20-%20T1%20E5.mkv',
                image: 'https://th2.pcloud.com/tLZu2FbUGZhV0Z9EWM7ZZWlJuXkZdIRZJZZg0ZpXZ58ZsLZn4ZFTuxEaNaKMzUisvHhGrwhjcq6z5y/ThumbE5.jpg',
                duration: '50 min'
            },
            {
                title: 'Episodio 6',
                description: 'La policía hace un arresto, pero Pip no está segura de que el caso esté solucionado, así que va a visitar a la única persona que podría tener respuestas.',
                videoPath: 'https:\/\/p-def2.pcloud.com\/cBZ5q9mUGZpnWhMS7ZZZxGfuXkZ2ZZysRZkZG8UaoZX8ZoRZEzZoQZF4ZlYZXzZEpZtFZzFZFYZKRZQ8Z18ZHEzJ5ZsbrNmwvMqWVD9SlSsvcuipkm89RV\/Asesinato%20Para%20Principiantes%20-%20T1%20E6.mkv',
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
                duration: '' // No hay duración para la próxima temporada
            }
        ]
    };

    // Si la temporada es la 2, mostramos un mensaje
    if (season == 2) {
        const messageItem = document.createElement('li');
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('episodio-info');
        
        const messageText = document.createElement('div');
        messageText.classList.add('episodio-text');
        const h3 = document.createElement('h3');
        h3.textContent = 'Otra temporada está por llegar...';
        const p = document.createElement('p');
        p.textContent = '¡Próximamente más episodios!';

        messageText.appendChild(h3);
        messageText.appendChild(p);

        messageDiv.appendChild(messageText);
        messageItem.appendChild(messageDiv);
        episodeList.appendChild(messageItem);
    } else {
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
    }

    // Cerrar el dropdown después de seleccionar una temporada
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
