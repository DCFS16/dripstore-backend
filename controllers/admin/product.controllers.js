const { Product } = require('../../models/Product')

const list = async (request, response, next) => {
  const products = await Product.findAll()

  response.render('products/list', { products })
}

const form = (request, response, next) => {
  response.render('products/form')
}


module.exports = {
  list,
  form
}
