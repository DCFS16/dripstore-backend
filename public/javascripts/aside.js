const dropdowns = document.querySelectorAll('.dropdown-item')

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener('click', () => {
    dropdown
      .classList.toggle('sub-menu-visible')
  })
})
