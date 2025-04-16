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



