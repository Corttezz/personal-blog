
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
    contactMeLang: "ENTRE EM CONTATO",
    getInTouchLang: "ENTRE EM CONTATO",
    callMeLang: "LIGUE PARA MIM",
    locationLang: "LOCALIZAÇÃO",
    nameLang: "NOME",
    projectLang: "PROJETO",
    messageLang: "MENSAGEM",
    aboutMeLang: "SOBRE MIM",
    aboutContentLang: "CONTEÚDO SOBRE",
    myPostsLang: "MEUS POSTS",
    postsResumeLang: "Explore todas as minhas postagens e venha conhecer todo o meu conteúdo.",
    rightReservedLang: "Todos os direitos reservados."
  },
  english: {
    homeLang: "INÍCIO",
    aboutLang: "SOBRE",
    contactLang: "CONTATO",
    contactMeLang: "ENTRE EM CONTATO",
    getInTouchLang: "ENTRE EM CONTATO",
    callMeLang: "LIGUE PARA MIM",
    locationLang: "LOCALIZAÇÃO",
    nameLang: "NOME",
    projectLang: "PROJETO",
    messageLang: "MENSAGEM",
    aboutMeLang: "SOBRE MIM",
    aboutContentLang: "CONTEÚDO SOBRE",
    myPostsLang: "MEUS POSTS",
    postsResumeLang: "Explore todas as minhas postagens e venha conhecer todo o meu conteúdo.",
    rightReservedLang: "Todos os direitos reservados."
  },
  spanish: {
    homeLang: "INÍCIO",
    aboutLang: "SOBRE",
    contactLang: "CONTATO",
    contactMeLang: "ENTRE EM CONTATO",
    getInTouchLang: "ENTRE EM CONTATO",
    callMeLang: "LIGUE PARA MIM",
    locationLang: "LOCALIZAÇÃO",
    nameLang: "NOME",
    projectLang: "PROJETO",
    messageLang: "MENSAGEM",
    aboutMeLang: "SOBRE MIM",
    aboutContentLang: "CONTEÚDO SOBRE",
    myPostsLang: "MEUS POSTS",
    postsResumeLang: "Explore todas as minhas postagens e venha conhecer todo o meu conteúdo.",
    rightReservedLang: "Todos os direitos reservados."
  },
  // Add more languages as needed
};

document.addEventListener("DOMContentLoaded", function () {
  const langMenu = document.querySelector(".lang-menu");
  const langSubMenu = langMenu.querySelector("ul");
  const links = langSubMenu.querySelectorAll("a");
  const selectedFlag = document.querySelector(".selected-lang");
  const title = document.querySelector(".title"); // Assuming you have an element with class "title"
  const descr = document.querySelector(".description"); // Assuming you have an element with class "description"

  // Get the selected language from Local Storage (or default to 'english')
  let selectedLanguage = localStorage.getItem("selectedLanguage") || "english";


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