const { validationResult } = require('express-validator')
const { Product } = require('../../models/Product')

const list = async (request, response) => {
  const products = await Product.findAll()
  response.json({ products })
}

const show = async (request, response) => {
  const product = await Product.findByPk(request.params.id)
  response.json(product)
}

const create = async (request, response) => {
  const { name, price } = request.body
  const errors = validationResult(request)

  if (!errors.isEmpty()) {
    response.status(400).json({
      success: false,
      errors: errors.array(),
    })
  }

  const product = Product.build({ name, price: +price })
  await product.save()
  response.status(201)
  response.json({ product })
}

const remove = async (request, response) => {
  const { id } = request.body
  const product = await Product.findByPk(id);
  await product.destroy();
  response.status(200)
  response.json({ product })

}

const update = async (request, response) => {
  const { name, price } = request.body
  const { id } = request.params

  if (price > 0) {
    const product = await Product.findByPk(id)
    product.update({ name, price: +price })
    await product.save()
    if (product) {
      response.status(200)
      response.json({ product })
    } else {
      response.status(404)
      response.json({
        message: 'product not found'
      })
    }
  } else {
    response.status(400)
    response.json(
      {
        message: 'price invalid'
      }
    )
  }

}


module.exports = {
  list,
  show,
  create,
  remove,
  update
}
