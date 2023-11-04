const { Op } = require('sequelize')
const { Product } = require('../../models/Product')

const list = async (request, response) => {

  const { page = 1 } = request.query

  const limit = 10

  let lastpage = 1

  const countProduct = await Product.count()

  // if (countProduct === 0) {
  //   response.status(400).json({ mensagem: "Erro: Nenhum produto encontrado!" })
  // } else {
  // }
  lastpage = Math.ceil(countProduct / limit)

  const products = await Product.findAll({ order: [['name', 'ASC']], offset: Number((page * limit) - limit), limit: limit })

  response.render('products/list', { products, lastpage, page, search: '' })
}

const form = (request, response) => {
  response.render('products/form')
}


module.exports = {
  list,
  form
}
