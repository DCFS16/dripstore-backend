const home = (request, response) => {
  response.redirect('/login')
}

const login = (request, response) => {
  response.cookie('token', '')
  response.render('auth/login')
}

const about = (request, response) => {
  response.render('index', { title: 'About' })
}

module.exports = {
  home,
  login,
  about,
}
