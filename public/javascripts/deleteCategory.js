const deleteCategory = (id) => {
  const options = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id }),
  }
  /* eslint-disable */
  const hasConfirmed = window.confirm("Deseja deletar a categoria?");

  if (hasConfirmed) {
    fetch("http://localhost:3000/api/categories", options)
      .then(() => {
        alert("Categoria deletada com sucesso!");
        window.location.reload();
      })
      .catch(() => alert("Erro, tente novamente!"));
  }
};
/* eslint-enable */
const buttonsDelete = document.querySelectorAll('.buttonDelete')
buttonsDelete.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault()
    deleteCategory(button.id)
  })
})
