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
  // bagian jumbotron profile, navbar
  let profile = document.querySelector('.profile');
  let navbar  = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    let nilaiY = window.scrollY;

    profile.style.right = nilaiY * -0.5 + 'px';
    

    if (nilaiY > 0) {
      navbar.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    }
    else {
      navbar.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
    }
  });

  // bagian reveal projects
  let containProjects = document.querySelector('.contain-projects');  
  window.addEventListener('scroll', () => { 
    let porto = document.querySelector('.project');
    let windowh = window.innerHeight;
    let rev = porto.getBoundingClientRect().top;
    const point = 500;

    if(rev < windowh - point){
        containProjects.style.transform = "translate(0,0)";
        containProjects.style.opacity = "1";    
    }
    else {
        containProjects.style.transform = "translate(0,-40px)";
        containProjects.style.opacity = "0";
    }
  });

// let containProjects = document.querySelector('.contain-projects');
// window.addEventListener('scroll', reveal);

// function reveal(){
//   let porto = document.querySelector('.project');
//   let windowh = window.innerHeight;
//   let rev = porto.getBoundingClientRect().top;
//   const point = 500;

//   if(rev < windowh - point){
//       containProjects.style.transform = "translate(0,0)";
//       containProjects.style.opacity = "1";    
//   }
//   else {
//       containProjects.style.transform = "translate(0,-40px)";
//       containProjects.style.opacity = "0";
//   }
// }





// bagian contact 
const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const hp = document.getElementById("hp");
const subject = document.getElementById("topic");
const mess = document.getElementById("comment");

function sendEmail() {
  const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Hp: ${hp.value}<br> Message: ${mess.value}`;
  
    Email.send({
        SecureToken : "a280b68b-d12c-4fac-a8df-93b4ac11875a",
        To : 'philipus.bryanrahail@gmail.com',
        From : "philipus.bryanrahail@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK") {
          Swal.fire({
              title: "Succes!",
              text: "Message sent Successfully!",
              icon: "success"
          });
        }
      }
    );
}

function cekinputs(){
  const isies = document.querySelectorAll(".isi");
  for (const isi of isies) {
    if (isi.value == "") {
      isi.classList.add("error");
      isi.parentElement.classList.add("error");
    }

    if (isies[1].value != ""){
      cekEmail();
    }

    isies[1].addEventListener("keyup", () => {
      cekEmail();
    });

    isi.addEventListener("keyup", () => {
      if (isi.value != ""){
        isi.classList.remove("error");
        isi.parentElement.classList.remove("error");
      }
      else {
        isi.classList.add("error");
        isi.parentElement.classList.add("error");
      }

    });
  }
}

function cekEmail() {
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

  const textErrorEmail = document.querySelector(".textError.email")


  if (!email.value.match(emailRegex)){
      email.classList.add("error");
      email.parentElement.classList.add("error");

      if (email.value != "") {
        textErrorEmail.innerText = "Enter a valid Email";
      }

      else {
        textErrorEmail.innerText = "Email must be filled in";
      }
  }

  else {
      email.classList.remove("error");
      email.parentElement.classList.remove("error");
  }
}



form.addEventListener("submit",(e) => {
    e.preventDefault();
    cekinputs();

    if (!fullName.classList.contains("error") && !email.classList.contains("error") && !hp.classList.contains("error") && !subject.classList.contains("error") && !mess.classList.contains("error")){
      sendEmail();
      form.reset();
      return false;
    }
    
})



















