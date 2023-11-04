const { Product } = require('../../models/Product')

const list = async (request, response) => {

  const { page = 1 } = request.query

  const limit = 10

  let lastpage = 1

  const countProduct = await Product.count()

  if (countProduct !== 0) {
    lastpage = Math.ceil(countProduct / limit)
    console.log(lastpage)

  } else {
    response.status(400).json({ mensagem: "Erro: Nenhum produto encontrado!" })
  }

  const products = await Product.findAll({ order: [['name', 'ASC']], offset: Number((page * limit) - limit), limit: limit })

  response.render('products/list', { products, lastpage, page })
}

const form = (request, response) => {
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
