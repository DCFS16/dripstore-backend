const { Product } = require('../../models/Product')
const { validationResult } = require('express-validator')

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
    return response.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }

  const { name, price } = request.body

  const product = Product.build({ name, price: +price });

  await product.save();

  response.status(201);
  response.json({ product });
};

const remove = async (request, response) => {
  const { id } = request.body

  const product = await Product.findByPk(id);
  await product.destroy();

  response.status(200);
  response.json({ product });
};

module.exports = {
  list,
  show,
  create,
  remove,
}
