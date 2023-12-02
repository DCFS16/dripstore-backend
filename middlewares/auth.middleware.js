const jwt = require('jsonwebtoken')

const checkAuth = (request, response, next) => {
  const { token } = request.cookies

  try {
    const decode = jwt.verify(token, process.env.JWT_PRIVATE_KEY)

    if (decode.email) {
      next()
    } else {
      throw new Error('Unauthorized user')
    }
  } catch {
    response.redirect('/login')
  }
}

module.exports = {
  checkAuth,
}
