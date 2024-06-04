const cardArray = [
 { 
  name: 'watermelon',
  img: 'images/watermelon.jpeg',
 },
  { 
  name: 'cupcake',
  img: 'images/cupcake.jpeg',
 },
 { 
  name: 'Donut',
  img: 'images/Donut.jpeg',
 },
 { 
  name: 'pizza',
  img: 'images/pizza.jpeg',
 },
 { 
  name: 'sandwich',
  img: 'images/sandwich.jpeg',
 },
 { 
  name: 'sushi',
  img: 'images/sushi.jpeg',
 },

 { 
  name: 'watermelon',
  img: 'images/watermelon.jpeg',
 },
  { 
  name: 'cupcake',
  img: 'images/cupcake.jpeg',
 },
 { 
  name: 'Donut',
  img: 'images/Donut.jpeg',
 },
 { 
  name: 'pizza',
  img: 'images/pizza.jpeg',
 },
 { 
  name: 'sandwich',
  img: 'images/sandwich.jpeg',
 },
 { 
  name: 'sushi',
  img: 'images/sushi.jpeg',
 },
]
cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardChosen = []
let cardChosenIds = []
const cardsWon = []

function createBoard () {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img')
    card.setAttribute('src', 'images/Burger.jpeg')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
    gridDisplay.appendChild(card)
  }
}
createBoard()

function checkMatch() {
  const cards = document.querySelectorAll('img')
  const optionOneId = cardChosenIds[0]
  const optionTwoId = cardChosenIds[1]
  console.log(cards)
  console.log('check for match!')
  if (optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute('src', 'images/Burger.jpeg')
    cards[optionTwoId].setAttribute('src', 'images/Burger.jpeg')
    alert('You have clicked the same image!')
  }
  if (cardChosen[0] == cardChosen[1]) {
    alert('You found a match!') 
  cards[optionOneId].setAttribute('src', 'images/white.jpeg')
  cards[optionTwoId].setAttribute('src', 'images/white.jpeg')
  cards[optionOneId].removeEventListener('click', flipCard)  
  cards[optionTwoId].removeEventListener('click', flipCard)
  cardsWon.push(cardChosen)
} else {
  cards[optionOneId].setAttribute('src', 'images/Burger.jpeg')
  cards[optionTwoId].setAttribute('src', 'images/Burger.jpeg')
  alert('Sorry try again!')
}
resultDisplay.textContent = cardsWon.length
cardChosen = []
cardChosenIds = []

if (cardsWon.length == cardArray.length/2) {
  resultDisplay.textContent = 'Congratulations you found them all!'
}

}

function flipCard() {
const cardId = this.getAttribute('data-id')
cardChosen.push(cardArray[cardId].name)
cardChosenIds.push(cardId)
console.log(cardChosen)
console.log(cardChosenIds)
this.setAttribute('src', cardArray[cardId].img)
if (cardChosen.length === 2) {
setTimeout( checkMatch, 500)

}
}



