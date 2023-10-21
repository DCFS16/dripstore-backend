const submitProduct = (data) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }

  fetch('http://localhost:3000/api/products', options)
    .then(() => alert('Produto cadastrado'))
    .catch(err => console.error(err));
}

const form = document.querySelector('#form');
form.addEventListener('submit', (event) => {
  event.preventDefault()

  const nameInput = document.getElementById("name");
  const priceInput = document.getElementById("price");

  const name = nameInput.value;
  const price = parseFloat(priceInput.value.replace(",", "."));

  submitProduct({
    name,
    price,
  });
})
