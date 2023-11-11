const homeController = (request, response) => {
  response.render('index', { title: 'Express' })
}

const aboutController = (request, response) => {
  response.render('index', { title: 'About' })
}

module.exports = {
  homeController,
  aboutController,
}
