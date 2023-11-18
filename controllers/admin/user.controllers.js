const { User } = require('../../models/Users')

const listUsers = async (request, response) => {
  const { page = 1 } = request.query

  const limit = 10

  let lastpage = 1

  const countUser = await User.count()

  lastpage = Math.ceil(countUser / limit)


  const users = await User.findAll({ offset: Number((page * limit) - limit), limit: limit })

  response.render('users/listUsers', { users, lastpage, page, search: '' })
}

const formUsers = (request, response) =>{
  response.render('users/formUsers')
}

module.exports = {
  listUsers,
  formUsers
}
