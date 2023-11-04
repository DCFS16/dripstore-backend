const form = document.querySelector('#form')
const productName = document.querySelector('#name')
const productPrice = document.querySelector('#price')
const result = document.querySelector('#result')

const editProduct = (data) => {
  const options = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }

  fetch('http://localhost:3000/api/products/' + data.id + '/edit', options)
    .then(() => {
      result.innerHTML = 'Produto editado.'

    })
    .catch(err => console.error(err));
}

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const data = new FormData(event.target);
  const values = Object.fromEntries(data.entries());
  editProduct(values)
})
