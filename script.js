// ===== Traduções (mantidas iguais) =====
const translations = {
  en: {
    brand: "AgriStrong", navHome: "Home", navAbout: "About", navSustain: "Sustainability",
    navContact: "Contact", loginBtn: "Login",
    heroTitle: "Strong & Sustainable Agriculture",
    heroSub: "Feeding the world while preserving the planet. Innovation, respect and productivity hand in hand.",
    heroCTA: "Learn More",
    aboutTitle: "Our Mission",
    aboutText: "We connect technology, field knowledge and environmental responsibility to build a food system that is productive, fair and regenerative.",
    cardsTitle: "Sustainable Practices",
    card1Title: "Regenerative Soil", card1Desc: "Practices like no-till farming, cover crops and composting.",
    card2Title: "Smart Water Use", card2Desc: "Drip irrigation, moisture sensors and rainwater harvesting.",
    card3Title: "Agroforestry", card3Desc: "Integrating trees with crops and livestock.",
    card4Title: "Renewable Energy", card4Desc: "Solar pumps, biodigesters and wind turbines.",
    cardHint: "Click to expand",
    contactTitle: "Get in Touch", sendBtn: "Send Message",
    footerText: "© 2026 AgriStrong – Strong Agro, Sustainable Future.",
    loginTitle: "Welcome Back", loginSubmit: "Login", loginFooter: "Forgot password?",
    namePlaceholder: "Your name", emailPlaceholder: "Your email", msgPlaceholder: "Your message",
    emailLogin: "Email", passLogin: "Password"
  },
  pt: {
    brand: "AgroForte", navHome: "Início", navAbout: "Sobre", navSustain: "Sustentabilidade",
    navContact: "Contato", loginBtn: "Entrar",
    heroTitle: "Agro Forte e Sustentável",
    heroSub: "Alimentando o mundo enquanto preservamos o planeta.",
    heroCTA: "Saiba Mais",
    aboutTitle: "Nossa Missão",
    aboutText: "Unimos tecnologia, conhecimento de campo e responsabilidade ambiental.",
    cardsTitle: "Práticas Sustentáveis",
    card1Title: "Solo Regenerativo", card1Desc: "Plantio direto, culturas de cobertura e compostagem.",
    card2Title: "Uso Inteligente da Água", card2Desc: "Irrigação por gotejamento e sensores de umidade.",
    card3Title: "Agrofloresta", card3Desc: "Integrar árvores com lavouras e pecuária.",
    card4Title: "Energia Renovável", card4Desc: "Bombas solares, biodigestores e turbinas eólicas.",
    cardHint: "Clique para expandir",
    contactTitle: "Fale Conosco", sendBtn: "Enviar Mensagem",
    footerText: "© 2026 AgroForte – Agro Forte, Futuro Sustentável.",
    loginTitle: "Bem-vindo de volta", loginSubmit: "Entrar", loginFooter: "Esqueceu a senha?",
    namePlaceholder: "Seu nome", emailPlaceholder: "Seu email", msgPlaceholder: "Sua mensagem",
    emailLogin: "Email", passLogin: "Senha"
  },
  es: {
    brand: "AgroFuerte", navHome: "Inicio", navAbout: "Acerca de", navSustain: "Sostenibilidad",
    navContact: "Contacto", loginBtn: "Ingresar",
    heroTitle: "Agricultura Fuerte y Sostenible",
    heroSub: "Alimentando al mundo mientras preservamos el planeta.",
    heroCTA: "Saber más",
    aboutTitle: "Nuestra Misión",
    aboutText: "Conectamos tecnología, conocimiento del campo y responsabilidad ambiental.",
    cardsTitle: "Prácticas Sostenibles",
    card1Title: "Suelo Regenerativo", card1Desc: "Siembra directa, cultivos de cobertura y compostaje.",
    card2Title: "Uso Inteligente del Agua", card2Desc: "Riego por goteo y sensores de humedad.",
    card3Title: "Agroforestería", card3Desc: "Integrar árboles con cultivos y ganadería.",
    card4Title: "Energía Renovable", card4Desc: "Bombas solares, biodigestores y turbinas eólicas.",
    cardHint: "Clic para expandir",
    contactTitle: "Contáctenos", sendBtn: "Enviar Mensaje",
    footerText: "© 2026 AgroFuerte – Agro Fuerte, Futuro Sostenible.",
    loginTitle: "Bienvenido de nuevo", loginSubmit: "Ingresar", loginFooter: "¿Olvidaste tu contraseña?",
    namePlaceholder: "Tu nombre", emailPlaceholder: "Tu correo", msgPlaceholder: "Tu mensaje",
    emailLogin: "Correo", passLogin: "Contraseña"
  }
};

let currentLang = "en";

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang]?.[key]) el.textContent = translations[lang][key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang]?.[key]) el.placeholder = translations[lang][key];
  });
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active-lang", btn.dataset.lang === lang);
  });
}

document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
});

// Menu hamburguer
document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("navMenu").classList.toggle("show");
});

// Modal de login
const loginModal = document.getElementById("loginModal");
document.getElementById("btnLogin").addEventListener("click", () => loginModal.classList.add("active"));
document.getElementById("closeModal").addEventListener("click", () => loginModal.classList.remove("active"));
window.addEventListener("click", (e) => {
  if (e.target === loginModal) loginModal.classList.remove("active");
});

document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert(currentLang === "pt" ? "Login simulado com sucesso!" : "Simulated login successful!");
  loginModal.classList.remove("active");
});

// Cards interativos
document.querySelectorAll(".interactive-card").forEach(card => {
  card.addEventListener("click", () => card.classList.toggle("flipped"));
});

// Formulário de contato
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert(currentLang === "pt" ? "Mensagem enviada (simulação)!" : "Message sent (simulation)!");
  e.target.reset();
});

// ===== ANIMAÇÃO DE CHUVA (canvas) =====
const canvas = document.getElementById("rainCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let drops = [];
const maxDrops = 150;  // quantidade de gotas

// Cria as gotas
for (let i = 0; i < maxDrops; i++) {
  drops.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    length: Math.random() * 20 + 10,   // comprimento do risco
    speed: Math.random() * 15 + 10,    // velocidade de queda
    opacity: Math.random() * 0.4 + 0.1
  });
}

function drawRain() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = `rgba(255, 255, 255, 0.15)`;
  ctx.lineWidth = 1;

  for (let drop of drops) {
    ctx.beginPath();
    ctx.moveTo(drop.x, drop.y);
    ctx.lineTo(drop.x, drop.y + drop.length);
    ctx.strokeStyle = `rgba(255, 255, 255, ${drop.opacity})`;
    ctx.stroke();

    // Atualiza posição
    drop.y += drop.speed;
    if (drop.y > canvas.height) {
      drop.y = -drop.length;
      drop.x = Math.random() * canvas.width;
    }
  }

  requestAnimationFrame(drawRain);
}

// Redimensiona canvas quando a janela muda
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  // Recria gotas para se adaptar ao novo tamanho
  drops = [];
  for (let i = 0; i < maxDrops; i++) {
    drops.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      length: Math.random() * 20 + 10,
      speed: Math.random() * 15 + 10,
      opacity: Math.random() * 0.4 + 0.1
    });
  }
});

drawRain();

// Idioma padrão
applyLanguage("en");