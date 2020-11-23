const video = document.querySelector('.videoTest')
const logoContainer = document.querySelector('.logoContainer')

document.addEventListener('load', () => {
    video.muted = true
    video.play()
})

video.addEventListener('ended', () => {
    video.classList.toggle('ds')
    logoContainer.classList.toggle('ds')
})