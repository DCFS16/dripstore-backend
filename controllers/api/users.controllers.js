const { User } = require('../../models/Users')

const listUsers = async (request, response) => {
  const users = await User.findAll()

  response.json({ users })
}

module.exports = {
  listUsers
}
