const form = document.querySelector('#form')
const result = document.querySelector('#result')

const submitCategory = (data) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }
/* eslint-disable */
  fetch('http://localhost:3000/api/categories', options)
    .then(() => {
      form.reset()
      result.innerHTML = 'Cadastro realizado.'
    })
    .catch((err) => console.error(err))
}
/* eslint-enable */
form.addEventListener('submit', (event) => {
  event.preventDefault()
  const formData = new FormData(event.target)
  const { name } = Object.fromEntries(formData)

  submitCategory({
    name,
  })
})
