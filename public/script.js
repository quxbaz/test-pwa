console.log('---- Test PWA ----')

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/service-worker.js')
  })
}

function setResponseText (text) {
  document.getElementById('fetch-response').innerText = text
}

function flashBox () {
  const box = document.getElementById('response')
  box.classList.add('flash')
  setTimeout(() => box.classList.remove('flash'), 100)
}

/*
  Triggers a fetch request to a non-existing endpoint.

  Normally you would get a 404 response.

  However, service workers have the ability to intercept fetch events and
  provide an arbitrary Response.

  If the checkbox is disabled, the response should be a 404 error.

  If the checkbox is enabled, the service worker will intercept the fetch and
  provide a custom message.
*/
document.getElementById('fetch-button').addEventListener('click', async () => {
  flashBox()
  const response = await fetch('/road/to/nowhere')
  if (response.status === 404) {
    setResponseText(`${response.status} - ${response.statusText}`)
  } else {
    const json = await response.json()
    setResponseText(`${response.status} - ${response.statusText}. ${json.message}`)
  }
})

document.getElementById('toggle').addEventListener('change', (event) => {
  // console.log(event.target.checked)
  navigator.serviceWorker.controller.postMessage({
    type: 'MESSAGE_IDENTIFIER',
  })
})
