const deleteProduct = (id) => {
  const options = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id }),
  }

  const hasConfirmed = window.confirm('Deseja deletar o produto?')

  if (hasConfirmed) {
    fetch('http://localhost:3000/api/products', options)
      .then(() => {
        alert('Produto deletado com sucesso!')
        window.location.reload()
      })
      .catch(() => alert('Erro, tente novamente!'))
  }
}

const buttonsDelete = document.querySelectorAll('.buttonDelete')
buttonsDelete.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault()
    deleteProduct(button.id)
  })
})
