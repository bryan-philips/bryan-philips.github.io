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
// const form = document.querySelector('form');
// const name = document.getElementById('name');
// const email = document.getElementById('email');
// const hp = document.getElementById('hp');
// const topic = document.getElementById('topic');
// const comment = document.getElementById('comment');

// function sendMessage() {
//   const messageitem = `Full Name: ${nem.value} <br> Email: ${email.value}<br> Phone Number: ${hp.value}<br> Comment: ${comment.value}`;

//   Email.send({
//     Host : "smtp.elasticemail.com",
//     Username : "philipus.bryanrahail@gmail.com",
//     Password : "8566553A8DEF4D9874652F85C4E461E59B50",
//     To : 'philipus.bryanrahail@gmail.com',
//     From : "philipus.bryanrahail@gmail.com",
//     Subject : topic.value,
//     Body : messageitem
//   }).then(
//   message => alert(message)
//   );
// }

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   sendMessage();
// });

const form =document.querySelector('form');

function sendEmail() {
    Email.send({
        SecureToken : "a280b68b-d12c-4fac-a8df-93b4ac11875test",
        To : 'philipus.bryanrahail@gmail.com',
        From : "philipus.bryanrahail@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}

form.addEventListener("submit",(e) => {
    e.preventDefault();

    sendEmail();
})

















