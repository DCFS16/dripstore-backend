const bcrypt = require('bcrypt')
const { User } = require('../../models/User')
const { validationResult } = require('express-validator')

const saltRounds = 10

const list = async (request, response) => {
  const users = await User.findAll()

  response.json({ users })
}

const create = async (request, response) => {
  const { password } = request.body
  const errors = validationResult(request)

  if (!errors.isEmpty()) {
    return response.status(422).json({
      success: false,
      errors: errors.array(),
    })
  }

  const salt = await bcrypt.genSalt(saltRounds)
  const hash = await bcrypt.hash(password, salt)

  const user = User.build({
    ...request.body,
    password: hash,
    salt,
  })

  await user.save()

  response.status(201)
  response.json({ user })
}

module.exports = {
  list,
  create,
}
