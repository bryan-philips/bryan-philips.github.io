// Toggle Class Active 
const navbarNav = document.querySelector('.nav-nav');

// ketika ham-menu di klik 
document.querySelector('#ham-menu').onclick = () => {
    navbarNav.classList.toggle('active')
};


const ham = document.querySelector('#ham-menu');

ham.addEventListener('click', function(e){
    e.preventDefault();
});


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

// efek scrolling 
  // bagian jumbotron profile
  let profile = document.querySelector('.profile');

  window.addEventListener('scroll', () => {
    let nilaiY = window.scrollY;

    profile.style.right = nilaiY * -0.5 + 'px';
  });

// bagian contact 
const form = document.querySelector('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const hp = document.getElementById('hp');
const topic = document.getElementById('topic');
const comment = document.getElementById('comment');









