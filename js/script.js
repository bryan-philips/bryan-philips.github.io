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
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const hp = document.getElementById("hp");
const subject = document.getElementById("topic");
const mess = document.getElementById("comment");

function sendEmail() {
  const bodyMessage = `Full Name: ${fullName.value}${fullName.value} <br> Email: ${email.value}<br> Hp: ${hp.value}<br> Message: ${mess.value}`;
  
    Email.send({
        SecureToken : "a280b68b-d12c-4fac-a8df-93b4ac11875tes",
        To : 'philipus.bryanrahail@gmail.com',
        From : "philipus.bryanrahail@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => alert(message)
    );
}

form.addEventListener("submit",(e) => {
    e.preventDefault();

    sendEmail();
})

















