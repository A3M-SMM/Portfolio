/* Mostrar y Ocultar Menu*/
const navMenu = document.getElementById("nav-menu");
      navToggle = document.getElementById("nav-toggle");
      navClose = document.getElementById("nav-close");

/* MENU Mostrar */

if(navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  })
}

/* Menu Oculto */

if(navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  })
}

/* Quitar Menu */
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    // Cuando se hace click se remueve la clase show-menu 
    navMenu.classList.remove("show-menu");
}
navLink.forEach(n => n.addEventListener("click", linkAction));

/* Desplegable Skill */
const skillsContent = document.getElementsByClassName("skills__content");
      skillsHeader = document.querySelectorAll(".skills__header");

      function toggleSkills() {
        let itemClass = this.parentNode.className

        for(i = 0; i < skillsContent.length; i++) {
          skillsContent[i].className = 'skills__content skills__close'
        }
        if(itemClass === 'skills__content skills__close'){
          this.parentNode.className = 'skills__content skills_open'
        }
      }
      
      skillsHeader.forEach((el) => {
        el.addEventListener("click", toggleSkills);
      })

      

/* Formacion */
const tabs = document.querySelectorAll("[data-target]");
      tabContents = document.querySelectorAll("[data-content]");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    console.log("click disparado");
    const target = document.querySelector(tab.dataset.target)

    tabContents.forEach(tabContent => {
      tabContent.classList.remove("qualification__active");
    })
    target.classList.add("qualification__active");

    tabs.forEach(tab => {
      tab.classList.remove("qualification__active");
    })
    tab.classList.add("qualification__active");
  })
})

/* Servicios*/
const modalViews = document.querySelectorAll(".services__modal");
      modalBtns = document.querySelectorAll(".services__button");
      modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function(modalClick) {
    modalViews[modalClick].classList.add("active-modal");
}

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i)
  })
})

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    })
  })
})

/* Portfolio */
let swiperPortfolio = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

});


/* Links Activos */
const sections = document.querySelectorAll("section[id]")

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add("active-link");
        }else{
            document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove("active-link");
        }
    })
}
window.addEventListener("scroll", scrollActive)

/* Cambiar color Header */ 
function scrollHeader(){
  const nav = document.getElementById("header");
  // Cambiar con tamaño del view 
  if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener("scroll", scrollHeader)

/* Scroll UP */ 
function scrollUp(){
  const scrollUp = document.getElementById("scroll-up");
  // Cambiar con tamaño del view  
  if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/* Tema Dark*/ 

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Cuando se selecciona
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// Validacion Tema
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// Validar seleccion
if (selectedTheme) {
  
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](iconTheme);
}

// Activate & Desactivar Tema
themeButton.addEventListener("click", () => {
    // Añadir Icono
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // Salvamos el Tema
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
})

// Validacion de Formulario
let nombre =document.getElementById("name");
let email =document.getElementById("email");
let service =document.getElementById("servicio");
let mensaje =document.getElementById("mensaje");

nombre.onchange = () => {console.log("name")};
email.onchange = () => {console.log("email")};
service.onchange = () => {console.log("servicio")};
mensaje.onchange = () => {console.log("mensaje")};

let formulario = document.getElementById("form");
formulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    console.log("Formulario Enviado");    
}
