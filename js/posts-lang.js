let langs = document.querySelector(".langs"),
  link = document.querySelectorAll("a"),
homeLang = document.querySelector(".home-lang"),
aboutLang = document.querySelector(".about-lang"),
contactLang = document.querySelector(".contact-lang"),
lastPostsLang = document.querySelector(".lastPosts-lang"),
whatIThinkLang = document.querySelector(".whatIThink-lang"),
mlsaLang = document.querySelector(".mlsa-lang"),
viewMoreLang = document.querySelector(".viewMore-lang"),
viewMoreLang2 = document.querySelector(".viewMore-lang2"),
viewMoreLang3 = document.querySelector(".viewMore-lang3"),
viewMoreLang4 = document.querySelector(".viewMore-lang4"),
viewMoreLang5 = document.querySelector(".viewMore-lang5"),
viewMoreLang6 = document.querySelector(".viewMore-lang6"),
viewMoreLang7 = document.querySelector(".viewMore-lang7"),
ribbonLang = document.querySelector(".ribbon"),
secondRibbonLang = document.querySelector(".second-ribbon"),
webstaticappsLang = document.querySelector(".webstaticapps-lang"),
frameworksLang = document.querySelector(".frameworks-lang"),
IAChallangesLang = document.querySelector(".IAChallanges-lang"),
aboutMeLang = document.querySelector(".aboutMe-lang"),
aboutContentLang = document.querySelector(".aboutContent-lang"),
myPostsLang = document.querySelector(".myPosts-lang"),
postsResumeLang = document.querySelector(".postsResume-lang"),
rightReservedLang = document.querySelector(".rightReserved-lang");

link.forEach((el) => {
  el.addEventListener("click", () => {
    langs.querySelector(".active").classList.remove("active");
    el.classList.add("active");

    let attr = el.getAttribute("language");

    homeLang.textContent = data[attr].homeLang;
    aboutLang.textContent = data[attr].aboutLang;
    contactLang.textContent = data[attr].contactLang;
    lastPostsLang.textContent = data[attr].lastPostsLang;
    whatIThinkLang.textContent = data[attr].whatIThinkLang;
    mlsaLang.textContent = data[attr].mlsaLang;
    frameworksLang.textContent = data[attr].frameworksLang;
    ribbonLang.textContent = data[attr].ribbonLang;
    secondRibbonLang.textContent = data[attr].ribbonLang;
    viewMoreLang.textContent = data[attr].viewMoreLang;
    viewMoreLang2.textContent = data[attr].viewMoreLang2;
    viewMoreLang3.textContent = data[attr].viewMoreLang3;
    viewMoreLang4.textContent = data[attr].viewMoreLang4;
    viewMoreLang5.textContent = data[attr].viewMoreLang5;
    viewMoreLang6.textContent = data[attr].viewMoreLang6;
    viewMoreLang7.textContent = data[attr].viewMoreLang7;
    webstaticappsLang.textContent = data[attr].webstaticappsLang;
    IAChallangesLang.textContent = data[attr].IAChallangesLang;
    aboutMeLang.textContent = data[attr].aboutMeLang;
    aboutContentLang.textContent = data[attr].aboutContentLang;
    myPostsLang.textContent = data[attr].myPostsLang;
    postsResumeLang.textContent = data[attr].postsResumeLang;
    rightReservedLang.textContent = data[attr].rightReservedLang;
  });
});

let data = {
    portuguese: {
      homeLang: "INÍCIO",
      aboutLang: "SOBRE",
      contactLang: "CONTATO",
      lastPostsLang: "Últimos Posts",
      whatIThinkLang: "Minhas Opiniões",
      mlsaLang: "Como se tornar um Microsoft Ambassor Student",
      frameworksLang: "Angular vs React vs Vue.js: qual Framework é melhor?",
      ribbonLang: "Em breve",
      secondRibbonLang: "Em breve",
      viewMoreLang: "Ver Mais",
      viewMoreLang2: "Ver Mais",
      viewMoreLang3: "Ver Mais",
      viewMoreLang4: "Ver Mais",
      viewMoreLang5: "Ver Mais",
      viewMoreLang6: "Ver Mais",
      viewMoreLang7: "Ver Mais",
      webstaticappsLang: "O que é Static Web App da Azure?",
      IAChallangesLang: "Desafios de IA",
      aboutMeLang: "Sobre Mim",
      aboutContentLang: "Conteúdo Sobre",
      myPostsLang: "Meus Posts",
      postsResumeLang: "Explore todas minhas postagens e venha conhecer todos meus conteúdos.",
      rightReservedLang: "Todos os direitos reservados."
    },
  english: {
        "homeLang": "HOME",
        "aboutLang": "ABOUT",
        "contactLang": "CONTACT",
        "lastPostsLang": "Last Posts",
        "whatIThinkLang": "What i think",
        "mlsaLang": "How to Become a Microsoft Student Ambassador",
        "frameworksLang": "Angular vs React vs Vue.js: Which Framework is Better?",
        "ribbonLang": "Coming Soon",
        "secondRibbonLang": "Coming Soon",
        "viewMoreLang": "View More",
        "viewMoreLang2": "View More",
        "viewMoreLang3": "View More",
        "viewMoreLang4": "View More",
        "viewMoreLang5": "View More",
        "viewMoreLang6": "View More",
        "viewMoreLang7": "View More",
        "webstaticappsLang": "What is Azure Static Web App?",
        "IAChallangesLang": "AI Challenges",
        "aboutMeLang": "About Me",
        "aboutContentLang": "About Content",
        "myPostsLang": "My Posts",
        "postsResumeLang": "Explore all my posts and get to know all my content.",
        "rightReservedLang": "All rights reserved."  
 },
  spanish: {
        "homeLang": "INICIO",
        "aboutLang": "SOBRE",
        "contactLang": "CONTACTO",
        "lastPostsLang": "Últimos Posts",
        "whatIThinkLang": "Mis Opiniones",
        "mlsaLang": "Cómo Convertirse en un Embajador Estudiantil de Microsoft",
        "frameworksLang": "Angular vs React vs Vue.js: ¿Qué Framework es Mejor?",
        "ribbonLang": "Próximamente",
        "secondRibbonLang": "Próximamente",
        "viewMoreLang": "Ver Más",
        "viewMoreLang2": "Ver Más",
        "viewMoreLang3": "Ver Más",
        "viewMoreLang4": "Ver Más",
        "viewMoreLang5": "Ver Más",
        "viewMoreLang6": "Ver Más",
        "viewMoreLang7": "Ver Más",
        "webstaticappsLang": "¿Qué es Azure Static Web App?",
        "IAChallangesLang": "Desafíos de IA",
        "aboutMeLang": "Sobre Mí",
        "aboutContentLang": "Acerca de Contenido",
        "myPostsLang": "Mis Posts",
        "postsResumeLang": "Explora todos mis posts y conoce todo mi contenido.",
        "rightReservedLang": "Todos los derechos reservados."    
 },
};

function applyLanguage(language) {
    homeLang.textContent = data[language].homeLang;
    aboutLang.textContent = data[language].aboutLang;
    contactLang.textContent = data[language].contactLang;
    lastPostsLang.textContent = data[language].lastPostsLang;
    whatIThinkLang.textContent = data[language].whatIThinkLang;
    mlsaLang.textContent = data[language].mlsaLang;
    viewMoreLang.textContent = data[language].viewMoreLang;
    viewMoreLang2.textContent = data[language].viewMoreLang2;
    viewMoreLang3.textContent = data[language].viewMoreLang3;
    viewMoreLang4.textContent = data[language].viewMoreLang4;
    viewMoreLang5.textContent = data[language].viewMoreLang5;
    viewMoreLang6.textContent = data[language].viewMoreLang6;
    viewMoreLang7.textContent = data[language].viewMoreLang7;
    ribbonLang.textContent = data[language].ribbonLang;
    secondRibbonLang.textContent = data[language].ribbonLang;
    webstaticappsLang.textContent = data[language].webstaticappsLang;
    IAChallangesLang.textContent = data[language].IAChallangesLang;
    aboutMeLang.textContent = data[language].aboutMeLang;
    aboutContentLang.textContent = data[language].aboutContentLang;
    myPostsLang.textContent = data[language].myPostsLang;
    postsResumeLang.textContent = data[language].postsResumeLang;
    rightReservedLang.textContent = data[language].rightReservedLang;
}


document.addEventListener("DOMContentLoaded", function () {
  const langMenu = document.querySelector(".lang-menu");
  const langSubMenu = langMenu.querySelector("ul");
  const links = langSubMenu.querySelectorAll("a");
  const selectedFlag = document.querySelector(".selected-lang");
  const title = document.querySelector(".title"); // Assuming you have an element with class "title"
  const descr = document.querySelector(".description"); // Assuming you have an element with class "description"

  // Get the selected language from Local Storage (or default to 'english')
  let selectedLanguage = localStorage.getItem("selectedLanguage") || "english";

  applyLanguage(selectedLanguage);

  // Set the initial language


  // Set the selected language flag
  if (selectedLanguage === "english") {
      selectedFlag.style.backgroundImage = 'url("./src/img/english.webp")';
  } else if (selectedLanguage === "portuguese") {
      selectedFlag.style.backgroundImage = 'url("./src/img/portuguese.webp")';
  } else if (selectedLanguage === "spanish") {
      selectedFlag.style.backgroundImage = 'url("./src/img/spanish.webp")';
  }

  langMenu.addEventListener("click", function () {
      langSubMenu.classList.toggle("show");
  });

  document.addEventListener("click", function (event) {
      if (!langMenu.contains(event.target)) {
          langSubMenu.classList.remove("show");
      }
  });

  links.forEach(link => {
      link.addEventListener("click", function (event) {
          event.preventDefault();

          links.forEach(link => {
              link.classList.remove("active");
          });

          link.classList.add("active");

          let attr = link.getAttribute("language");

          // Update the selected flag image based on language
          if (attr === "english") {
              selectedFlag.style.backgroundImage = 'url("./src/img/english.webp")';
          } else if (attr === "portuguese") {
              selectedFlag.style.backgroundImage = 'url("./src/img/portuguese.webp")';
          } else if (attr === "spanish") {
              selectedFlag.style.backgroundImage = 'url("./src/img/spanish.webp")';
          }

          // Store the selected language in Local Storage
          localStorage.setItem("selectedLanguage", attr);
      });
  });
});