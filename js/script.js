// Toggle Class Active 
const navbarNav = document.querySelector('.nav-nav');

// ketika ham-menu di klik 
document.querySelector('#ham-menu').onclick = () => {
    navbarNav.classList.toggle('active')
};