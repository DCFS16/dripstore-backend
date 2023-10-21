const submitProduct = (data) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }

  fetch('http://localhost:3000/api/products', options)
    // .then(() => alert('Produto cadastrado'))
    .catch(err => console.error(err));
}


const form = document.querySelector('#form')
form.addEventListener('submit', (event) => {
  event.preventDefault()

  submitProduct({
    name: 'Mouse',
    price: 12,
  })
})
