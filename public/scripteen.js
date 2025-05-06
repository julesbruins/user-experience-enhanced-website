document.addEventListener("DOMContentLoaded", function() {
    const successMessage = document.querySelector(".succes-message");
 
    if (successMessage) {
        setTimeout(() => {
            successMessage.classList.add('show');
        }, 4);
 
        setTimeout(() => {
            successMessage.classList.add('fade-out');
        }, 2400);
    }

    const openButton = document.querySelector('.open-button')
    const container = document.querySelector('.nav-container')

    openButton.addEventListener('click', () => {
    container.classList.toggle('active')
})
});


// POST progressive enhanced
document.documentElement.classList.add("js");

const scrolldownButton = document.querySelector(".post-button");
console.log(scrolldownButton);

const closeButton = document.querySelector('[type="button"]');
const form = document.querySelector("form");


scrolldownButton.addEventListener("click", toggleForm);
form.addEventListener("click", toggleForm);
window.addEventListener("keyup", handleKeyup);


function handleKeyup(event) {
  if (event.code == "Escape") {
    form.classList.remove("is-visible");
  }
}

function toggleForm(event) {
  event.preventDefault();
  console.log("is-visible")
  
  form.classList.toggle("is-visible");
}


