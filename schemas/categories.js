require("express-validator");

const categorySchemaValidator = {
  name: {
    exists: {
      options: { checkFalsy: true },
      errorMessage: "Nome é Obrigatório",
    },

    isLength: {
      options: { max: 50 },
      errorMessage: "Nome deve ter até 50 caracteres",
    }
  },
}

module.exports = categorySchemaValidator
