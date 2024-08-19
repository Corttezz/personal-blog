let langs = document.querySelector(".langs"),
  link = document.querySelectorAll("a"),
  homeLang = document.querySelector(".home-lang"),
  aboutLang = document.querySelector(".about-lang"),
  contactLang = document.querySelector(".contact-lang"),
  
  viewMoreLang6 = document.querySelector(".viewMore-lang6"),
  viewMoreLang7 = document.querySelector(".viewMore-lang7"),
  aboutMeLang = document.querySelector(".aboutMe-lang"),
  aboutContentLang = document.querySelector(".aboutContent-lang"),
  myPostsLang = document.querySelector(".myPosts-lang"),
  postsResumeLang = document.querySelector(".postsResume-lang"),
  rightReservedLang = document.querySelector(".rightReserved-lang"),

  titleLang = document.querySelector(".title-lang"),
  title1Lang = document.querySelector(".title1-lang"),
  title2Lang = document.querySelector(".title2-lang"),
  title3Lang = document.querySelector(".title3-lang"),
  title4Lang = document.querySelector(".title4-lang"),
  title5Lang = document.querySelector(".title5-lang"),
  title6Lang = document.querySelector(".title6-lang"),
  title7Lang = document.querySelector(".title7-lang"),
  title8Lang = document.querySelector(".title8-lang"),
  paragraphLang = document.querySelectorAll(".paragraph-lang"),
  authorLang = document.querySelector(".author-lang"),
  shareLang = document.querySelector(".share-lang"),
  ulLang = document.querySelectorAll(".ul-lang");

link.forEach((el) => {
  el.addEventListener("click", () => {
      langs.querySelector(".active").classList.remove("active");
      el.classList.add("active");

      let attr = el.getAttribute("language");

      homeLang.innerHTML = data[attr].homeLang;
      aboutLang.innerHTML = data[attr].aboutLang;
      contactLang.innerHTML = data[attr].contactLang;
      
      viewMoreLang6.innerHTML = data[attr].viewMoreLang6;
      viewMoreLang7.innerHTML = data[attr].viewMoreLang7;
      aboutMeLang.innerHTML = data[attr].aboutMeLang;
      aboutContentLang.innerHTML = data[attr].aboutContentLang;
      myPostsLang.innerHTML = data[attr].myPostsLang;
      postsResumeLang.innerHTML = data[attr].postsResumeLang;
      rightReservedLang.innerHTML = data[attr].rightReservedLang;
      titleLang.innerHTML = data[attr].titleLang;
      title1Lang.innerHTML = data[attr].title1Lang;
      title2Lang.innerHTML = data[attr].title2Lang;
      title3Lang.innerHTML = data[attr].title3Lang;
      title4Lang.innerHTML = data[attr].title4Lang;
      title5Lang.innerHTML = data[attr].title5Lang;
      title6Lang.innerHTML = data[attr].title6Lang;
      title7Lang.innerHTML = data[attr].title7Lang;
      title8Lang.innerHTML = data[attr].title8Lang;
      shareLang.innerHTML = data[attr].shareLang;

      paragraphLang.forEach((p, index) => {
          p.innerHTML = data[attr].paragraphLang[index];
      });

      ulLang.forEach((ul, index) => {
          let listItems = ul.querySelectorAll("li");
          listItems.forEach((li, liIndex) => {
              li.innerHTML = data[attr].ulLang[index][liIndex];
          });
      });
  });
});

let data = {
  portuguese: {
    homeLang: "INÍCIO",
    aboutLang: "SOBRE",
    contactLang: "CONTATO",
    
    viewMoreLang6: "Ver Mais",
    viewMoreLang7: "Ver Mais",
    aboutMeLang: "Sobre Mim",
    aboutContentLang: "Conteúdo Sobre Mim",
    myPostsLang: "Minhas Publicações",
    postsResumeLang: "Explore todas as minhas publicações e conheça todo o meu conteúdo.",
    rightReservedLang: "Todos os direitos reservados.",
    titleLang: "Meu Blog Pessoal",
    title1Lang: "Desvendando o Código Secreto: Torne-se um Microsoft Learn Student Ambassador e Domine o Mundo Tecnológico!",
    title2Lang: "Decifrando o Enigma dos Microsoft Learn Student Ambassadors",
    title3Lang: "O Caminho para a Grandeza Tecnológica",
    title4Lang: "Recompensas Épicas Esperam por Você",
    title5Lang: "Desbloqueando Seu Caminho para a Glória",
    title6Lang: "Construa o Futuro Tecnológico Enquanto Faz Amigos Incríveis",
    title7Lang: "Perguntas Frequentes: Porque Sabemos que Você Tem Muitas",
    title8Lang: "O Próximo Passo Rumo à Sua Jornada Épica",
    paragraphLang: [
        "Você já sonhou em ser o pioneiro da inovação tecnológica, empunhando o teclado como uma espada mágica e liderando uma revolução digital? Bem-vindo ao universo fascinante dos Microsoft Learn Student Ambassadors! Se você tem paixão pela tecnologia e deseja fazer a diferença, coloque seus óculos de realidade virtual e embarque nesta jornada conosco!",
        "Ser um Microsoft Learn Student Ambassador é mais do que apenas um título; é uma missão. Imagine estar ao lado de jovens de todo o mundo, todos com o mesmo objetivo: revolucionar o mundo da tecnologia. Como embaixadores, vocês são os campeões da Microsoft, armados com conhecimento e determinação para inspirar e guiar a próxima onda de inovadores tecnológicos.",
        "Ser um Microsoft Learn Student Ambassador é uma oportunidade única de moldar o futuro da tecnologia, colaborar com mentes semelhantes e criar amizades duradouras. Está pronto para fazer a diferença? Junte-se a nós nesta missão!",
        "Está pronto para deixar sua marca no mundo tecnológico? <a href='url_do_site'>Visite nosso site</a> para saber mais e comece sua aventura como Microsoft Learn Student Ambassador. O futuro espera por você!"
    ],
    authorLang: "Daniel Cortez - 06 de ago. de 2023",
    shareLang: "Compartilhar",
    ulLang: [
      [
        "<strong>Idade é Apenas um Número</strong>: A idade mínima é 16 anos, mas a paixão e o entusiasmo são o que realmente contam.",
        "<strong>Conhecimento em Tempo Integral</strong>: Estar matriculado em uma instituição acadêmica credenciada é essencial para fazer parte deste programa.",
        "<strong>Humanos, Sim; Robôs, Não</strong>: Por mais avançados que sejam, os robôs ainda não podem se tornar embaixadores. Talvez no futuro, R2-D2!",
        "<strong>Exclusividade para Estudantes</strong>: Se você já faz parte da família Microsoft como funcionário, esta iniciativa específica não é para você. Mas há muitas outras maneiras de se envolver!"
      ],
      [
        "<strong>Ferramentas Poderosas</strong>: Acesso a recursos e ferramentas da Microsoft, além de uma rede global de colegas embaixadores para colaboração.",
        "<strong>Mentoria e Suporte</strong>: A Microsoft oferece mentoria e suporte contínuos para ajudá-lo em sua jornada de liderança e inovação.",
        "<strong>Benefícios Exclusivos</strong>: Desfrute de assinaturas gratuitas, créditos do Azure e muitos outros benefícios para impulsionar seus projetos."
      ],
      [
        "<strong>Alpha</strong>: Comece sua jornada completando um caminho de aprendizado e obtenha benefícios exclusivos.",
        "<strong>Beta</strong>: Organize eventos, workshops e mais para sua comunidade e receba reconhecimento e recompensas.",
        "<strong>Ouro</strong>: Alcance o ápice de sua jornada como embaixador e desfrute de privilégios especiais, incluindo a chance de se tornar um MVP da Microsoft."
      ],
      [
        "<strong>E se eu for iniciante em tecnologia?</strong> Todos são bem-vindos! Estamos aqui para apoiar sua jornada de aprendizado.",
        "<strong>E se eu não moro nos EUA?</strong> O programa é global! Há considerações específicas para estudantes internacionais, mas estamos aqui para ajudar.",
        "<strong>E se meu país não for elegível?</strong> Há muitas outras oportunidades para se envolver e fazer a diferença em sua comunidade."
      ]
    ]
  },
  english: {
    homeLang: "HOME",
    aboutLang: "ABOUT",
    contactLang: "CONTACT",
    
    viewMoreLang6: "View More",
    viewMoreLang7: "View More",
    aboutMeLang: "About Me",
    aboutContentLang: "About Content",
    myPostsLang: "My Posts",
    postsResumeLang: "Explore all my posts and get to know all my content.",
    rightReservedLang: "All rights reserved.",
    titleLang: "My Personal Blog",
    title1Lang: "Uncover the Secret Code: Become a Microsoft Learn Student Ambassador and Master the Tech World!",
    title2Lang: "Deciphering the Enigma of Microsoft Learn Student Ambassadors",
    title3Lang: "The Path to Tech Greatness",
    title4Lang: "Epic Rewards Await You",
    title5Lang: "Unlocking Your Path to Glory",
    title6Lang: "Build the Tech Future While Making Awesome Friends",
    title7Lang: "FAQ: Because We Know You Have Many",
    title8Lang: "The Next Step Towards Your Epic Journey",
    paragraphLang: [
        "Have you ever dreamed of being a pioneer in tech innovation, wielding the keyboard like a magic sword and leading a digital revolution? Welcome to the fascinating universe of Microsoft Learn Student Ambassadors! If you are passionate about technology and want to make a difference, put on your virtual reality glasses and embark on this journey with us!",
        "Being a Microsoft Learn Student Ambassador is more than just a title; it's a mission. Imagine standing alongside young people from all over the world, all with the same goal: to revolutionize the world of technology. As ambassadors, you are the Microsoft champions, armed with knowledge and determination to inspire and guide the next wave of tech innovators.",
        "Being a Microsoft Learn Student Ambassador is a unique opportunity to shape the future of technology, collaborate with like-minded people, and create lasting friendships. Ready to make a difference? Join us on this mission!",
        "Ready to make your mark on the tech world? <a href='url_do_site'>Visit our website</a> to learn more and start your adventure as a Microsoft Learn Student Ambassador. The future awaits you!"
    ],
    authorLang: "Daniel Cortez - Aug 6, 2023",
    shareLang: "Share",
    ulLang: [
      [
        "<strong>Age is Just a Number</strong>: The minimum age is 16, but passion and enthusiasm are what really count.",
        "<strong>Full-time Knowledge</strong>: Being enrolled in an accredited academic institution is essential to be part of this program.",
        "<strong>Humans, Yes; Robots, No</strong>: As advanced as they are, robots still can't become ambassadors. Maybe in the future, R2-D2!",
        "<strong>Student Exclusivity</strong>: If you are already part of the Microsoft family as an employee, this specific initiative is not for you. But there are many other ways to get involved!"
      ],
      [
        "<strong>Powerful Tools</strong>: Access to Microsoft resources and tools, plus a global network of fellow ambassadors for collaboration.",
        "<strong>Mentorship and Support</strong>: Microsoft offers ongoing mentorship and support to help you on your leadership and innovation journey.",
        "<strong>Exclusive Benefits</strong>: Enjoy free subscriptions, Azure credits, and many other benefits to boost your projects."
      ],
      [
        "<strong>Alpha</strong>: Start your journey by completing a learning path and gain exclusive benefits.",
        "<strong>Beta</strong>: Organize events, workshops, and more for your community and receive recognition and rewards.",
        "<strong>Gold</strong>: Reach the pinnacle of your journey as an ambassador and enjoy special privileges, including the chance to become a Microsoft MVP."
      ],
      [
        "<strong>What if I'm a tech beginner?</strong> Everyone is welcome! We're here to support your learning journey.",
        "<strong>What if I don't live in the US?</strong> The program is global! There are specific considerations for international students, but we're here to help.",
        "<strong>What if my country is not eligible?</strong> There are many other opportunities to get involved and make a difference in your community."
      ]
    ]
  },
  spanish: {
    homeLang: "INICIO",
    aboutLang: "SOBRE",
    contactLang: "CONTACTO",
    
    viewMoreLang6: "Ver Más",
    viewMoreLang7: "Ver Más",
    aboutMeLang: "Sobre Mí",
    aboutContentLang: "Contenido Sobre Mí",
    myPostsLang: "Mis Publicaciones",
    postsResumeLang: "Explora todas mis publicaciones y conoce todo mi contenido.",
    rightReservedLang: "Todos los derechos reservados.",
    titleLang: "Mi Blog Personal",
    title1Lang: "Descubre el Código Secreto: ¡Conviértete en un Microsoft Learn Student Ambassador y Domina el Mundo Tecnológico!",
    title2Lang: "Descifrando el Enigma de los Microsoft Learn Student Ambassadors",
    title3Lang: "El Camino hacia la Grandeza Tecnológica",
    title4Lang: "¡Recompensas Épicas te Esperan!",
    title5Lang: "Desbloqueando tu Camino hacia la Gloria",
    title6Lang: "Construye el Futuro Tecnológico Mientras Haces Amigos Increíbles",
    title7Lang: "Preguntas Frecuentes: Porque Sabemos que Tienes Muchas",
    title8Lang: "El Próximo Paso hacia tu Viaje Épico",
    paragraphLang: [
        "¿Alguna vez has soñado con ser el pionero de la innovación tecnológica, empuñando el teclado como una espada mágica y liderando una revolución digital? ¡Bienvenido al fascinante universo de los Microsoft Learn Student Ambassadors! Si te apasiona la tecnología y deseas marcar la diferencia, ponte tus gafas de realidad virtual y únete a nosotros en este viaje.",
        "Ser un Microsoft Learn Student Ambassador es más que un título; es una misión. Imagina estar al lado de jóvenes de todo el mundo, todos con el mismo objetivo: revolucionar el mundo de la tecnología. Como embajadores, son los campeones de Microsoft, armados con conocimiento y determinación para inspirar y guiar la próxima ola de innovadores tecnológicos.",
        "Ser un Microsoft Learn Student Ambassador es una oportunidad única para dar forma al futuro de la tecnología, colaborar con personas afines y crear amistades duraderas. ¿Listo para hacer la diferencia? ¡Únete a nosotros en esta misión!",
        "¿Listo para dejar tu huella en el mundo tecnológico? <a href='url_do_site'>Visita nuestro sitio web</a> para obtener más información y comenzar tu aventura como Microsoft Learn Student Ambassador. ¡El futuro te espera!"
    ],
    authorLang: "Daniel Cortez - 6 de ago. de 2023",
    shareLang: "Compartir",
    ulLang: [
      [
        "<strong>La edad es solo un número</strong>: La edad mínima es 16 años, pero la pasión y el entusiasmo son lo que realmente importa.",
        "<strong>Conocimiento a tiempo completo</strong>: Estar inscrito en una institución académica acreditada es esencial para formar parte de este programa.",
        "<strong>Humanos, sí; Robots, no</strong>: Por más avanzados que sean, los robots aún no pueden convertirse en embajadores. ¡Tal vez en el futuro, R2-D2!",
        "<strong>Exclusividad para estudiantes</strong>: Si ya eres parte de la familia Microsoft como empleado, esta iniciativa específica no es para ti. ¡Pero hay muchas otras formas de involucrarte!"
      ],
      [
        "<strong>Herramientas poderosas</strong>: Acceso a recursos y herramientas de Microsoft, además de una red global de colegas embajadores para colaborar.",
        "<strong>Mentoría y apoyo</strong>: Microsoft ofrece mentoría y apoyo continuo para ayudarte en tu viaje de liderazgo e innovación.",
        "<strong>Beneficios exclusivos</strong>: Disfruta de suscripciones gratuitas, créditos de Azure y muchos otros beneficios para impulsar tus proyectos."
      ],
      [
        "<strong>Alpha</strong>: Comienza tu viaje completando un camino de aprendizaje y obtén beneficios exclusivos.",
        "<strong>Beta</strong>: Organiza eventos, talleres y más para tu comunidad y recibe reconocimiento y recompensas.",
        "<strong>Oro</strong>: Alcanza la cima de tu viaje como embajador y disfruta de privilegios especiales, incluida la oportunidad de convertirte en un MVP de Microsoft."
      ],
      [
        "<strong>¿Qué pasa si soy principiante en tecnología?</strong> ¡Todos son bienvenidos! Estamos aquí para apoyar tu viaje de aprendizaje.",
        "<strong>¿Qué pasa si no vivo en los EE. UU.?</strong> ¡El programa es global! Hay consideraciones específicas para estudiantes internacionales, pero estamos aquí para ayudar.",
        "<strong>¿Qué pasa si mi país no es elegible?</strong> Hay muchas otras oportunidades para involucrarse y hacer la diferencia en tu comunidad."
      ]
    ]
  }
};

function applyLanguage(language) {
  homeLang.innerHTML = data[language].homeLang;
  aboutLang.innerHTML = data[language].aboutLang;
  contactLang.innerHTML = data[language].contactLang;
  
  viewMoreLang6.innerHTML = data[language].viewMoreLang6;
  viewMoreLang7.innerHTML = data[language].viewMoreLang7;
  aboutMeLang.innerHTML = data[language].aboutMeLang;
  aboutContentLang.innerHTML = data[language].aboutContentLang;
  myPostsLang.innerHTML = data[language].myPostsLang;
  postsResumeLang.innerHTML = data[language].postsResumeLang;
  rightReservedLang.innerHTML = data[language].rightReservedLang;
  titleLang.innerHTML = data[language].titleLang;
  title1Lang.innerHTML = data[language].title1Lang;
  title2Lang.innerHTML = data[language].title2Lang;
  title3Lang.innerHTML = data[language].title3Lang;
  title4Lang.innerHTML = data[language].title4Lang;
  title5Lang.innerHTML = data[language].title5Lang;
  title6Lang.innerHTML = data[language].title6Lang;
  title7Lang.innerHTML = data[language].title7Lang;
  title8Lang.innerHTML = data[language].title8Lang;
  shareLang.innerHTML = data[language].shareLang;

  paragraphLang.forEach((p, index) => {
      p.innerHTML = data[language].paragraphLang[index];
  });

  ulLang.forEach((ul, index) => {
      let listItems = ul.querySelectorAll("li");
      listItems.forEach((li, liIndex) => {
          li.innerHTML = data[language].ulLang[index][liIndex];
      });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const langMenu = document.querySelector(".lang-menu");
  const langSubMenu = langMenu.querySelector("ul");
  const links = langSubMenu.querySelectorAll("a");
  const selectedFlag = document.querySelector(".selected-lang");
 
  let selectedLanguage = localStorage.getItem("selectedLanguage") || "english";

  applyLanguage(selectedLanguage);

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

          if (attr === "english") {
              selectedFlag.style.backgroundImage = 'url("../src/img/english.webp")';
          } else if (attr === "portuguese") {
              selectedFlag.style.backgroundImage = 'url("../src/img/portuguese.webp")';
          } else if (attr === "spanish") {
              selectedFlag.style.backgroundImage = 'url("../src/img/spanish.webp")';
          }

          localStorage.setItem("selectedLanguage", attr);
          applyLanguage(attr);
      });
  });
});
