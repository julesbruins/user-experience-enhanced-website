// document.addEventListener("DOMContentLoaded", function() {
//     const successMessage = document.querySelector(".succes-message");
 
//     if (successMessage) {
//         setTimeout(() => {
//             successMessage.classList.add('show');
//         }, 4);
 
//         setTimeout(() => {
//             successMessage.classList.add('fade-out');
//         }, 2400);
//     }

//     const openButton = document.querySelector('.open-button')
//     console.log("openButton",openButton);
//     const container = document.querySelector('.nav-container')

//     openButton.addEventListener('click', () => {
//     container.classList.toggle('active')
// })
// });


// POST progressive enhanced
document.documentElement.classList.add("js");

const scrolldownButton = document.querySelector(".post-button");
console.log(scrolldownButton);

const closeButton = document.querySelector('[type="button"]');
const form = document.querySelector("form");


scrolldownButton.addEventListener("click", toggleForm);
closeButton.addEventListener("click", toggleForm);
// form.addEventListener("click", toggleForm);
window.addEventListener("keyup", handleKeyup);


function handleKeyup(event) {
    console.log("handleKeyup")

  if (event.code == "Escape") {
    form.classList.remove("is-visible");
  }
}

function toggleForm(event) {
    console.log("toggleForm")

  event.preventDefault();
  console.log("is-visible")
  
  form.classList.toggle("is-visible");
}


