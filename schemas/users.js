require('express-validator')

const userSchemaValidator = {
  name: {
    exists: {
      options: { checkFalsy: true },
      errorMessage: 'Nome é Obrigatório',
    },

    isString: { errorMessage: 'Nome deve conter letras' },

    isLength: {
      options: { max: 50 },
      errorMessage: 'Nome deve ter até 50 caracteres',
    },
  },
  password: {
    exists: {
      options: { checkFalsy: true },
      errorMessage: 'Nome é Obrigatório',
    },
    isLength: {
      options: { min: 4 },
      errorMessage: 'Senha deve ter pelo menos 4 digitos',
    },
  }
}

module.exports = userSchemaValidator
