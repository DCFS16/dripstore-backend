const { Category } = require('../../models/Category')

const list = async (request, response) => {
  const { page = 1 } = request.query

  const limit = 10

  let lastpage = 1

  const countCategory = await Category.count()

  if (countCategory !== 0) {
    lastpage = Math.ceil(countCategory / limit)
  } else {
    response.status(400).json({ mensagem: 'Erro: Nenhuma categoria encontrada!' })
  }

  const categories = await Category.findAll({ order: [['name', 'ASC']], offset: Number((page * limit) - limit), limit })

  response.render('categories/list', { categories, lastpage, page })
}
/* eslint-disable */
const form = (response) => {
  response.render('categories/form')
}
/* eslint-enable */
module.exports = {
  list,
  form,
}
