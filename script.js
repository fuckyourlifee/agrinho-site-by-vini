// ===== TRADUÇÕES =====
const translations = {
  en: {
    brand: "AgriStrong",
    navHome: "Home",
    navExplain: "Explanation",
    navGame: "Game",
    navLogin: "Login",
    heroTitle: "Strong & Sustainable Agriculture",
    heroSub: "Feeding the world while preserving the planet.",
    aboutTitle: "Our Mission",
    aboutText: "We connect technology, field knowledge and environmental responsibility.",
    cardsTitle: "Sustainable Practices",
    card1Title: "Regenerative Soil", card1Desc: "No-till farming, cover crops and composting.",
    card2Title: "Smart Water Use", card2Desc: "Drip irrigation and moisture sensors.",
    card3Title: "Agroforestry", card3Desc: "Integrating trees with crops and livestock.",
    card4Title: "Renewable Energy", card4Desc: "Solar pumps, biodigesters and wind turbines.",
    cardHint: "Click to expand",
    explainTitle: "What is Sustainable Agriculture?",
    explainText1: "Sustainable agriculture is farming that protects environment, health and animal welfare. It integrates environmental health, profitability, and social equity.",
    explainText2: "Techniques like crop rotation, organic fertilizers, agroforestry and precision irrigation produce food without depleting resources or harming ecosystems.",
    gameTitle: "Catch the Rain!",
    gameDesc: "Move the bucket with ← → arrow keys (or touch/drag) and collect raindrops.",
    scoreLabel: "Score:",
    restartGame: "Restart",
    loginTitle: "Welcome Back",
    loginSubmit: "Login",
    loginFooter: "Forgot password?",
    footerText: "© 2026 AgriStrong – Strong Agro, Sustainable Future.",
    namePlaceholder: "Your name",
    emailPlaceholder: "Your email",
    msgPlaceholder: "Your message",
    emailLogin: "Email",
    passLogin: "Password"
  },
  pt: {
    brand: "AgroForte",
    navHome: "Início",
    navExplain: "Explicação",
    navGame: "Jogo",
    navLogin: "Entrar",
    heroTitle: "Agro Forte e Sustentável",
    heroSub: "Alimentando o mundo enquanto preservamos o planeta.",
    aboutTitle: "Nossa Missão",
    aboutText: "Unimos tecnologia, conhecimento de campo e responsabilidade ambiental.",
    cardsTitle: "Práticas Sustentáveis",
    card1Title: "Solo Regenerativo", card1Desc: "Plantio direto, culturas de cobertura e compostagem.",
    card2Title: "Uso Inteligente da Água", card2Desc: "Irrigação por gotejamento e sensores de umidade.",
    card3Title: "Agrofloresta", card3Desc: "Integrar árvores com lavouras e pecuária.",
    card4Title: "Energia Renovável", card4Desc: "Bombas solares, biodigestores e turbinas eólicas.",
    cardHint: "Clique para expandir",
    explainTitle: "O que é Agricultura Sustentável?",
    explainText1: "Agricultura sustentável protege o meio ambiente, saúde e bem-estar animal. Integra saúde ambiental, lucratividade e equidade social.",
    explainText2: "Técnicas como rotação de culturas, adubos orgânicos, agrofloresta e irrigação de precisão produzem alimentos sem esgotar recursos.",
    gameTitle: "Pegue a Chuva!",
    gameDesc: "Mova o balde com as setas ← → (ou toque/arraste no celular) e colete gotas.",
    scoreLabel: "Pontos:",
    restartGame: "Reiniciar",
    loginTitle: "Bem-vindo de volta",
    loginSubmit: "Entrar",
    loginFooter: "Esqueceu a senha?",
    footerText: "© 2026 AgroForte – Agro Forte, Futuro Sustentável.",
    namePlaceholder: "Seu nome",
    emailPlaceholder: "Seu email",
    msgPlaceholder: "Sua mensagem",
    emailLogin: "Email",
    passLogin: "Senha"
  },
  es: {
    brand: "AgroFuerte",
    navHome: "Inicio",
    navExplain: "Explicación",
    navGame: "Juego",
    navLogin: "Ingresar",
    heroTitle: "Agricultura Fuerte y Sostenible",
    heroSub: "Alimentando al mundo mientras preservamos el planeta.",
    aboutTitle: "Nuestra Misión",
    aboutText: "Conectamos tecnología, conocimiento del campo y responsabilidad ambiental.",
    cardsTitle: "Prácticas Sostenibles",
    card1Title: "Suelo Regenerativo", card1Desc: "Siembra directa, cultivos de cobertura y compostaje.",
    card2Title: "Uso Inteligente del Agua", card2Desc: "Riego por goteo y sensores de humedad.",
    card3Title: "Agroforestería", card3Desc: "Integrar árboles con cultivos y ganadería.",
    card4Title: "Energía Renovable", card4Desc: "Bombas solares, biodigestores y turbinas eólicas.",
    cardHint: "Clic para expandir",
    explainTitle: "¿Qué es la Agricultura Sostenible?",
    explainText1: "Protege el medio ambiente, la salud y el bienestar animal, integrando salud ambiental, rentabilidad y equidad social.",
    explainText2: "Técnicas como rotación de cultivos, abonos orgánicos, agroforestería y riego de precisión producen alimentos sin agotar recursos.",
    gameTitle: "¡Atrapa la Lluvia!",
    gameDesc: "Mueve el balde con ← → (o toca/arrastra en móvil) y recoge gotas.",
    scoreLabel: "Puntuación:",
    restartGame: "Reiniciar",
    loginTitle: "Bienvenido de nuevo",
    loginSubmit: "Ingresar",
    loginFooter: "¿Olvidaste tu contraseña?",
    footerText: "© 2026 AgroFuerte – Agro Fuerte, Futuro Sostenible.",
    namePlaceholder: "Tu nombre",
    emailPlaceholder: "Tu correo",
    msgPlaceholder: "Tu mensaje",
    emailLogin: "Correo",
    passLogin: "Contraseña"
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

// ===== NAVEGAÇÃO ENTRE PÁGINAS =====
const navLinks = document.querySelectorAll(".nav-link");
const pages = document.querySelectorAll(".page");

function navigateTo(pageId) {
  pages.forEach(p => p.classList.remove("active"));
  document.getElementById(`page-${pageId}`).classList.add("active");
  navLinks.forEach(link => {
    link.classList.toggle("active", link.dataset.page === pageId);
  });
  // Fecha menu mobile
  document.getElementById("navMenu").classList.remove("show");
}

navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    navigateTo(link.dataset.page);
  });
});

// ===== HAMBURGER MENU =====
document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("navMenu").classList.toggle("show");
});

// ===== IDIOMAS =====
document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
});

// ===== TOGGLE MOBILE PREVIEW =====
const deviceToggle = document.getElementById("deviceToggle");
deviceToggle.addEventListener("click", () => {
  document.body.classList.toggle("mobile-preview");
  deviceToggle.textContent = document.body.classList.contains("mobile-preview") ? "💻" : "📱";
});

// ===== LOGIN FORM (página) =====
document.getElementById("loginFormPage").addEventListener("submit", (e) => {
  e.preventDefault();
  alert(currentLang === "pt" ? "Login simulado!" : "Simulated login!");
});

// ===== CARDS INTERATIVOS =====
document.querySelectorAll(".interactive-card").forEach(card => {
  card.addEventListener("click", () => card.classList.toggle("flipped"));
});

// ===== GAME =====
const gameCanvas = document.getElementById("gameCanvas");
const gameCtx = gameCanvas.getContext("2d");
const scoreSpan = document.getElementById("scoreDisplay");

let bucket = { x: gameCanvas.width / 2 - 40, y: gameCanvas.height - 50, width: 80, height: 20 };
let raindrops = [];
let gameScore = 0;
let gameRunning = false;
let gameInterval;
let touchX = null;

function spawnRaindrop() {
  return {
    x: Math.random() * (gameCanvas.width - 10) + 5,
    y: -10,
    radius: Math.random() * 4 + 2,
    speed: Math.random() * 3 + 2
  };
}

function drawGame() {
  gameCtx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
  // Desenha balde
  gameCtx.fillStyle = "#8B4513";
  gameCtx.fillRect(bucket.x, bucket.y, bucket.width, bucket.height);
  gameCtx.fillStyle = "#A0522D";
  gameCtx.fillRect(bucket.x + 10, bucket.y - 10, bucket.width - 20, 10);

  // Desenha gotas
  gameCtx.fillStyle = "#4fc3f7";
  raindrops.forEach(drop => {
    gameCtx.beginPath();
    gameCtx.arc(drop.x, drop.y, drop.radius, 0, Math.PI * 2);
    gameCtx.fill();
  });

  // Pontuação
  gameCtx.fillStyle = "white";
  gameCtx.font = "16px Inter";
  gameCtx.fillText("Score: " + gameScore, 10, 25);
}

function updateGame() {
  if (!gameRunning) return;
  // Atualiza gotas
  for (let i = raindrops.length - 1; i >= 0; i--) {
    let drop = raindrops[i];
    drop.y += drop.speed;

    // Colisão com balde
    if (
      drop.y + drop.radius >= bucket.y &&
      drop.y - drop.radius <= bucket.y + bucket.height &&
      drop.x >= bucket.x &&
      drop.x <= bucket.x + bucket.width
    ) {
      raindrops.splice(i, 1);
      gameScore++;
      scoreSpan.textContent = gameScore;
      continue;
    }

    // Saiu da tela
    if (drop.y - drop.radius > gameCanvas.height) {
      raindrops.splice(i, 1);
    }
  }
  // Adiciona novas gotas aleatoriamente
  if (Math.random() < 0.03) {
    raindrops.push(spawnRaindrop());
  }

  drawGame();
}

function gameLoop() {
  updateGame();
  requestAnimationFrame(gameLoop);
}

// Controles
document.addEventListener("keydown", (e) => {
  if (!gameRunning) return;
  if (e.key === "ArrowLeft") bucket.x = Math.max(0, bucket.x - 20);
  if (e.key === "ArrowRight") bucket.x = Math.min(gameCanvas.width - bucket.width, bucket.x + 20);
});

// Touch/mobile
gameCanvas.addEventListener("touchmove", (e) => {
  e.preventDefault();
  if (!gameRunning) return;
  let rect = gameCanvas.getBoundingClientRect();
  let touch = e.touches[0];
  let x = touch.clientX - rect.left;
  bucket.x = Math.max(0, Math.min(gameCanvas.width - bucket.width, x - bucket.width / 2));
});

gameCanvas.addEventListener("mousemove", (e) => {
  if (!gameRunning) return;
  let rect = gameCanvas.getBoundingClientRect();
  let x = e.clientX - rect.left;
  bucket.x = Math.max(0, Math.min(gameCanvas.width - bucket.width, x - bucket.width / 2));
});

function startGame() {
  if (gameRunning) return;
  gameRunning = true;
  gameScore = 0;
  scoreSpan.textContent = "0";
  raindrops = [];
  bucket.x = gameCanvas.width / 2 - 40;
  drawGame();
  requestAnimationFrame(gameLoop);
}

function stopGame() {
  gameRunning = false;
  raindrops = [];
}

// Reiniciar
document.getElementById("restartGame").addEventListener("click", () => {
  stopGame();
  startGame();
});

// Inicia o jogo ao entrar na página Game
const observer = new MutationObserver(() => {
  const gamePage = document.getElementById("page-game");
  if (gamePage.classList.contains("active")) {
    startGame();
  } else {
    stopGame();
  }
});
observer.observe(document.getElementById("page-game"), { attributes: true, attributeFilter: ['class'] });

// Se já estiver ativa na carga (caso raro)
if (document.getElementById("page-game").classList.contains("active")) {
  startGame();
}

// ===== SPLASH / INTRO ANIMATION =====
window.addEventListener("load", () => {
  const splash = document.getElementById("splashOverlay");
  setTimeout(() => {
    splash.classList.add("fade-out");
    setTimeout(() => {
      splash.style.display = "none";
    }, 800);
  }, 2000);
});

// ===== CHUVA DE FUNDO (canvas principal) =====
const rainCanvas = document.getElementById("rainCanvas");
const rainCtx = rainCanvas.getContext("2d");
rainCanvas.width = window.innerWidth;
rainCanvas.height = window.innerHeight;

let bgDrops = [];
const bgMaxDrops = 150;
for (let i = 0; i < bgMaxDrops; i++) {
  bgDrops.push({
    x: Math.random() * rainCanvas.width,
    y: Math.random() * rainCanvas.height,
    length: Math.random() * 20 + 10,
    speed: Math.random() * 15 + 10,
    opacity: Math.random() * 0.4 + 0.1
  });
}

function drawBgRain() {
  rainCtx.clearRect(0, 0, rainCanvas.width, rainCanvas.height);
  rainCtx.lineWidth = 1;
  for (let drop of bgDrops) {
    rainCtx.beginPath();
    rainCtx.moveTo(drop.x, drop.y);
    rainCtx.lineTo(drop.x, drop.y + drop.length);
    rainCtx.strokeStyle = `rgba(255, 255, 255, ${drop.opacity})`;
    rainCtx.stroke();
    drop.y += drop.speed;
    if (drop.y > rainCanvas.height) {
      drop.y = -drop.length;
      drop.x = Math.random() * rainCanvas.width;
    }
  }
  requestAnimationFrame(drawBgRain);
}

window.addEventListener("resize", () => {
  rainCanvas.width = window.innerWidth;
  rainCanvas.height = window.innerHeight;
  bgDrops = [];
  for (let i = 0; i < bgMaxDrops; i++) {
    bgDrops.push({
      x: Math.random() * rainCanvas.width,
      y: Math.random() * rainCanvas.height,
      length: Math.random() * 20 + 10,
      speed: Math.random() * 15 + 10,
      opacity: Math.random() * 0.4 + 0.1
    });
  }
});

drawBgRain();
applyLanguage("en");