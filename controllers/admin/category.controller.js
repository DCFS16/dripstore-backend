const { Category } = require('../../models/Category')

const list = async (request, response) => {
  const { page = 1 } = request.query

  const limit = 10

  let lastpage = 1

  const countCategory = await Category.count()

  if (countCategory > 0) {
    lastpage = Math.ceil(countCategory / limit)
  }

  const categories = await Category.findAll({ order: [['name', 'ASC']], offset: Number((page * limit) - limit), limit })

  response.render('categories/list', { categories, lastpage, page })
}

const form = (request, response) => {
  response.render('categories/form')
}

module.exports = {
  list,
  form,
}
