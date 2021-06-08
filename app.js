const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');

const mobileMenu = () =>{
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

//---------------------------------//

const seeAll = document.querySelector('.desktop-see-all');
const seeAllMobile = document.querySelector('.mobile-see-all');
const toggleCards = document.querySelector('#cards-toggle');

const showCards = () =>{
  seeAll.classList.toggle('see-active');
  toggleCards.classList.toggle('cards-active');
};

seeAll.addEventListener('click', showCards);

seeAllMobile.addEventListener('click', showCards);