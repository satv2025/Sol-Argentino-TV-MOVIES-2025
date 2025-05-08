// Inicializar Plyr
const player = new Plyr('#videoPlayer');

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
                videoPath: 'https://download1523.mediafire.com/umf09001ul3gIqdSXJzckPC4USK-EDZ_WPQmU1iHilIMdkiFS3pEnRqK0mvX2V33QTQKR7x1jGhzNhiax5SLdjFOy6QMjg-XH1X0sj-F5y7c7rVJf4RhHjEJ2ZhWEh00pYrHBaXNBHOl3H9kdSqFCeBG3x-n4zw2TEn6qi8fjBXu9OQ/9iq2gagcr345fac/Asesinato+Para+Principiantes+-+T1+E1.mp4',
                image: 'https://www.mediafire.com/convkey/8ebd/67e8toxnggmojw09g.jpg',
                duration: '43 min'
            },
            {
                title: 'Episodio 2',
                description: 'Luego de entrevistar a las mejores amigas de Andie, Pip tiene una idea más clara de quién era la víctima, pero tras reorganizar fotos viejas empieza a comprender mejor todo.',
                videoPath: 'https://download847.mediafire.com/s4np6sy8l3egNXfvxxSs9h1ow2sTftW3ebewUxuWatXLkx5ys_bZXIicl9yG0kQcyV9Dvfip94Qag9UqCGj1hkKui4ucIVt22g5_Y-NEffFnxvKkBvYxWGv5sHI4CJ6U2MQh8L1wu66jsWIxjbajj4JqW_IM5jtah1YGW8wHFkPnFxg/xof6urhwtqlrmwz/Asesinato+Para+Principiantes+-+T1+E2.mkv',
                image: 'https://www.mediafire.com/convkey/88d0/o7ja6efkgc857oo9g.jpg',
                duration: '44 min'
            },
            {
                title: 'Episodio 3',
                description: 'Pip descubre por primera vez en su vida el lado oscuro cuando va a una fiesta clandestina. Y su siguiente pista la lleva a territorio aún más peligroso.',
                videoPath: 'https://codeberg.org/skb10x/mediatest/src/branch/main/Asesinato-Para-Principiantes-T1-E3.m3u8',
                image: 'https://www.mediafire.com/convkey/6ed1/6870czca0karqn29g.jpg',
                duration: '43 min'
            },
            {
                title: 'Episodio 4',
                description: 'Pip y Ravi siguen una nueva pista que los lleva lejos de Little Kilton. Allí, descubren una valiosa prueba... y una desagradable sorpresa.',
                videoPath: 'https://codeberg.org/skb10x/mediatest/src/commit/f9b03305f65e938f77336c6290287a4fbadf65f7/Asesinato-Para-Principiantes-T1-E3.m3u8',
                image: 'https://www.mediafire.com/convkey/0de9/czivzlrwjyr2rlj9g.jpg',
                duration: '44 min'
            },
            {
                title: 'Episodio 5',
                description: 'Una impactante confesión arroja luz en la investigación. Antes de que Pip pueda decidir qué hacer, recibe otro mensaje amenazador.',
                videoPath: 'https://download1526.mediafire.com/w0akk40idzugrDV_W0c969Q3ps5XmCpsVSKqihzo0MvXT4OVZl_CehnuHQt4YJ0gb0hYjRmyvN1ymP9J3bWunmBOeSjQA74RYOz7xh2h9CuA2jWdKr3h_s60xT4qwcz0-gEFjIAnRg65LitYrJ0QOVShsT8ia1kchbFhPnpYPVVMygg/396alkj4s2sacta/Asesinato+Para+Principiantes+-+T1+E5.mkv',
                image: 'https://occ-0-2442-1380.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABeED_UJixLwFl5Ln39ljb3EY3B-_bE2aisB_eLtQVDlnZTf_vQ3hbjJseEWVQtQR3_xSoTLDsQaJqB20WoXVRq4ALdwp2VwxqDgvq9ssa8GfB9Ed925tZ5zk.jpg?r=2f5',
                duration: '50 min'
            },
            {
                title: 'Episodio 6',
                description: 'La policía hace un arresto, pero Pip no está segura de que el caso esté solucionado, así que va a visitar a la única persona que podría tener respuestas.',
                videoPath: 'https://download1589.mediafire.com/uhzd8h8hryugYMcmqFogWFVm5aRtlRIEzCeBkU0_ljEm1WlS5HcmVA00epICZDDk5W07xXzez_aFYAJrc9NORoYq3yHQ-CIMMHvkwrxgOzeU9B9-CfGiT6JUmrw9XmBBN9gaYN3vvZF2Dzbqj0opU53J-WtVGf3e0fjNagAptzOsrhw/hwv0ozye7p0g7s4/Asesinato+Para+Principiantes+-+T1+E6.mkv',
                image: 'https://www.mediafire.com/convkey/0869/05fmkuq6l9kj4159g.jpg',
                duration: '51 min'
            },
        ],
        2: [
            {
                title: 'Próxima temporada',
                description: 'Otra temporada está por llegar...',
                videoPath: '#',
                image: '',
                duration: ''
            }
        ]
    };

    if (season === 2) {
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
        const selectedEpisodes = episodes[season];

        selectedEpisodes.forEach(episode => {
            const episodeItem = document.createElement('li');
            const episodeButton = document.createElement('button');
            episodeButton.classList.add('episodio');
            episodeButton.onclick = () => loadEpisode(episode.videoPath);

            const episodeInfo = document.createElement('div');
            episodeInfo.classList.add('episodio-info');
            episodeInfo.style.position = 'relative';

            const episodeImg = document.createElement('div');
            episodeImg.classList.add('episodio-img');
            const img = document.createElement('img');
            img.src = episode.image || 'default_image.jpg';
            img.alt = episode.title;
            episodeImg.appendChild(img);

            const episodeText = document.createElement('div');
            episodeText.classList.add('episodio-text');
            const h3 = document.createElement('h3');
            h3.textContent = episode.title;
            const p = document.createElement('p');
            p.textContent = episode.description;

            const durationDiv = document.createElement('div');
            durationDiv.classList.add('episodio-duration');
            durationDiv.style.position = 'absolute';
            durationDiv.style.top = '10px';
            durationDiv.style.right = '10px';
            durationDiv.style.color = '#fff';
            durationDiv.style.backgroundColor = '#ffffff00';
            durationDiv.style.padding = '2px 5px';
            durationDiv.textContent = episode.duration || 'N/A';

            episodeText.appendChild(h3);
            episodeText.appendChild(p);
            episodeText.appendChild(durationDiv);

            episodeInfo.appendChild(episodeImg);
            episodeInfo.appendChild(episodeText);
            episodeButton.appendChild(episodeInfo);
            episodeItem.appendChild(episodeButton);
            episodeList.appendChild(episodeItem);
        });
    }

    dropdownContent.style.display = 'none';
    dropdownButton.classList.remove('open');
}

// ✅ Función para cargar un episodio con soporte para .m3u8 y Plyr
function loadEpisode(videoPath) {
    const video = document.querySelector('#videoPlayer');

    // Detener cualquier reproducción y limpiar fuente anterior
    if (window.hls) {
        window.hls.destroy();
        window.hls = null;
    }

    if (videoPath.endsWith('.m3u8')) {
        if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(videoPath);
            hls.attachMedia(video);
            window.hls = hls;
            hls.on(Hls.Events.MANIFEST_PARSED, function () {
                video.play();
            });
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = videoPath;
            video.addEventListener('loadedmetadata', () => video.play());
        } else {
            alert('Este navegador no soporta video HLS.');
        }
    } else {
        video.src = videoPath;
        video.load();
        video.play();
    }
}

// Inicializar el texto del botón como "Seleccionar Temporada"
document.querySelector('.dropdown-button').textContent = "Seleccionar Temporada";

// Mostrar por defecto los episodios de la primera temporada
changeSeason(1);

// Manejo del dropdown
document.querySelector('.dropdown-button').addEventListener('click', function () {
    const dropdownContent = document.querySelector('.dropdown-content');
    this.classList.toggle('open');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});

// Cerrar el dropdown si se hace clic fuera de él
document.addEventListener('click', function (event) {
    const dropdownContent = document.querySelector('.dropdown-content');
    const dropdownButton = document.querySelector('.dropdown-button');
    if (!dropdownContent.contains(event.target) && !dropdownButton.contains(event.target)) {
        dropdownContent.style.display = 'none';
        dropdownButton.classList.remove('open');
    }
});