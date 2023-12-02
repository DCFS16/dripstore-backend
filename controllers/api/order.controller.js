const { Order } = require('../../models/Order')

const list = async (request, response) => {
  const orders = await Order.findAll()

  response.json({ orders })
}

const show = async (request, response) => {
  const order = await Order.findByPk(request.params.id)

  response.json(order)
}

const create = async (request, response) => {

  const { token, product_id } = request.body

  const order = Order.build({ user_id: token, product_id })

  await order.save()

  response.status(201)
  response.json({ order })
}

const removeCart = async (request, response) => {
  const { id } = request.body

  const order = await Order.findByPk(id)
  await order.destroy

  response.status(200)
  response.json({ order })
}

module.exports = {
  list,
  show,
  create,
  removeCart
}
