document.querySelectorAll('.faq details').forEach(item => {
  item.addEventListener('toggle', () => {
    if (!item.open) return
    document.querySelectorAll('.faq details').forEach(other => {
      if (other !== item) other.open = false
    })
  })
})

document.querySelector('.rsvp form').addEventListener('submit', event => {
  event.preventDefault()
  const name = new FormData(event.currentTarget).get('name').trim()
  document.querySelector('.form-status').textContent = `Thank you, ${name}. Your response has been recorded.`
  event.currentTarget.reset()
})
