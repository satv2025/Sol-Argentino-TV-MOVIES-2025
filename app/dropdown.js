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
                videoPath: 'http://181.24.209.242:8080/videos/Asesinato%20Para%20Principiantes%20-%20T1%20E1.mp4',
                image: 'https://www.mediafire.com/convkey/8ebd/67e8toxnggmojw09g.jpg',
                duration: '43 min'
            },
            {
                title: 'Episodio 2',
                description: 'Luego de entrevistar a las mejores amigas de Andie, Pip tiene una idea más clara de quién era la víctima, pero tras reorganizar fotos viejas empieza a comprender mejor todo.',
                videoPath: 'http://192.168.1.41:8080/videos/Asesinato%20Para%20Principiantes%20-%20T1%20E2.mkv',
                image: 'https://www.mediafire.com/convkey/88d0/o7ja6efkgc857oo9g.jpg',
                duration: '44 min'
            },
            {
                title: 'Episodio 3',
                description: 'Pip descubre por primera vez en su vida el lado oscuro cuando va a una fiesta clandestina. Y su siguiente pista la lleva a territorio aún más peligroso.',
                videoPath: 'http://192.168.1.41:8080/videos/Asesinato%20Para%20Principiantes%20-%20T1%20E3.mkv',
                image: 'https://www.mediafire.com/convkey/6ed1/6870czca0karqn29g.jpg',
                duration: '43 min'
            },
            {
                title: 'Episodio 4',
                description: 'Pip y Ravi siguen una nueva pista que los lleva lejos de Little Kilton. Allí, descubren una valiosa prueba... y una desagradable sorpresa.',
                videoPath: 'http://192.168.1.41:8080/videos/Asesinato%20Para%20Principiantes%20-%20T1%20E4.mkv',
                image: 'https://www.mediafire.com/convkey/0de9/czivzlrwjyr2rlj9g.jpg',
                duration: '44 min'
            },
            {
                title: 'Episodio 5',
                description: 'Una impactante confesión arroja luz en la investigación. Antes de que Pip pueda decidir qué hacer, recibe otro mensaje amenazador.',
                videoPath: 'https://download948.mediafire.com/4oce9wz5mmwgAx-nHSPA3XdV-EOzYmZSSLgCT9OEO5WokzQDg__5zk9UoBLuqGHO0bfXfnwzglJi9k2QOXG3xaWmn9VcV9W_24ZBERepKQqp_SbHZVzm0Vhjm5C6FWNFGKhUYKHVWUdMLuEVylmJCfnvqJyag8wa-sRFjKjMx5mBwFw/396alkj4s2sacta/Asesinato+Para+Principiantes+-+T1+E5.mkv',
                image: 'https://occ-0-2442-1380.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABeED_UJixLwFl5Ln39ljb3EY3B-_bE2aisB_eLtQVDlnZTf_vQ3hbjJseEWVQtQR3_xSoTLDsQaJqB20WoXVRq4ALdwp2VwxqDgvq9ssa8GfB9Ed925tZ5zk.jpg?r=2f5',
                duration: '50 min'
            },
            {
                title: 'Episodio 6',
                description: 'La policía hace un arresto, pero Pip no está segura de que el caso esté solucionado, así que va a visitar a la única persona que podría tener respuestas.',
                videoPath: 'http://192.168.1.41:8080/videos/Asesinato%20Para%20Principiantes%20-%20T1%20E6.mkv',
                image: 'https://www.mediafire.com/convkey/0869/05fmkuq6l9kj4159g.jpg',
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