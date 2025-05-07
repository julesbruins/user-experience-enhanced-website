// POST progressive enhanced
document.documentElement.classList.add("js");

const scrolldownButton = document.querySelector(".post-button");
const closeButton = document.querySelector('[type="button"]');
const form = document.querySelector("form");


scrolldownButton.addEventListener("click", toggleForm);
closeButton.addEventListener("click", toggleForm);
// form.addEventListener("click", toggleForm);
window.addEventListener("keyup", handleKeyup);


function handleKeyup(event) {
  if (event.code == "Escape") {
    form.classList.remove("is-visible");
  }
}

function toggleForm(event) {
  event.preventDefault();
  
  form.classList.toggle("is-visible");
}



// CLIENT SIDE FETCH
const button = document.querySelector(".post-btn")
const postForm = document.querySelector("#post-form")


button.addEventListener("click", async function(event) {
   event.preventDefault()

   const loadingState = document.querySelector(".loading-state")
    loadingState.classList.add("show")
    loadingState.classList.remove("hide")
    

   let formData = new FormData(postForm)

    const response = await fetch(postForm.action, {
        method: postForm.method,
        body: new URLSearchParams(formData)
      })
    
    const responseText = await response.text()
    const parser = new DOMParser()
    const responseDOM = parser.parseFromString(responseText, 'text/html')

    const newMessage = responseDOM.querySelector("main article:last-of-type")
    const lastMessage = document.querySelector("main article:last-of-type")

    lastMessage.after(newMessage)
    form.classList.toggle("is-visible");

    const formNameField = document.querySelector("form input")
    const formMessageField = document.querySelector("form textarea")

    formNameField.value = ""
    formMessageField.value = ""
    
    loadingState.classList.remove("show")

    const succesMessage = document.querySelector(".succes-message")
    succesMessage.classList.add("show")

    setTimeout(() => {
        succesMessage.classList.remove("show");
    }, 2400);
})





