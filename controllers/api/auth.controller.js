const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const { User } = require('../../models/User')

const login = async (request, response) => {
  const user = await User.findOne({
    where: {
      email: request.body.email.trim(),
    },
  })

  const isPasswordRight = user && await bcrypt.compare(
    request.body.password,
    user.password,
  )

  if (isPasswordRight) {
    const token = jwt.sign({ email: user.email }, process.env.JWT_PRIVATE_KEY)

    response.cookie('token', token)
    response.json({
      jwt: token,
    })
  } else {
    response.status(401)
    response.json({
      message: 'Verifique e-mail e senha e tente novamente',
    })
  }
}

module.exports = {
  login,
}
