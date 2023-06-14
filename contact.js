const scriptURL = 'https://script.google.com/macros/s/AKfycbzl5D9R-8p6Dnt40v6L0PC_HQwQ-9nFyZZX01OnYjCvPhk4L2HtFR2dxMMStuQnrlxfQA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
     fetch(scriptURL, {
            method: 'POST',
                body: new FormData(form)
            })
            .then(response => {
                msg.innerHTML = "Message sent successfully"
                setTimeout(function() {
                     msg.innerHTML = ""
                }, 5000)
                 form.reset()
            })
    .catch(error => console.error('Error!', error.message))
 })