const REGEX_NUMBER = /^\d+(?:\.\d+)?$/;

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
const inputError = document.querySelector("#error-price");

const validatePriceInput = (input) => {
  if (REGEX_NUMBER.test(input)) {
    inputError.classList.toggle("invisible");
    return false;
  } else {
    inputError.classList.toggle("invisible");
    return true;
  }
};


form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameProduct = document.querySelector("#name").value;
  const priceProduct = document.querySelector("#price").value;

  if (nameProduct === "" || priceProduct === "") {
    alert("Preencha todos os campos");

  } else if (validatePriceInput(priceProduct)) {
    console.log('osdfasghldifj');

  } else {
    console.log(nameProduct, parseFloat(priceProduct), "teste2");
    // submitProduct({
    //   name: nameProduct,
    //   price: priceProduct,
    // });
  }
});
