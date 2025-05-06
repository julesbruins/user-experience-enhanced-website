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



// CLIENT SIDE FETCH
const button = document.querySelector(".post-btn")
const postForm = document.querySelector("#post-form")


button.addEventListener("click", async function(event) {
   event.preventDefault()

   let formData = new FormData(postForm)
   console.log("formData", formData)

    const response = await fetch(postForm.action, {
        method: postForm.method,
        body: new URLSearchParams(formData)
      })
    
    const responseText = await response.text()
    console.log("responseText", responseText)

    const parser = new DOMParser()
    const responseDOM = parser.parseFromString(responseText, 'text/html')
    console.log("responseDOM", responseDOM)

    const newMessage = responseDOM.querySelector("main article:last-of-type")
    console.log("new message", newMessage)
    const lastMessage = document.querySelector("main article:last-of-type")
    console.log("lastmessage", lastMessage)
    lastMessage.after(newMessage)
    form.classList.toggle("is-visible");

    const formNameField = document.querySelector("form input")
    const formMessageField = document.querySelector("form textarea")

    formNameField.value = ""
    formMessageField.value = ""

})





