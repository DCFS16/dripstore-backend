const productlist = document.querySelector('#product');
const subList = document.querySelector("#sub-list");
const arrow = document.querySelector("#dropdown-arrow");

productlist.addEventListener('click', (e) => {

    e.preventDefault();
    subList.classList.toggle("sub-menu-visible");
    arrow.classList.toggle("arrow-rotate");

})
