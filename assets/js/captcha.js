lucide.createIcons();

function checkCaptcha() {
  const recaptchaResponse = grecaptcha.getResponse();
  const turnstileResponse = document.querySelector('input[name="cf-turnstile-response"]')?.value;
  const accessBtn = document.getElementById('access-btn');

  if (recaptchaResponse && turnstileResponse) {
    // Habilitar el botón
    accessBtn.disabled = false;
    accessBtn.classList.add('enabled');
    accessBtn.onclick = () => {
      window.location.href = "/inicio";
    };
  }
}

    // Inicializar íconos Lucide
    lucide.createIcons();