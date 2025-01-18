document.addEventListener('DOMContentLoaded', function () {
  // Establecer overflow en hidden para el body si se requiere
  document.body.style.overflow = 'hidden';

  // Crear un elemento <script> para incluir el CDN de Perfect Scrollbar
  var script = document.createElement('script');
  script.src = 'https://unpkg.com/perfect-scrollbar/dist/perfect-scrollbar.min.js';

  script.onload = function () {
    // Asegurarnos de que ambos contenedores existan antes de inicializar PerfectScrollbar

    var headerContainer = document.getElementById('scroll-container-header');
    if (headerContainer) {
      new PerfectScrollbar(headerContainer);
    }

    var bodyContainer = document.getElementById('scroll-container-body');
    if (bodyContainer) {
      new PerfectScrollbar(bodyContainer);
    }
  };

  // Agregar el script a la cabeza del documento (o al cuerpo)
  document.head.appendChild(script);
});
