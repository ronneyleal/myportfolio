// ALTERAR LOGO QUANDO DER HOVER

function changelogo() {
  let ronneydev = document.getElementById('ronney')

  if (
    ronneydev.addEventListener('mouseover', function (e) {
      ronneydev.src = 'images/ronneydev2.png'
    })
  );
  else
    ronneydev.addEventListener('mouseout', function (e) {
      ronneydev.src = 'images/ronneydev.png'
    })
}

/* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '8rem',
  duration: 1000,
  reset: true
})

scrollReveal.reveal(
  `#home .aside, #home .aside-r,
  #about .about-img, #about .about-text,
  #courses .courses-title, #courses .content,
  #certificates .cert-title, #certificates .box-cert,
  #contact .box-form, #contact .box-media,
  footer .box-footer, footer .footer-icons, footer .footer-links
  `,
  { interval: 100 }
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

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
}

/* When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})

// alterar cor de fundo conforme icones

let list = document.querySelectorAll('.box-icons li')
let bg = document.querySelector('body')
list.forEach(elements => {
  elements.addEventListener('mouseenter', function (e) {
    let color = e.target.getAttribute('data-color')
    bg.style.background = color
  })
  elements.addEventListener('mouseleave', function (e) {
    bg.style.background =
      'linear-gradient(-220deg, var(--second-color), var(--light-color))'
  })
})
