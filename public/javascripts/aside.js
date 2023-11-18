const dropdowns = document.querySelectorAll('.dropdown-item')

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener('click', (event) => {
    event.preventDefault()
    dropdown
      .classList.toggle('sub-menu-visible')
  })
})
