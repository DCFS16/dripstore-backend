const { Op } = require('sequelize')
const { Product } = require('../../models/Product')

const list = async (request, response, next) => {
  const page = request.query.page ?? 1
  const search = request.query.search ?? ''
  const perPage = 3

  const products = await Product.findAll({
    offset: (page - 1) * perPage,
    limit: perPage,
    where:
      { name: { [Op.like]: `%${search}%` } }
  })

  response.render('products/list', { products, page, search })
}

const form = (request, response, next) => {
  response.render('products/form')
}


module.exports = {
  list,
  form
}
