let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let cardEl = document.getElementById("card-el")
let sumEl = document.getElementById("sum-el")
let standEl = document.getElementById("stand-el")
let dealersHandEl = document.getElementById("dealers-hand-el")
let startBttn = document.querySelector("#start-bttn")

function startGame() {
    isAlive = true
    let firstCard = getCard()
    let secondCard = getCard()
    cards.push(firstCard, secondCard)
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardEl.textContent = "Cards: "
    for (i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Your hand: " + sum
    if(sum <= 20){
        message = "Would you like to draw another card?"
    } else if (sum === 21) {
        message = "WOOHOO BLACKJACK!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
    startBttn.parentElement.removeChild(startBttn)

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
    if(isAlive === true && hasBlackJack === false) {
        let card = getCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}

function standCards() {
    if(isAlive === true && hasBlackJack === false) {
        let dealersHand = Math.floor( Math.random() * 21) + 1
        let usersHand = sum

        if(dealersHand === usersHand) {
            message = "It's a draw!"
            isAlive = false
        } else if (dealersHand > 21 || dealersHand < usersHand) {
            message = "You won!"
            hasBlackJack = true
        } else if (dealersHand > usersHand) {
            message = "You lost!"
            isAlive = false
        }
        messageEl.textContent = message
        dealersHandEl.textContent = "Dealers hand: " + dealersHand
    }
}