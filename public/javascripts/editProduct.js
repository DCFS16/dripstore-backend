
const editProduct = (data) => {
  const options = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
  }

  fetch('http://localhost:3000/api/products/'+data.id+'/edit', options)
    .then(() => alert('Produto editado'))
    .catch(err => console.error(err));
}
const form = document.querySelector('#formEdit')
form.addEventListener('submit', (event) => {
  event.preventDefault()
  const data = new FormData(event.target);
  const values = Object.fromEntries(data.entries());
  editProduct(values)
})
