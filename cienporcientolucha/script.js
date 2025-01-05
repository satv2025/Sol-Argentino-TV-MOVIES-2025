// Asumiendo que tienes múltiples pistas de audio (dual).
const player = new Plyr('#player', {
    controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'],
});

// Función para seleccionar la pista de audio predeterminada
player.on('ready', () => {
    const audioTracks = player.audioTracks;
    // Cambiar la pista de audio a la pista 1 (index basado en 0)
    audioTracks[0].enabled = true; // Habilita la primera pista de audio
    audioTracks[1].enabled = false; // Deshabilita la segunda pista de audio
});