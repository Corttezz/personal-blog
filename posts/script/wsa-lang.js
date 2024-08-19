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
  rightReservedLang = document.querySelector(".rightReserved-lang");

  titleLang = document.querySelector(".title-post"),
  authorLang = document.querySelector(".author-lang"),
  shareLang = document.querySelector(".share-lang"),
  paragraphLang = document.querySelector(".post__content"),
  ulLang = document.querySelectorAll(".ul-lang");


  link.forEach((el) => {
    el.addEventListener("click", () => {
        langs.querySelector(".active").classList.remove("active");
        el.classList.add("active");
  
        let attr = el.getAttribute("language");
  
        homeLang.textContent = data[attr].homeLang;
        aboutLang.textContent = data[attr].aboutLang;
        contactLang.textContent = data[attr].contactLang;
        
        viewMoreLang6.textContent = data[attr].viewMoreLang6;
        viewMoreLang7.textContent = data[attr].viewMoreLang7;
        aboutMeLang.textContent = data[attr].aboutMeLang;
        aboutContentLang.textContent = data[attr].aboutContentLang;
        myPostsLang.textContent = data[attr].myPostsLang;
        postsResumeLang.textContent = data[attr].postsResumeLang;
        rightReservedLang.textContent = data[attr].rightReservedLang;
        titleLang.textContent = data[attr].titleLang;
        authorLang.textContent = data[attr].authorLang;
        shareLang.textContent = data[attr].shareLang;
        paragraphLang.innerHTML = data[attr].paragraphLang;
  
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
      titleLang: "Static Web Apps: O Futuro da Hospedagem de Sites Simples",
      authorLang: "Daniel Cortez - 18 de ago. de 2024",
      shareLang: "Compartilhar",
      paragraphLang: `
          <p>Com o crescimento exponencial da web e a necessidade de entregar conteúdos mais rápidos e acessíveis, as <strong>Static Web Apps</strong> surgem como uma solução prática e eficiente. Mas o que são exatamente essas aplicações estáticas e por que elas estão ganhando tanta popularidade? Vamos explorar esse conceito e entender como ele pode revolucionar a forma como construímos e hospedamos sites.</p>
          <h3>O Que São Static Web Apps?</h3>
          <p>Uma Static Web App é, como o nome sugere, uma aplicação web composta por arquivos estáticos – HTML, CSS, JavaScript, e imagens. Diferente das aplicações dinâmicas, que dependem de um servidor para processar lógica no lado do servidor e gerar conteúdo em tempo real, as aplicações estáticas são pré-compiladas e entregues diretamente ao navegador do usuário. Isso significa que o conteúdo é carregado rapidamente, sem a necessidade de processamento adicional no servidor.</p>
          <div class="post__img"><img width="50%" src="../src/img/static-dynamic.webp" alt="Comparação entre Aplicações Estáticas e Dinâmicas"></div>
          <br>
          <h3>Vantagens das Static Web Apps</h3>
          <ul>
              <li><strong>Velocidade de Carregamento:</strong> Como o conteúdo é estático, ele pode ser servido rapidamente, muitas vezes diretamente de uma CDN (Content Delivery Network), proporcionando uma experiência de usuário muito mais rápida.</li>
              <li><strong>Segurança:</strong> Com menos pontos de ataque, as Static Web Apps são inerentemente mais seguras. Não há servidor para hackear e nenhum banco de dados para ser comprometido.</li>
              <li><strong>Escalabilidade:</strong> Elas podem ser facilmente escaladas, já que o servidor apenas precisa servir arquivos estáticos. Isso torna possível lidar com grandes volumes de tráfego sem necessidade de infraestrutura complexa.</li>
              <li><strong>Custo:</strong> Hospedar uma Static Web App geralmente custa menos, pois requer menos recursos do servidor. Muitas plataformas oferecem planos gratuitos ou de baixo custo para esse tipo de hospedagem.</li>
          </ul>
          <br>
          <h3>Casos de Uso Ideais</h3>
          <p>Embora as Static Web Apps não sejam adequadas para todas as situações, elas brilham em certos cenários. Sites de portfólio, blogs, landing pages e documentação são ótimos exemplos de casos onde uma Static Web App pode ser a escolha perfeita. Eles exigem pouca ou nenhuma interação dinâmica com o usuário, tornando-as ideais para esse tipo de aplicação.</p>
         <br>
          <h3>Boas Práticas na Criação de Static Web Apps</h3>
          <ul>
              <li><strong>Minificação e Compactação:</strong> Sempre minifique seus arquivos HTML, CSS e JavaScript para reduzir o tamanho e melhorar o tempo de carregamento.</li>
              <li><strong>Uso de CDN:</strong> Hospede seus arquivos estáticos em uma CDN para garantir que eles sejam entregues da maneira mais rápida possível, independentemente da localização do usuário.</li>
              <li><strong>Automatização de Builds:</strong> Utilize ferramentas como GitHub Actions ou outras CI/CD para automatizar o processo de build e deploy, garantindo que sempre haja uma versão atualizada e otimizada da sua aplicação.</li>
              <li><strong>Testes de Performance:</strong> Execute testes regulares de performance usando ferramentas como Google Lighthouse para garantir que sua Static Web App esteja sempre otimizada.</li>
              <li><strong>Monitoramento:</strong> Mesmo aplicações estáticas devem ser monitoradas para garantir que tudo esteja funcionando corretamente, especialmente em casos de picos de tráfego.</li>
          </ul>
          <br>
          <h3>Integração com APIs e Funcionalidades Dinâmicas</h3>
          <p>Uma das grandes vantagens das Static Web Apps é que, embora sejam estáticas, ainda permitem a integração com funcionalidades dinâmicas através do uso de APIs. Por exemplo, você pode criar um blog estático que busca os posts mais recentes de uma API REST ou um site de portfólio que exibe os últimos projetos diretamente do GitHub. Isso oferece o melhor dos dois mundos: a velocidade e segurança de uma aplicação estática com a flexibilidade e interatividade das aplicações dinâmicas.</p>
          <div class="post__img"><img src="../src/img/api-integration.webp" alt="Integração de API em Static Web Apps"></div>
          <br>
          <h3>Ferramentas Populares para Criar Static Web Apps</h3>
          <p>Atualmente, existem várias ferramentas e plataformas que facilitam a criação e o gerenciamento de Static Web Apps. Aqui estão algumas das mais populares:</p>
          <ul>
              <li><strong>Jekyll:</strong> Uma das ferramentas mais antigas para criar blogs estáticos, amplamente usada em conjunto com o GitHub Pages.</li>
              <li><strong>Hugo:</strong> Conhecido por sua velocidade, Hugo é um gerador de sites estáticos escrito em Go que suporta uma grande variedade de temas e plugins.</li>
              <li><strong>Gatsby:</strong> Baseado em React, Gatsby é uma das ferramentas mais modernas para criar Static Web Apps, especialmente voltada para desenvolvedores que já trabalham com o ecossistema React.</li>
              <li><strong>Next.js:</strong> Embora seja um framework full-stack, o Next.js permite a geração de sites estáticos, combinando o melhor dos dois mundos.</li>
              <li><strong>Netlify:</strong> Além de ser uma plataforma de hospedagem, o Netlify também oferece uma excelente integração com diversas ferramentas de desenvolvimento, automatizando todo o processo de build e deploy.</li>
          </ul>
          <br>
          <h3>Desafios e Considerações</h3>
          <p>Embora as Static Web Apps tenham muitas vantagens, também há alguns desafios a serem considerados. Um dos principais é a limitação na interatividade dinâmica. Para aplicações que exigem funcionalidades complexas de backend, uma abordagem puramente estática pode não ser suficiente. Além disso, a manutenção de conteúdos dinâmicos (como comentários em blogs) pode exigir soluções híbridas, como o uso de serviços de terceiros ou a adoção de um modelo Jamstack, que combina JavaScript, APIs, e Markup.</p>
          <p>Outro ponto importante é a necessidade de gerenciar corretamente as rotas e URLs, especialmente em aplicações que necessitam de URLs amigáveis e SEO. Embora plataformas modernas como o Netlify e o Vercel ofereçam ferramentas para lidar com essas questões, é crucial planejar e testar adequadamente sua implementação.</p>
         <br>
          <h3>Conclusão</h3>
          <p>As Static Web Apps estão se tornando uma escolha cada vez mais popular para desenvolvedores que buscam simplicidade, velocidade e segurança. Elas são ideais para muitos tipos de sites e oferecem uma abordagem moderna para a hospedagem e entrega de conteúdo na web. Com a adoção crescente de ferramentas e plataformas que suportam essas aplicações, nunca houve um momento melhor para explorar e adotar essa tecnologia em seus projetos.</p>
          <p>Seja você um desenvolvedor experiente ou alguém que está apenas começando no mundo do desenvolvimento web, explorar as possibilidades das Static Web Apps pode abrir portas para novas oportunidades e maneiras inovadoras de criar e compartilhar conteúdo online.</p>

          <p>penis</p>
      `
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
      titleLang: "Static Web Apps: The Future of Simple Website Hosting",
      authorLang: "Daniel Cortez - Aug 18, 2024",
      shareLang: "Share",
      paragraphLang: `
          <p>With the exponential growth of the web and the need to deliver faster and more accessible content, <strong>Static Web Apps</strong> emerge as a practical and efficient solution. But what exactly are these static applications and why are they gaining so much popularity? Let's explore this concept and understand how it can revolutionize the way we build and host websites.</p>
          <h3>What Are Static Web Apps?</h3>
          <p>A Static Web App is, as the name suggests, a web application composed of static files – HTML, CSS, JavaScript, and images. Unlike dynamic applications, which rely on a server to process logic on the server side and generate content in real-time, static applications are pre-compiled and delivered directly to the user's browser. This means that content loads quickly, without the need for additional server-side processing.</p>
          <div class="post__img"><img width="50%" src="../src/img/static-dynamic.webp" alt="Comparison between Static and Dynamic Applications"></div>
          <br>
          <h3>Advantages of Static Web Apps</h3>
          <ul>
              <li><strong>Loading Speed:</strong> Since the content is static, it can be served quickly, often directly from a CDN (Content Delivery Network), providing a much faster user experience.</li>
              <li><strong>Security:</strong> With fewer attack points, Static Web Apps are inherently more secure. There is no server to hack and no database to be compromised.</li>
              <li><strong>Scalability:</strong> They can be easily scaled, as the server only needs to serve static files. This makes it possible to handle large volumes of traffic without complex infrastructure.</li>
              <li><strong>Cost:</strong> Hosting a Static Web App generally costs less because it requires fewer server resources. Many platforms offer free or low-cost plans for this type of hosting.</li>
          </ul>
          <br>
          <h3>Ideal Use Cases</h3>
          <p>Although Static Web Apps are not suitable for all situations, they shine in certain scenarios. Portfolio sites, blogs, landing pages, and documentation are great examples of cases where a Static Web App might be the perfect choice. They require little or no dynamic interaction with the user, making them ideal for this type of application.</p>
          <h3>Best Practices in Creating Static Web Apps</h3>
          <ul>
              <li><strong>Minification and Compression:</strong> Always minify your HTML, CSS, and JavaScript files to reduce size and improve loading time.</li>
              <li><strong>Use of CDN:</strong> Host your static files on a CDN to ensure they are delivered as quickly as possible, regardless of the user's location.</li>
              <li><strong>Build Automation:</strong> Use tools like GitHub Actions or other CI/CD to automate the build and deploy process, ensuring there is always an updated and optimized version of your application.</li>
              <li><strong>Performance Testing:</strong> Run regular performance tests using tools like Google Lighthouse to ensure your Static Web App is always optimized.</li>
              <li><strong>Monitoring:</strong> Even static applications should be monitored to ensure everything is working properly, especially during traffic spikes.</li>
          </ul>
          <br>
          <h3>API Integration and Dynamic Features</h3>
          <p>One of the great advantages of Static Web Apps is that, although they are static, they still allow integration with dynamic features through the use of APIs. For example, you can create a static blog that fetches the latest posts from a REST API or a portfolio site that displays the latest projects directly from GitHub. This offers the best of both worlds: the speed and security of a static application with the flexibility and interactivity of dynamic applications.</p>
          <div class="post__img"><img src="../src/img/api-integration.webp" alt="API Integration in Static Web Apps"></div>
          <br>
          <h3>Popular Tools for Creating Static Web Apps</h3>
          <p>Today, there are several tools and platforms that make it easy to create and manage Static Web Apps. Here are some of the most popular:</p>
          <ul>
              <li><strong>Jekyll:</strong> One of the oldest tools for creating static blogs, widely used in conjunction with GitHub Pages.</li>
              <li><strong>Hugo:</strong> Known for its speed, Hugo is a Go-based static site generator that supports a wide variety of themes and plugins.</li>
              <li><strong>Gatsby:</strong> Based on React, Gatsby is one of the most modern tools for creating Static Web Apps, especially aimed at developers already working with the React ecosystem.</li>
              <li><strong>Next.js:</strong> Although it is a full-stack framework, Next.js allows static site generation, combining the best of both worlds.</li>
              <li><strong>Netlify:</strong> In addition to being a hosting platform, Netlify also offers excellent integration with various development tools, automating the entire build and deploy process.</li>
          </ul>
          <br>
          <h3>Challenges and Considerations</h3>
          <p>While Static Web Apps have many advantages, there are also some challenges to consider. One of the main ones is the limitation in dynamic interactivity. For applications that require complex backend functionalities, a purely static approach may not be sufficient. Additionally, maintaining dynamic content (such as comments on blogs) may require hybrid solutions, such as the use of third-party services or the adoption of a Jamstack model, which combines JavaScript, APIs, and Markup.</p>
          <p>Another important point is the need to correctly manage routes and URLs, especially in applications that require SEO-friendly URLs. While modern platforms like Netlify and Vercel offer tools to deal with these issues, it is crucial to plan and properly test your implementation.</p>
          <h3>Conclusion</h3>
          <p>Static Web Apps are becoming an increasingly popular choice for developers looking for simplicity, speed, and security. They are ideal for many types of sites and offer a modern approach to web hosting and content delivery. With the growing adoption of tools and platforms that support these applications, there has never been a better time to explore and adopt this technology in your projects.</p>
          <p>Whether you are an experienced developer or someone just starting in the world of web development, exploring the possibilities of Static Web Apps can open doors to new opportunities and innovative ways to create and share content online.</p>
      <p>peniss</p>
          `
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
      titleLang: "Static Web Apps: El Futuro de la Hospedaje de Sitios Simples",
      authorLang: "Daniel Cortez - 18 de ago. de 2024",
      shareLang: "Compartir",
      paragraphLang: `
          <p>Con el crecimiento exponencial de la web y la necesidad de entregar contenido más rápido y accesible, las <strong>Static Web Apps</strong> surgen como una solución práctica y eficiente. Pero, ¿qué son exactamente estas aplicaciones estáticas y por qué están ganando tanta popularidad? Vamos a explorar este concepto y entender cómo puede revolucionar la forma en que construimos y alojamos sitios web.</p>
          <br>
          <h3>¿Qué son las Static Web Apps?</h3>
          <p>Una Static Web App es, como su nombre lo indica, una aplicación web compuesta por archivos estáticos: HTML, CSS, JavaScript e imágenes. A diferencia de las aplicaciones dinámicas, que dependen de un servidor para procesar la lógica en el lado del servidor y generar contenido en tiempo real, las aplicaciones estáticas se pre-compilan y se entregan directamente al navegador del usuario. Esto significa que el contenido se carga rápidamente, sin la necesidad de procesamiento adicional en el servidor.</p>
          <div class="post__img"><img width="50%" src="../src/img/static-dynamic.webp" alt="Comparación entre Aplicaciones Estáticas y Dinámicas"></div>
                  <br>
          <h3>Ventajas de las Static Web Apps</h3>
          <ul>
              <li><strong>Velocidad de Carga:</strong> Dado que el contenido es estático, se puede servir rápidamente, a menudo directamente desde una CDN (Red de Entrega de Contenido), proporcionando una experiencia de usuario mucho más rápida.</li>
              <li><strong>Seguridad:</strong> Con menos puntos de ataque, las Static Web Apps son inherentemente más seguras. No hay servidor que hackear ni base de datos que comprometer.</li>
              <li><strong>Escalabilidad:</strong> Se pueden escalar fácilmente, ya que el servidor solo necesita servir archivos estáticos. Esto hace posible manejar grandes volúmenes de tráfico sin una infraestructura compleja.</li>
              <li><strong>Costo:</strong> Alojar una Static Web App generalmente cuesta menos, ya que requiere menos recursos del servidor. Muchas plataformas ofrecen planes gratuitos o de bajo costo para este tipo de alojamiento.</li>
          </ul>
          <br>
          <h3>Casos de Uso Ideales</h3>
          <p>Aunque las Static Web Apps no son adecuadas para todas las situaciones, brillan en ciertos escenarios. Los sitios de portafolio, blogs, páginas de aterrizaje y documentación son ejemplos de casos donde una Static Web App puede ser la elección perfecta. Requieren poca o ninguna interacción dinámica con el usuario, lo que las hace ideales para este tipo de aplicaciones.</p>
          <br>
          <h3>Mejores Prácticas en la Creación de Static Web Apps</h3>
          <ul>
              <li><strong>Minificación y Compresión:</strong> Siempre minifique sus archivos HTML, CSS y JavaScript para reducir el tamaño y mejorar el tiempo de carga.</li>
              <li><strong>Uso de CDN:</strong> Aloje sus archivos estáticos en una CDN para garantizar que se entreguen lo más rápido posible, independientemente de la ubicación del usuario.</li>
              <li><strong>Automatización de Builds:</strong> Utilice herramientas como GitHub Actions u otras CI/CD para automatizar el proceso de compilación y despliegue, asegurando que siempre haya una versión actualizada y optimizada de su aplicación.</li>
              <li><strong>Pruebas de Rendimiento:</strong> Realice pruebas de rendimiento regulares utilizando herramientas como Google Lighthouse para asegurarse de que su Static Web App esté siempre optimizada.</li>
              <li><strong>Monitoreo:</strong> Incluso las aplicaciones estáticas deben ser monitoreadas para garantizar que todo esté funcionando correctamente, especialmente durante los picos de tráfico.</li>
          </ul>
         <br>
          <h3>Integración con APIs y Funcionalidades Dinámicas</h3>
          <p>Una de las grandes ventajas de las Static Web Apps es que, aunque son estáticas, aún permiten la integración con funcionalidades dinámicas a través del uso de APIs. Por ejemplo, puede crear un blog estático que obtenga las publicaciones más recientes de una API REST o un sitio de portafolio que muestre los últimos proyectos directamente desde GitHub. Esto ofrece lo mejor de ambos mundos: la velocidad y seguridad de una aplicación estática con la flexibilidad e interactividad de las aplicaciones dinámicas.</p>
          <div class="post__img"><img src="../src/img/api-integration.webp" alt="Integración de API en Static Web Apps"></div>
          <br>
          <h3>Herramientas Populares para Crear Static Web Apps</h3>
          <p>Hoy en día, existen varias herramientas y plataformas que facilitan la creación y gestión de Static Web Apps. Aquí hay algunas de las más populares:</p>
          <ul>
              <li><strong>Jekyll:</strong> Una de las herramientas más antiguas para crear blogs estáticos, ampliamente utilizada junto con GitHub Pages.</li>
              <li><strong>Hugo:</strong> Conocido por su velocidad, Hugo es un generador de sitios estáticos escrito en Go que admite una amplia variedad de temas y complementos.</li>
              <li><strong>Gatsby:</strong> Basado en React, Gatsby es una de las herramientas más modernas para crear Static Web Apps, especialmente dirigida a desarrolladores que ya trabajan con el ecosistema React.</li>
              <li><strong>Next.js:</strong> Aunque es un marco full-stack, Next.js permite la generación de sitios estáticos, combinando lo mejor de ambos mundos.</li>
              <li><strong>Netlify:</strong> Además de ser una plataforma de alojamiento, Netlify también ofrece una excelente integración con varias herramientas de desarrollo, automatizando todo el proceso de compilación y despliegue.</li>
          </ul>
          <br>
          <h3>Desafíos y Consideraciones</h3>
          <p>Si bien las Static Web Apps tienen muchas ventajas, también hay algunos desafíos a considerar. Uno de los principales es la limitación en la interactividad dinámica. Para aplicaciones que requieren funcionalidades complejas de backend, un enfoque puramente estático puede no ser suficiente. Además, mantener contenido dinámico (como comentarios en blogs) puede requerir soluciones híbridas, como el uso de servicios de terceros o la adopción de un modelo Jamstack, que combina JavaScript, APIs y Markup.</p>
          <p>Otro punto importante es la necesidad de gestionar correctamente las rutas y URLs, especialmente en aplicaciones que requieren URLs amigables para SEO. Si bien las plataformas modernas como Netlify y Vercel ofrecen herramientas para abordar estos problemas, es crucial planificar y probar adecuadamente su implementación.</p>
          <br>
          <h3>Conclusión</h3>
          <p>Las Static Web Apps están convirtiéndose en una elección cada vez más popular para los desarrolladores que buscan simplicidad, velocidad y seguridad. Son ideales para muchos tipos de sitios y ofrecen un enfoque moderno para el alojamiento y la entrega de contenido en la web. Con la creciente adopción de herramientas y plataformas que admiten estas aplicaciones, nunca ha habido un mejor momento para explorar y adoptar esta tecnología en sus proyectos.</p>
          <p>Ya sea que seas un desarrollador experimentado o alguien que recién comienza en el mundo del desarrollo web, explorar las posibilidades de las Static Web Apps puede abrir puertas a nuevas oportunidades y formas innovadoras de crear y compartir contenido en línea.</p>
      <p> oi </p>
          `
    }
  };


  function applyLanguage(language) {
    homeLang.textContent = data[language].homeLang;
    aboutLang.textContent = data[language].aboutLang;
    contactLang.textContent = data[language].contactLang;
    
    viewMoreLang6.textContent = data[language].viewMoreLang6;
    viewMoreLang7.textContent = data[language].viewMoreLang7;
    aboutMeLang.textContent = data[language].aboutMeLang;
    aboutContentLang.textContent = data[language].aboutContentLang;
    myPostsLang.textContent = data[language].myPostsLang;
    postsResumeLang.textContent = data[language].postsResumeLang;
    rightReservedLang.textContent = data[language].rightReservedLang;
    titleLang.textContent = data[language].titleLang;
    document.title = data[language].titleLang; // Atualiza o título da página
    authorLang.innerHTML = data[language].authorLang;
    shareLang.textContent = data[language].shareLang;
    paragraphLang.innerHTML = data[language].paragraphLang;
  }
  

document.addEventListener("DOMContentLoaded", function () {
  const langMenu = document.querySelector(".lang-menu");
  const langSubMenu = langMenu.querySelector("ul");
  const links = langSubMenu.querySelectorAll("a");
  const selectedFlag = document.querySelector(".selected-lang");
 
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