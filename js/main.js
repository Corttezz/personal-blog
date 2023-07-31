/* =============== show and hidde menu =============== */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/* =============== show menu =============== */

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
/* =============== hidde menu =============== */

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/* =============== remove menu mobile =============== */

const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 260) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Selecionamos o elemento da imagem do logo
const logoElement = document.querySelector('.logo');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// Função para definir o background do main de acordo com o tema selecionado
const setMainBackground = () => {
  const mainElement = document.getElementById('main');
  if (getCurrentTheme() === 'dark') {
    mainElement.style.backgroundImage = "url('./src/img/dark-theme-background.webp')";
    logoElement.src = "./src/img/logo-dark.webp"; // Troca a imagem para o logo escuro
  } else {
    mainElement.style.backgroundImage = "url('./src/img/light-theme-background.webp')";
    logoElement.src = "./src/img/logo.webp"; // Troca a imagem para o logo claro
  }
};

// We validate if the user previously chose a topic
if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);

  // Chamando a função para definir o background do main e o logo quando a página é carregada
  setMainBackground();
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())

  // Define o background do main e o logo de acordo com o tema selecionado após a alteração
  setMainBackground();
})


let isHovered = false;

// Função para adicionar a classe com a animação pulse
function applyPulseAnimation() {
  const animatedDiv = document.getElementById('animatedDiv');
  animatedDiv.classList.add('animate__pulse');
}

// Função para remover a classe com a animação pulse após 2 segundos (2000 milissegundos)
function removePulseAnimation() {
  const animatedDiv = document.getElementById('animatedDiv');
  animatedDiv.classList.remove('animate__pulse');
}

// Repete a animação a cada 10 segundos (10000 milissegundos)
setInterval(function() {
  if (!isHovered) {
    applyPulseAnimation();
    setTimeout(removePulseAnimation, 4000);
  }
}, 10000);

// Evento para definir a variável 'isHovered' quando o mouse estiver sobre o elemento
const animatedDiv = document.getElementById('animatedDiv');
animatedDiv.addEventListener('mouseenter', function() {
  isHovered = true;
});

// Evento para redefinir a variável 'isHovered' quando o mouse sair do elemento
animatedDiv.addEventListener('mouseleave', function() {
  isHovered = false;
});


/* =============== SERVICES MODAL =============== */
const modalViews = document.querySelectorAll('.picrew__modal'),
    modalBtns = document.querySelectorAll('.picrew__button'),
    modalCloses = document.querySelectorAll('.picrew__modal-close')

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})
