console.log('---- Test PWA ----')

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/service-worker.js')
  })
}

function setFetchResponseText (text) {
  document.getElementById('fetch-response').innerText = text
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
  const response = await fetch('/road/to/nowhere')
  // const json = response.json()
  // if (json.status === '') {
    // setFetchResponseText(json.status)
  // } else
})
