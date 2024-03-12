// Toggle Class Active 
const navbarNav = document.querySelector('.nav-nav');

// ketika ham-menu di klik 
document.querySelector('#ham-menu').onclick = () => {
    navbarNav.classList.toggle('active')
};


// bagian About 

const tlinks = document.getElementsByClassName("tlinks");
const tcontents = document.getElementsByClassName("tcontents");

function taBuka(tname){
  for(tlink of tlinks){
    tlink.classList.remove("active-link");
  }
  for(tcontent of tcontents){
    tcontent.classList.remove("active-content");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tname).classList.add("active-content")
}
