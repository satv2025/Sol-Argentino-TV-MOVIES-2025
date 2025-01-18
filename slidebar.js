  // Asegurarnos de que el DOM está completamente cargado antes de ejecutar el código
  document.addEventListener('DOMContentLoaded', function () {
    // Aplicar el estilo 'overflow: hidden;' al body
    document.body.style.overflow = 'hidden';

    // Crear un elemento <script> para incluir el CDN de Perfect Scrollbar
    var script = document.createElement('script');
    script.src = 'https://unpkg.com/perfect-scrollbar/dist/perfect-scrollbar.min.js';
    script.onload = function () {
      // Inicializar PerfectScrollbar después de que el script haya sido cargado
      var ps = new PerfectScrollbar('#scroll-container');
    };

    // Agregar el script a la cabeza del documento (o al cuerpo)
    document.head.appendChild(script);
  });
