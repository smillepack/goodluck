
console.log('index.js work')
if ('serviceWorker' in navigator) {
    console.log('serviceWorker in navigator')
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/sw.js')
            .then((registration) => {
                // Registration was successful
                console.log('ServiceWorker registration successful with scope: ', registration.scope)
            }), (err) => {
                // registration failed 
                console.log('sw failed: ', err)
            }
    })
} else {
    console.log('sirvice worker no in navigator')
}