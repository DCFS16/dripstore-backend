const editProduct = (data) => {
  const options = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }

  fetch('http://localhost:3000/api/products/' + data.id + '/edit', options)
    .then((data) => {
      if(data.status === 200){
         alert('Produto editado')
      }else{
        alert('Produto ou preço é inválido')
      }

    })
    .catch(err => console.error(err));
}
const form = document.querySelector('#formEdit')
form.addEventListener('submit', (event) => {
  event.preventDefault()
  const data = new FormData(event.target);
  const values = Object.fromEntries(data.entries());
  editProduct(values)
})
