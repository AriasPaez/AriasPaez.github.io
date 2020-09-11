
const hideButton = document.getElementById('hide-modal')
const modal = document.getElementById('modal')
const overlay = document.getElementById('overlay')

hideButton.addEventListener('click', (event) => {
    modal.style.animation = 'modalOut .8s forwards'
    overlay.classList.remove('active')
    // overlay.classList.add('active')
})
overlay.addEventListener('click', (event) => {
    if(event.target === overlay){
        modal.style.animation = 'modalOut .8s forwards'
    overlay.classList.remove('active')
    }
})
