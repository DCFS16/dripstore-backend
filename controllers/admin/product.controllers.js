const { request } = require('express')
const { Product } = require('../../models/Product')
const { Orders } = require('../../models/Order')

const list = async (request, response) => {
  const { page = 1 } = request.query

  const limit = 10

  let lastpage = 1

  const countProduct = await Product.count()

  lastpage = Math.ceil(countProduct / limit)

  const products = await Product.findAll({ order: [['name', 'ASC']], offset: Number((page * limit) - limit), limit })

  response.render('products/list', {
    products, lastpage, page, search: '',
  })
}

const form = (request, response) => {
  response.render('products/form')
}

const orders = async (request, response) => {
  const countOrders = await Orders.count()

  const orders = await Orders.findAll({ order: [['id', 'ASC']] })
  console.log(orders)
  response.render('products/orders', { orders, countOrders })
}

module.exports = {
  list,
  form,
  orders
}
