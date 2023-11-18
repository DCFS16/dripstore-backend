const deleteProduct = (id) => {
  const options = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id }),
  }

  const hasConfirmed = window.confirm('Deseja deletar o produto?') // eslint-disable-line no-use-before-defines

  if (hasConfirmed) {
    fetch('http://localhost:3000/api/products', options)
      .then(() => {
        alert('Produto deletado com sucesso!') // eslint-disable-line no-use-before-define
        window.location.reload()
      })
      .catch(() => alert('Erro, tente novamente!')) // eslint-disable-line no-use-before-define
  }
}

const buttonsDelete = document.querySelectorAll('.buttonDelete')
buttonsDelete.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault()
    deleteProduct(button.id)
  })
})
