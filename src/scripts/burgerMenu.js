const button = document.querySelector('.burgerMenu')
const burgerContent = document.querySelector('.navbarContainer')

button.addEventListener('click', () => burgerContent.classList.toggle('disNone'))
