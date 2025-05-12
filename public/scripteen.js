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

   const loadingState = document.querySelector(".loading-state")    // na het submitten van het formulier wordt de class .loading-state geactiveerd
    loadingState.classList.add("show")                              // je ziet dat er een laad icoon, oftwel de loading state, in beeld komt
    loadingState.classList.remove("hide")                           // deze geeft feedback dat je submit aan het laden is om toegevoegd te worden.
                                                                    // dit is fijne feedback als je internet bijvoorbeeld trager is, dat je weet 
   let formData = new FormData(postForm)                            // dat je wel weet dat wat je gedaan hebt werkt, maar het gewoon wat trager is.
                                                                    // de loading state komt pas tevoorschijn na het submitten en wordt ook weer 
    const response = await fetch(postForm.action, {                 // verwijderd. zo zie je hem niet nog staan als je het formulier voor de 2e keer opent.
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





