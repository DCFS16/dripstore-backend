const { Category } = require('../../models/Category')
const { validationResult } = require('express-validator')

const list = async (request, response) => {
  const categories = await Category.findAll()

  response.json({ categories })
}

const show = async (request, response) => {
  const category = await Category.findByPk(request.params.id)

  const products = [] //category.products()

  response.json({
    ...category.toJSON(),
    products,
  })
}

const create = async (request, response) => {
  const errors = validationResult(request)

  if (!errors.isEmpty()) {
    return response.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }

  const { name } = request.body

  const categories = Category.build({ name });

  await categories.save();

  response.status(201);
  response.json({ categories });
};

const remove = async (request, response) => {
  const { id } = request.body

  const categories = await Category.findByPk(id);
  await categories.destroy();

  response.status(200);
  response.json({ categories });
};

module.exports = {
  list,
  show,
  create,
  remove,
}
