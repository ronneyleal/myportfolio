// PAUSAR ANIMAÇÃO DO REACT QUANDO PASSAR MOUSE
let reactjs = document.querySelector('.media-icons li a .fa-react')
let lireact = document.querySelector('.lireact')

lireact.addEventListener('mouseenter', function (e) {
  reactjs.style.animation = 'none'
})
lireact.addEventListener('mouseleave', function (e) {
  reactjs.style.animation = 'react 6s linear infinite'
})

let medlist = document.querySelectorAll('.media-icons li')
let circle = document.querySelector('.circle img')
medlist.forEach(elements => {
  elements.addEventListener('mouseenter', function (e) {
    let image = e.target.getAttribute('data-image')
    circle.src = image
  })
  elements.addEventListener('mouseleave', function (e) {
    circle.src = 'images/ronny.png'
  })
})

/* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '8rem',
  duration: 1000,
  reset: true
})

scrollReveal.reveal(
  `#home .text-logo, #home .frontend, #home .packicons,
  #home .circle, #home .media-icons li,
  #about .about-img, #about .about-text,
  #courses .text-title, #courses .swiper,
  #certificates .text-title, #certificates .box-cert,
  #contact .box-form,  #contact .form-content, #contact .box-img
  `,
  { interval: 30 }
)

/* Botão voltar para o topo */
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* Menu ativo conforme a seção visível na página */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 2

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/*  abre e fecha o menu quando clicar no icone: hamburguer e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da página quando der scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight
let logoh2 = document.querySelector('.logo h2')
let logoh2span = document.querySelector('.logo h2 span')
let imglogo = document.querySelector('.imglogo')

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
    logoh2.style.opacity = '0'
    logoh2.style.visibility = 'hidden'
    logoh2span.style.opacity = '0'
    logoh2span.style.visibility = 'hidden'
    imglogo.style.opacity = '1'
    imglogo.style.visibility = 'visible'
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
    logoh2.style.opacity = '1'
    logoh2.style.visibility = 'visible'
    logoh2span.style.opacity = '1'
    logoh2span.style.visibility = 'visible'
    imglogo.style.opacity = '0'
    imglogo.style.visibility = 'hidden'
  }
}

/* When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})
