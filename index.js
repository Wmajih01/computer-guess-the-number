const MAX_NUMBER = 100
const MIN_NUMBER = 0

let guess
let minGuess = 0
let maxGuess = 0

document.getElementById('too-high-btn').addEventListener('click', function () {
    maxGuess = guess
    guess = Math.floor((maxGuess + minGuess) / 2)
    setMessage(`Is it ${guess}?`)
})

document.getElementById('too-low-btn').addEventListener('click', function () {
    minGuess = guess
    guess = Math.floor((maxGuess + minGuess) / 2)
    setMessage(`Is it ${guess}?`)
})

document.getElementById('is-correct-btn').addEventListener('click', function () {
setMessage("Woho! :)")
})


function setMessage(msg) {
    document.getElementById('message').innerText = msg
}

function start() {
    document.getElementById('before-start').style.display = 'none'
    document.querySelector('main').style.display = 'block'

    guess = 100

    setMessage(`Is it ${guess}?`)
}

document
    .getElementById('start-btn')
    .addEventListener('click', start)