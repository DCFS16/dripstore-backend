const deleteProduct = (id) => {
  const options = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id })
  }

  const hasConfirmed = confirm('Deseja deletar o produto?')

  if (hasConfirmed) {
    fetch('http://localhost:3000/api/products', options)
      .then(() => {
        window.location.reload()
      })
      .catch(err => console.error(err));
  }

}

const buttonsDelete = document.querySelectorAll('.buttonDelete')
buttonsDelete.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault()
    deleteProduct(button.id)
  })
})
