const revealElements = document.querySelectorAll('.reveal')

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
      observer.unobserve(entry.target)
    }
  }), { threshold: 0.12 })

  revealElements.forEach(element => observer.observe(element))
} else {
  revealElements.forEach(element => element.classList.add('visible'))
}

const menu = document.querySelector('.menu')
const nav = document.querySelector('.nav nav')
const closeMenu = () => {
  nav.classList.remove('open')
  menu.setAttribute('aria-expanded', 'false')
  menu.setAttribute('aria-label', 'Open menu')
}

menu.addEventListener('click', () => {
  const open = nav.classList.toggle('open')
  menu.setAttribute('aria-expanded', String(open))
  menu.setAttribute('aria-label', open ? 'Close menu' : 'Open menu')
})
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu))
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeMenu()
})

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault()
  document.querySelector('.thanks').textContent = 'Thank you — your response has been received.'
  event.target.reset()
})
