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
                videoPath: 'https://download1580.mediafire.com/p5nzu3tvxtvgkGQ_qZYuWJn0V7YD3EqDdtlqljDsURQ1yM3bzg3OZJmSbP3anLekS2njexeFHtmHty9jgBSP-060uS8ju2risrM0RoZwzSDLjbO5lNpYUCX60WamHleE5HnikMyp7dXLqOxejKeBmT06vKZidUEmyqfmkMx3cOduqG0/66l6oz150o04fff/MATIAS+PONCE++LA+PEL%C3%8DCULA.webm',
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