const { Product } = require('../../models/Product')

const list = async (request, response, next) => {
  const products = await Product.findAll()

  response.render('products/list', { products })
}

const form = (request, response, next) => {
  response.render('products/form')
}

const edit = async (request, response, next) => {
  const product = await Product.findByPk(request.params.id)
  response.render('products/edit', { product })
}


module.exports = {
  list,
  form,
  edit,
}
