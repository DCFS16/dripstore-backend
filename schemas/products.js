require("express-validator");

const productSchemaValidator = {
  name: {
    exists: {
      options: { checkFalsy: true },
      errorMessage: "Nome é Obrigatório",
    },

    isString: { errorMessage: "Nome deve ser uma String" },

    isLength: {
      options: { max: 50 },
      errorMessage: "Nome deve ter até 50 caracteres",
    },
  },

  price: {
    exists: {
      options: { checkFalsy: true },
      errorMessage: "Preço é Obrigatório!",
    },

    isNumeric: { errorMessage: "Preço dever ser um Número" },

    custom: {
      options: (value) => {
        const regex = /^\d+(\.\d{1,2})?$/;
        if (!regex.test(value)) {
          throw new Error("Preço deve ter até duas casas decimais");
        }
        return true;
      },
    },
  },
}

module.exports = productSchemaValidator
