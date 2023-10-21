const { Product } = require('../../models/Product')

const list = async (request, response, next) => {
  const products = await Product.findAll()

  response.render('products/list', { products })
}

const form = (request, response, next) => {
  response.render('products/form')
}

const edit = async (request, response, next) => {
  const item = await Product.findByPk(request.params.id)
  response.render('products/edit', { item })
  return item
}

const editItem = async (request, response, next) => {
  const updateItem = await Product.update()
  await updateItem.save()
  response.render('products/edit',{updateItem})
}


module.exports = {
  list,
  form,
  edit,
  editItem
}
