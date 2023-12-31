const form = document.querySelector('#form')
const result = document.querySelector('#result')

const submitProduct = (data) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }

  fetch('http://localhost:3000/api/products', options)
    .then(() => {
      form.reset()
      result.innerHTML = 'Cadastro realizado.'
    })
    .catch((err) => console.error(err))
}

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const formData = new FormData(event.target)
  const { name, price } = Object.fromEntries(formData)

  submitProduct({
    name,
    price: parseFloat(price.replace(',', '.')),
    categories: window.$('.category').val(),
  })
})
