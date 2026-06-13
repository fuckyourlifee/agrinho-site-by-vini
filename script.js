// Language data
const translations = {
  en: {
    brand: "AgriStrong",
    navHome: "Home",
    navAbout: "About",
    navSustain: "Sustainability",
    navContact: "Contact",
    loginBtn: "Login",
    heroTitle: "Strong & Sustainable Agriculture",
    heroSub: "Feeding the world while preserving the planet. Innovation, respect and productivity hand in hand.",
    heroCTA: "Learn More",
    aboutTitle: "Our Mission",
    aboutText: "We connect technology, field knowledge and environmental responsibility to build a food system that is productive, fair and regenerative. From soil health to smart irrigation, we believe in an agro that is economically viable and ecologically sound.",
    cardsTitle: "Sustainable Practices",
    card1Title: "Regenerative Soil",
    card1Desc: "Practices like no-till farming, cover crops and composting that restore organic matter, sequester carbon and increase biodiversity.",
    card2Title: "Smart Water Use",
    card2Desc: "Drip irrigation, moisture sensors and rainwater harvesting systems that reduce consumption and protect water sources.",
    card3Title: "Agroforestry",
    card3Desc: "Integrating trees with crops and livestock creates resilient ecosystems, improves soil and diversifies production.",
    card4Title: "Renewable Energy",
    card4Desc: "Solar pumps, biodigesters and wind turbines lower carbon footprint and cut energy costs on the farm.",
    cardHint: "Click to expand",
    contactTitle: "Get in Touch",
    sendBtn: "Send Message",
    footerText: "© 2026 AgriStrong – Strong Agro, Sustainable Future.",
    loginTitle: "Welcome Back",
    loginSubmit: "Login",
    loginFooter: "Forgot password?",
    namePlaceholder: "Your name",
    emailPlaceholder: "Your email",
    msgPlaceholder: "Your message",
    emailLogin: "Email",
    passLogin: "Password"
  },
  pt: {
    brand: "AgroForte",
    navHome: "Início",
    navAbout: "Sobre",
    navSustain: "Sustentabilidade",
    navContact: "Contato",
    loginBtn: "Entrar",
    heroTitle: "Agro Forte e Sustentável",
    heroSub: "Alimentando o mundo enquanto preservamos o planeta. Inovação, respeito e produtividade de mãos dadas.",
    heroCTA: "Saiba Mais",
    aboutTitle: "Nossa Missão",
    aboutText: "Unimos tecnologia, conhecimento de campo e responsabilidade ambiental para construir um sistema alimentar produtivo, justo e regenerativo. Da saúde do solo à irrigação inteligente, acreditamos em um agro economicamente viável e ecologicamente correto.",
    cardsTitle: "Práticas Sustentáveis",
    card1Title: "Solo Regenerativo",
    card1Desc: "Plantio direto, culturas de cobertura e compostagem que restauram a matéria orgânica, sequestram carbono e aumentam a biodiversidade.",
    card2Title: "Uso Inteligente da Água",
    card2Desc: "Irrigação por gotejamento, sensores de umidade e captação de água da chuva que reduzem o consumo e protegem os mananciais.",
    card3Title: "Agrofloresta",
    card3Desc: "Integrar árvores com lavouras e pecuária cria ecossistemas resilientes, melhora o solo e diversifica a produção.",
    card4Title: "Energia Renovável",
    card4Desc: "Bombas solares, biodigestores e turbinas eólicas reduzem a pegada de carbono e os custos de energia na fazenda.",
    cardHint: "Clique para expandir",
    contactTitle: "Fale Conosco",
    sendBtn: "Enviar Mensagem",
    footerText: "© 2026 AgroForte – Agro Forte, Futuro Sustentável.",
    loginTitle: "Bem-vindo de volta",
    loginSubmit: "Entrar",
    loginFooter: "Esqueceu a senha?",
    namePlaceholder: "Seu nome",
    emailPlaceholder: "Seu email",
    msgPlaceholder: "Sua mensagem",
    emailLogin: "Email",
    passLogin: "Senha"
  },
  es: {
    brand: "AgroFuerte",
    navHome: "Inicio",
    navAbout: "Acerca de",
    navSustain: "Sostenibilidad",
    navContact: "Contacto",
    loginBtn: "Ingresar",
    heroTitle: "Agricultura Fuerte y Sostenible",
    heroSub: "Alimentando al mundo mientras preservamos el planeta. Innovación, respeto y productividad de la mano.",
    heroCTA: "Saber más",
    aboutTitle: "Nuestra Misión",
    aboutText: "Conectamos tecnología, conocimiento del campo y responsabilidad ambiental para construir un sistema alimentario productivo, justo y regenerativo. Desde la salud del suelo hasta el riego inteligente, creemos en un agro económicamente viable y ecológicamente sólido.",
    cardsTitle: "Prácticas Sostenibles",
    card1Title: "Suelo Regenerativo",
    card1Desc: "Prácticas como siembra directa, cultivos de cobertura y compostaje que restauran la materia orgánica, secuestran carbono y aumentan la biodiversidad.",
    card2Title: "Uso Inteligente del Agua",
    card2Desc: "Riego por goteo, sensores de humedad y cosecha de agua de lluvia que reducen el consumo y protegen las fuentes hídricas.",
    card3Title: "Agroforestería",
    card3Desc: "Integrar árboles con cultivos y ganadería crea ecosistemas resilientes, mejora el suelo y diversifica la producción.",
    card4Title: "Energía Renovable",
    card4Desc: "Bombas solares, biodigestores y turbinas eólicas reducen la huella de carbono y los costos energéticos en la finca.",
    cardHint: "Clic para expandir",
    contactTitle: "Contáctenos",
    sendBtn: "Enviar Mensaje",
    footerText: "© 2026 AgroFuerte – Agro Fuerte, Futuro Sostenible.",
    loginTitle: "Bienvenido de nuevo",
    loginSubmit: "Ingresar",
    loginFooter: "¿Olvidaste tu contraseña?",
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

  // Update text elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang]?.[key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang]?.[key]) {
      el.placeholder = translations[lang][key];
    }
  });

  // Update active lang button
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active-lang", btn.dataset.lang === lang);
  });
}

// Language switch buttons
document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const lang = btn.dataset.lang;
    applyLanguage(lang);
  });
});

// Hamburger menu
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Login Modal
const btnLogin = document.getElementById("btnLogin");
const loginModal = document.getElementById("loginModal");
const closeModal = document.getElementById("closeModal");

btnLogin.addEventListener("click", () => {
  loginModal.classList.add("active");
});

closeModal.addEventListener("click", () => {
  loginModal.classList.remove("active");
});

window.addEventListener("click", (e) => {
  if (e.target === loginModal) {
    loginModal.classList.remove("active");
  }
});

// Login form submission (demo)
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert(currentLang === "pt" ? "Login simulado com sucesso!" : "Simulated login successful!");
  loginModal.classList.remove("active");
});

// Interactive Cards flip
document.querySelectorAll(".interactive-card").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
});

// Contact form
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert(currentLang === "pt" ? "Mensagem enviada (simulação)!" : "Message sent (simulation)!");
  e.target.reset();
});

// Set default language
applyLanguage("en");