const { Product } = require('../../models/Product')
const { query, body, validationResult } = require('express-validator')

const list = async (request, response) => {
  const products = await Product.findAll()

  response.json({ products })
}

const show = async (request, response) => {
  const product = await Product.findByPk(request.params.id)

  response.json(product)
}

const create = [body('name').notEmpty().withMessage('Nome Obrigatorio'), async (request, response) => {
  const { name, price } = request.body

  const result = validationResult(request);
  if (result.isEmpty()) {
    return response.send('Deu ruim')
  }

  const product = Product.build({ name, price: +price })

  await product.save()

  response.status(201)
  response.json({ product })
}]



const remove = async (request, response) => {
  const { id } = request.body

  const product = await Product.findByPk(id)
  await product.destroy()

  response.status(200)
  response.json({ product })
}


module.exports = {
  list,
  show,
  create,
  remove,
}
