
  let langs = document.querySelector(".langs"),
  link = document.querySelectorAll("a"),
  homeLang = document.querySelector(".home-lang"),
  aboutLang = document.querySelector(".about-lang"),
  contactLang = document.querySelector(".contact-lang"),
  contactMeLang = document.querySelector(".contactMe-lang"),
  getInTouchLang = document.querySelector(".getInTouch-lang"),
  callMeLang = document.querySelector(".callMe-lang"),
  locationLang = document.querySelector(".location-lang"),
  nameLang = document.querySelector(".name-lang"),
  projectLang = document.querySelector(".project-lang"),
  messageLang = document.querySelector(".message-lang"),
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
      console.log("Selected language:", attr); // Log the selected language

      homeLang.textContent = data[attr].homeLang;
      aboutLang.textContent = data[attr].aboutLang;
      contactLang.textContent = data[attr].contactLang;
      contactMeLang.textContent = data[attr].contactMeLang;
      getInTouchLang.textContent = data[attr].getInTouchLang;
      callMeLang.textContent = data[attr].callMeLang;
      locationLang.textContent = data[attr].locationLang;
      nameLang.textContent = data[attr].nameLang;
      projectLang.textContent = data[attr].projectLang;
      messageLang.textContent = data[attr].messageLang;
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
    contactMeLang: "Contato",
    getInTouchLang: "Entre em contato",
    callMeLang: "Ligue-me",
    locationLang: "Localização",
    nameLang: "Nome",
    projectLang: "Projeto",
    messageLang: "Mensagem",
    aboutMeLang: "Sobre Mim",
    aboutContentLang: "Conteúdo Sobre Mim",
    myPostsLang: "Minhas Publicações",
    postsResumeLang: "Explore todas as minhas publicações e conheça todo o meu conteúdo.",
    rightReservedLang: "Todos os direitos reservados."
},
  english: {
    homeLang: "HOME",
    aboutLang: "ABOUT",
    contactLang: "CONTACT",
    contactMeLang: "Contact Me",
    getInTouchLang: "Get in touch",
    callMeLang: "Call me",
    locationLang: "Location",
    nameLang: "Name",
    projectLang: "Project",
    messageLang: "Message",
    aboutMeLang: "About Me",
    aboutContentLang: "About Content",
    myPostsLang: "My Posts",
    postsResumeLang: "Explore all my posts and get to know all my content.",
    rightReservedLang: "All rights reserved."
  },
  spanish: {
    homeLang: "INICIO",
    aboutLang: "SOBRE",
    contactLang: "CONTACTO",
    contactMeLang: "Contáctame",
    getInTouchLang: "Ponte en contacto",
    callMeLang: "Llámame",
    locationLang: "Ubicación",
    nameLang: "Nombre",
    projectLang: "Proyecto",
    messageLang: "Mensaje",
    aboutMeLang: "Sobre Mí",
    aboutContentLang: "Contenido Sobre Mí",
    myPostsLang: "Mis Publicaciones",
    postsResumeLang: "Explora todas mis publicaciones y conoce todo mi contenido.",
    rightReservedLang: "Todos los derechos reservados."
},
  // Add more languages as needed
};


function applyLanguage(language) {
  homeLang.textContent = data[language].homeLang;
  aboutLang.textContent = data[language].aboutLang;
  contactLang.textContent = data[language].contactLang;
  contactMeLang.textContent = data[language].contactMeLang;
  getInTouchLang.textContent = data[language].getInTouchLang;
  callMeLang.textContent = data[language].callMeLang;
  locationLang.textContent = data[language].locationLang;
  nameLang.textContent = data[language].nameLang;
  projectLang.textContent = data[language].projectLang;
  messageLang.textContent = data[language].messageLang;
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

  // Set the selected language flag
  if (selectedLanguage === "english") {
      selectedFlag.style.backgroundImage = 'url("../src/img/english.webp")';
  } else if (selectedLanguage === "portuguese") {
      selectedFlag.style.backgroundImage = 'url("../src/img/portuguese.webp")';
  } else if (selectedLanguage === "spanish") {
      selectedFlag.style.backgroundImage = 'url("../src/img/spanish.webp")';
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
              selectedFlag.style.backgroundImage = 'url("../src/img/english.webp")';
          } else if (attr === "portuguese") {
              selectedFlag.style.backgroundImage = 'url("../src/img/portuguese.webp")';
          } else if (attr === "spanish") {
              selectedFlag.style.backgroundImage = 'url("../src/img/spanish.webp")';
          }

          // Store the selected language in Local Storage
          localStorage.setItem("selectedLanguage", attr);
      });
  });
});