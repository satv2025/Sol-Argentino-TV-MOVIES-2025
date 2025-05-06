// header-component.js

class HeaderComponent extends HTMLElement {
  constructor() {
    super();

    // Crear un shadow DOM
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    // Estilos y HTML dentro del Shadow DOM
    this.shadowRoot.innerHTML = `
      <style>
header {
    background-image: url('https://movies.solargentinotv.com.ar/—Pngtree—black background texture advertising_1911402.png');
    background-size: cover; /* Asegura que la imagen cubra todo el header */
    background-position: center; /* Centra la imagen */
    padding: 1.25em; /* Espaciado dentro del header */
    box-shadow: 0 0.25em 0.375em rgba(0, 0, 0, 0.1); /* Sombra ligera */
}

header a.active {
    color: #fff;
}

/* Estilo para el ícono de la campana */
.notification-icon {
    position: relative;
    cursor: pointer;
    font-size: 1.5em; /* Tamaño ajustable dependiendo de la base de la fuente */
    left: 65em;
    top: -3em;
    max-width: 10em;
  }
  
  /* El contador de notificaciones en rojo */
  .notification-count {
    position: absolute;
    top: -3.7em;  /* Ajuste basado en la fuente */
    right: 23em;
    background-color: red;
    color: white;
    border-radius: 50%;
    padding: 0.3em;
    font-size: 0.75em; /* Reducción proporcional al ícono */
  }
  
  /* Estilo para el modal de notificaciones */
  .notifications-popup {
    display: none; /* Oculto por defecto */
    position: absolute;
    top: 21.5em;
    right: 21.4em;  /* Ajuste de distancia */
    transform: translateY(-50%);
    background-color: #181818;
    width: 22em;  /* 15em en lugar de 250px */
    height: 30em;
    box-shadow: 0 0 1em rgba(0, 0, 0, 0.1);
    z-index: 1000;
    padding: 1em;
    font-size: 1em;
    border-radius: 0.3em;
  }
  
  .notifications-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .notifications-header h4{
  position: relative;
  margin-top: -1em;
  left: 0.3em;
  }

  .notifications-popup ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .notifications-popup ul li {
    padding: 0.5em;
    border-bottom: 0.1em solid #eee;
  }
  
  /* Estilo para el botón de cerrar */
  .notif {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 1em;
    position: relative;
    left: 0em;
    color: #007bff;
    top: -0.7em;
  }
  
  /* Media Queries para pantallas pequeñas (ej. móviles) */
  @media (max-width: 600px) {
    .notification-icon {
      font-size: 1.2em; /* Reducir tamaño del ícono en pantallas pequeñas */
    }
  
    .notification-count {
      top: -0.2em;
      right: -0.2em;
      padding: 0.2em;
      font-size: 0.6em;
    }
  
    .notifications-popup {
      width: 12em;  /* Reducir el tamaño del modal en pantallas pequeñas */
      right: 0.5em; /* Ajustar la posición a la derecha */
    }
  
    .notifications-header {
      font-size: 0.9em;
    }
  
    .notifications-popup ul li {
      padding: 0.4em; /* Reducir padding para pantallas pequeñas */
    }
  
    .notif {
      font-size: 0.9em; /* Reducir tamaño del botón */
    }
  }
  
  /* Media Queries para pantallas medianas (tabletas) */
  @media (max-width: 768px) {
    .notification-icon {
      font-size: 1.4em; /* Ajustar para tabletas */
    }
  
    .notifications-popup {
      width: 13em;  /* Ajustar el tamaño del modal en tabletas */
    }
  
    .notifications-header {
      font-size: 1em;
    }
  
    .notifications-popup ul li {
      padding: 0.45em; /* Ajustar padding */
    }
  
    .notif {
      font-size: 1em; /* Ajustar el tamaño del botón */
    }
  }

  /* Estilos básicos del botón */
.avisame-button {
    display: flex;
    align-items: center;
    background-color: #0078D4;
    color: white;
    border: none;
    padding: 0.5em 1em; /* Usando 'em' para que sea más responsive */
    font-size: 1em;
    cursor: pointer;
    border-radius: 0 0 0.3em 0.3em; /* Border-radius especificado */
    transition: all 0.3s ease;
    font-family: 'Netflix Sans';
    justify-content: center;
}

.avisame-button .bell-icon {
    margin-right: 0.5em; /* Espacio entre el ícono de la campana y el texto */
}

/* Estilo cuando el botón está en estado "Activado" */
.avisame-button.recordatorio-activado {
    background-color: #fff;
    color: #000;
}

/* Formulario de suscripción */
.subscription-form {
    margin-top: 1em;
    display: flex;
    flex-direction: column;
    gap: 0.5em; /* Espacio entre los campos del formulario */
    font-family: 'Netflix Sans';
}

.subscription-form input {
    padding: 0.5em;
    border-radius: 0.3em;
    border: 1px solid #ccc;
    font-size: 1em;
    font-family: 'Netflix Sans';
}

.subscription-form button {
    background-color: #0078D4;
    color: white;
    border: none;
    padding: 0.5em 1em;
    font-size: 1em;
    cursor: pointer;
    border-radius: 0.3em;
    font-family: 'Netflix Sans';
}

#logout-btn {
    color: #0078D4;
    font-family: 'Netflix Sans';
    border: #0078D4 0.2em solid;
    width: 12%;
    height: 32%;
    text-align: center;
    background: #fff;
    font-weight: 700;
    align-content: center;
    border-radius: 0.3em;
    cursor: pointer;
    top: -2.5em;
    left: 14.4em;
    justify-content: center;
    text-align: center;
    display: grid;
    margin-top: 0.3em;
}

#logout-btn:hover {
    background-color: #0078D4; /* Cambio de color al pasar el ratón por encima */
    border-radius: 0.3em;
  
    color: white; /* Cambia el color del texto al pasar el ratón */
}
#login-btn {
    color: #0078D4;
    font-family: 'Netflix Sans';
    border: #0078D4 0.2em solid;
    width: 12%;
    height: 32%;
    text-align: center;
    background: #fff;
    font-weight: 700;
    align-content: center;
    border-radius: 0.3em;
    cursor: pointer;
    top: -2.5em;
    left: 14.4em;
    justify-content: center;
    text-align: center;
    display: grid;
    margin-top: 0.3em;
}

#login-btn:hover {
    background-color: #0078D4; /* Cambio de color al pasar el ratón por encima */
    border-radius: 0.3em;
    color: white; /* Cambia el color del texto al pasar el ratón */
}

/* Media Queries para diseño responsive */
@media (max-width: 48em) { /* Máximo 48em = 768px */
    .avisame-button {
        font-size: 0.9em;
        padding: 0.4em 0.8em;
    }

    .avisame-button .bell-icon {
        margin-right: 0.3em;
    }

    .subscription-form {
        gap: 0.4em;
    }

    .subscription-form input {
        font-size: 0.9em;
        padding: 0.4em;
    }

    .subscription-form button {
        font-size: 0.9em;
        padding: 0.4em 0.8em;
    }
}

@media (max-width: 30em) { /* Máximo 30em = 480px */
    .avisame-button {
        font-size: 0.8em;
        padding: 0.3em 0.6em;
    }

    .avisame-button .bell-icon {
        margin-right: 0.3em;
    }

    .subscription-form {
        gap: 0.3em;
    }

    .subscription-form input {
        font-size: 0.8em;
        padding: 0.3em;
    }

    .subscription-form button {
        font-size: 0.8em;
        padding: 0.3em 0.6em;
    }
}

/* Media Queries para diseño responsive */
@media (max-width: 48em) { /* Máximo 48em = 768px */
    .avisame-button {
        font-size: 0.9em;
        padding: 0.4em 0.8em;
    }

    .avisame-button .bell-icon {
        margin-right: 0.3em;
    }

    .subscription-form {
        gap: 0.4em;
    }

    .subscription-form input {
        font-size: 0.9em;
        padding: 0.4em;
    }

    .subscription-form button {
        font-size: 0.9em;
        padding: 0.4em 0.8em;
    }
}

@media (max-width: 30em) { /* Máximo 30em = 480px */
    .avisame-button {
        font-size: 0.8em;
        padding: 0.3em 0.6em;
    }

    .avisame-button .bell-icon {
        margin-right: 0.3em;
    }

    .subscription-form {
        gap: 0.3em;
    }

    .subscription-form input {
        font-size: 0.8em;
        padding: 0.3em;
    }

    .subscription-form button {
        font-size: 0.8em;
        padding: 0.3em 0.6em;
    }
}

/* Media Queries para diseño responsive */
@media (max-width: 48em) { /* Máximo 48em = 768px */
    .avisame-button {
        font-size: 0.9em;
        padding: 0.4em 0.8em;
    }

    .avisame-button .bell-icon {
        margin-right: 0.3em;
    }

    .subscription-form {
        gap: 0.4em;
    }

    .subscription-form input {
        font-size: 0.9em;
        padding: 0.4em;
    }

    .subscription-form button {
        font-size: 0.9em;
        padding: 0.4em 0.8em;
    }
}

@media (max-width: 30em) { /* Máximo 30em = 480px */
    .avisame-button {
        font-size: 0.8em;
        padding: 0.3em 0.6em;
    }

    .avisame-button .bell-icon {
        margin-right: 0.3em;
    }

    .subscription-form {
        gap: 0.3em;
    }

    .subscription-form input {
        font-size: 0.8em;
        padding: 0.3em;
    }

    .subscription-form button {
        font-size: 0.8em;
        padding: 0.3em 0.6em;
    }
}

nav a:active {
    color: #fff;
}

header a.active {
    color: #fff;
}

nav ul {
    display: flex;
    justify-content: center; /* Centra los elementos del menú */
    list-style: none; /* Elimina los puntos de lista */
    top: 2.4em;
    position: relative;
}

nav li {
    margin: 0 1.25em; /* Espaciado entre los elementos del menú */
}

nav a {
    color: #0078D4; /* Color azul para los enlaces */
    text-decoration: none; /* Elimina el subrayado de los enlaces */
    font-weight: bold; /* Texto en negrita */
    font-size: 1.125em; /* Tamaño de fuente para los enlaces */
    transition: color 0.3s ease; /* Efecto suave para el cambio de color */
    position: relative;
    top: 0.3em;
    font-size: 1.4em;
}

nav a:hover {
    color: #005a9e; /* Azul más oscuro en hover */
}

.logo {position: absolute;color: #0078D4;font-weight: 700;font-size: 2em;top: 0.2em;left: 0.78em;}

/* Estilos para la barra de búsqueda */
.search-form {
    display: flex;
    justify-content: right; /* Alinea la barra de búsqueda a la derecha */
    margin-top: 0.9em; /* Espaciado superior */
    position: absolute; /* Cambiar a absolute */
    top: 2.1em;
    right: 2em; /* Añadir un margen para que no se pegue al borde derecho */
    z-index: 10; /* Asegura que esté por encima de otros elementos */
}

.search-form input[type="text"] {
    width: 250px; /* Ancho fijo para el input */
    font-family: 'Netflix Sans'; /* Tipografía */
    padding: 10px;
    font-size: 16px;
    border: 2px solid #0078D4; /* Borde azul */
    border-radius: 5px 0 0 5px; /* Bordes redondeados */
    outline: none;
    font-weight: 700; /* Negrita */
    color: #0078D4;
}

.search-form input[type="text"]:focus {
    border-color: #0078D4; /* Cambia el borde a azul cuando se enfoca */
}

.search-form input[type="text"]::placeholder {
    color: #0078D4; /* Color del texto placeholder */
}

.search-form button {
    font-family: 'Netflix Sans';
    padding: 10px 15px;
    font-size: 16px;
    background-color: #0078D4; /* Fondo azul */
    color: white;
    border-left: #fff;
    border-top: 2px solid #0078D4;
    border-right: 2px solid #0078D4;
    border-bottom: 2px solid #0078D4;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    font-weight: 700;
    z-index: 10; /* Asegura que esté por encima de otros elementos */
}

.search-form button:hover {
    background-color: #007bff; /* Fondo más oscuro en hover */
}

.search-form button:focus {
    outline: none; /* Elimina el borde del botón al hacer clic */
}

main {
    flex-grow: 1; /* Hace que el contenedor principal ocupe el espacio restante */
    display: flex;
    flex-direction: column;
    gap: 1em; /* Espacio entre las filas */
}

.login, .logout, #user-nick {
    background-color: #0078D400;
    color: #ffffff00;
    border: none;
    padding: 0.625em 1.25em; /* 10px 20px = 0.625em 1.25em */
    font-weight: bold;
    font-size: 1em; /* 16px = 1em */
    border-radius: 0 0 0.3em 0.3em; /* 5px = 0.3125em */
    cursor: pointer;
    transition: background-color 0.3s ease;
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
}

#user-nick {
    color: #0078D4;
    font-family: 'Netflix Sans';
    border: #0078D4 0.2em solid;
    width: 12%;
    height: 32%;
    text-align: center;
    background: #fff;
    font-weight: 700;
    align-content: center;
    justify-content: center;
    border-radius: 0.3em;
    cursor: pointer; /* Añadido para mejorar la interacción con el botón */
}
      </style>

      <header>
        <nav>
          <p class="logo">SATVMOVIES</p>
          <ul>
            <li><a href="../index">Inicio</a></li>
            <li><a href="../proximamente">Próximamente</a></li>
            <li><a href="../acercade">Acerca De</a></li>
          </ul>
        </nav>

        <div id="user-nick">Usuario No Identificado</div>
        <button id="login-btn">Iniciar sesión</button>
        <button id="logout-btn" style="display: none;">Cerrar sesión</button>
      </header>
    `;

    this._setupEventListeners();
  }

  _setupEventListeners() {
    const loginBtn = this.shadowRoot.querySelector("#login-btn");
    const logoutBtn = this.shadowRoot.querySelector("#logout-btn");
    const userNick = this.shadowRoot.querySelector("#user-nick");

    let isLoggedIn = false;

    // Cambiar entre "Iniciar sesión" y "Cerrar sesión"
    loginBtn.addEventListener('click', () => {
      isLoggedIn = true;
      userNick.textContent = "Bienvenido, Usuario!";
      loginBtn.style.display = "none";
      logoutBtn.style.display = "block";
    });

    logoutBtn.addEventListener('click', () => {
      isLoggedIn = false;
      userNick.textContent = "Usuario No Identificado";
      loginBtn.style.display = "block";
      logoutBtn.style.display = "none";
    });
  }
}

// Definir el nuevo componente
customElements.define('header-component', HeaderComponent);