const submitProduct = (data) => {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  fetch("http://localhost:3000/api/products", options)
    // .then(() => alert('Produto cadastrado'))
    .catch((err) => console.error(err));
};

const form = document.querySelector("#form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameProduct = document.querySelector("#name").value;
  const priceProduct = ++document.querySelector("#price").value;

  if (nameProduct === "" || priceProduct === "") {
    alert("Preencha todos os campos");
  } else {
    console.log(nameProduct, priceProduct, "teste");
    // submitProduct({
    //   name: nameProduct,
    //   price: priceProduct,
    // });
  }
});
