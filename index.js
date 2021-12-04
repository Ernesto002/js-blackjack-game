let cards = []
let dealersCards = []
let dealersSum = 0
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let cardEl = document.getElementById("card-el")
let sumEl = document.getElementById("sum-el")
let standEl = document.getElementById("stand-el")
let dealersHandEl = document.getElementById("dealers-hand-el")
let dealersSumEl = document.getElementById("dealers-sum-el")
let startBttn = document.querySelector("#start-bttn")

function startGame() {
    isAlive = true
    let firstCard = getCard()
    let secondCard = getCard()
    cards.push(firstCard, secondCard)
    sum = firstCard + secondCard
    let dealersFirstCard = getCard()
    let dealersSecondCard = getCard()
    dealersCards.push(dealersFirstCard, dealersSecondCard)
    dealersSum = dealersFirstCard + dealersSecondCard
    startBttn.parentElement.removeChild(startBttn)
    renderGame()
}

function renderGame() {
    cardEl.textContent = "Your Cards: "
    for (i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }

    dealersHandEl.textContent = "Dealers Cards: "
    for (i = 0; i < dealersCards.length; i++) {
        dealersHandEl.textContent += dealersCards[i] + " "
    }

    sumEl.textContent = "Your hand: " + sum
    dealersSumEl.textContent = "Dealers Hand: " + dealersSum
    if(sum <= 20){
        message = "Would you like to draw another card?"
    } else if (sum === 21 || dealersSum > 21) {
        message = "You won!"
        hasBlackJack = true
    } else if (sum > 21 && dealersSum > 21) {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function standCards() {
    if(isAlive === true && hasBlackJack === false) {
        if(dealersSum === sum) {
            message = "It's a draw!"
            isAlive = false
        } else if (dealersSum > 21 || dealersSum < sum) {
            message = "You won!"
            hasBlackJack = true
        } else if (dealersSum > sum) {
            message = "You lost!"
            isAlive = false
        }
        messageEl.textContent = message
    }
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
        let dealersNewCard = getCard()
        dealersSum += dealersNewCard
        dealersCards.push(dealersNewCard)
        renderGame()
    }
}
