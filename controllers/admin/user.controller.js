const { User } = require('../../models/User')

const list = async (request, response) => {
  const { page = 1 } = request.query

  const limit = 10

  let lastpage = 1

  const countUser = await User.count()

  lastpage = Math.ceil(countUser / limit)


  const users = await User.findAll({ offset: Number((page * limit) - limit), limit: limit })

  response.render('users/list', { users, lastpage, page, search: '' })
}

const form = (request, response) => {
  response.render('users/form')
}

module.exports = {
  list,
  form,
}
