console.log('---- Test PWA ----')

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/service-worker.js')
  })
}

document.getElementById('fetch-button').addEventListener('click', async () => {
  const response = await fetch('/road/to/nowhere')
  console.log(response)
})
