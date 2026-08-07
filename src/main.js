const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) entry.target.classList.add('visible')
}), { threshold: .12 })

document.querySelectorAll('.reveal').forEach(element => observer.observe(element))

const menu = document.querySelector('.menu')
const nav = document.querySelector('.nav nav')
menu.addEventListener('click', () => {
  const open = nav.classList.toggle('open')
  menu.setAttribute('aria-expanded', String(open))
})
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')))

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault()
  document.querySelector('.thanks').textContent = 'Thank you — your response has been received.'
  event.target.reset()
})
