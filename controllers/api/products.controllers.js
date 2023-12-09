const { validationResult } = require('express-validator')
const { Product } = require('../../models/Product')
const { Product_Category } = require('../../models/relations/Product_Category')

const list = async (request, response) => {
  const products = await Product.findAll()

  response.json({ products })
}

const show = async (request, response) => {
  const product = await Product.findByPk(request.params.id)

  response.json(product)
}

const create = async (request, response) => {
  const errors = validationResult(request)

  if (!errors.isEmpty()) {
    response.status(400).json({
      success: false,
      errors: errors.array(),
    })
  }

  const { name, price, categories } = request.body

  console.log (categories)

  const product = Product.build({ name, price: +price})


  await product.save()

  await product.setCategories(categories)

  response.status(201)
  response.json({ product })
}

const remove = async (request, response) => {
  const { id } = request.body

  const product = await Product.findByPk(id)
  await Product_Category.destroy({where:{products_id: product.id}})
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
