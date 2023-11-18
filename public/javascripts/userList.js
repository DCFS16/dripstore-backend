const userlist = document.querySelector('#user');
const subList = document.querySelector("#sub-list");
const arrow = document.querySelector("#dropdown-arrow");

userlist.addEventListener('click', (e) => {

  e.preventDefault();
  subList.classList.toggle("sub-menu-visible");
  arrow.classList.toggle("arrow-rotate");

})
