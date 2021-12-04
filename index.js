let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let cardEl = document.getElementById("card-el")
let sumEl = document.getElementById("sum-el")

function startGame() {
    isAlive = true
    let firstCard = getCard()
    let secondCard = getCard()
    cards.push(firstCard, secondCard)
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    for (i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
}

function getCard() {
    let randomNumber = Math.floor( Math.random() * 13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function newCard() {
    let card = getCard()
    sum += card
    cards.push(card)
    renderGame()
}