

// const body = document.querySelector('body')
const welcome = document.querySelector('#welcome')
const form = document.querySelector('#form')
const continueb = document.querySelector('.continue')
const clicker = document.querySelectorAll('.box')
const start = document.querySelector('.startb')
const gameboardSection = document.querySelector('#gameboard')
const startingPlayers = document.querySelector('#starting-player')
const choice = document.querySelectorAll('.choice')
const playerX = document.querySelector('#player-x')
const playerO = document.querySelector('#player-o')



start.addEventListener('click', function showChoices(){
  welcome.hidden = true
  form.hidden = false
})

choice.forEach(choice => choice.addEventListener('click', function showForm(e){
  e.target.parentNode.parentNode.dataset.choice = e.target.innerText
  startingPlayers.hidden = true
  gameboardSection.hidden = false
}))


continueb.addEventListener('click', function showBoard(e){
  e.target.parentNode.parentNode.children[1].dataset.value = playerX.value
  e.target.parentNode.parentNode.children[2].dataset.value = playerO.value
  form.hidden = true
  startingPlayers.hidden = false
})

//Players factory function
const playerFactory = (marker) => {
  const announcement = (arg) => console.log(arg + ' is the winner!')
  return{marker, announcement}
}

const player1Name = () => {return window.document.body.children[2].children[0].children[0].children[1].dataset.value}
const player2Name = () => {return window.document.body.children[2].children[0].children[0].children[2].dataset.value}
const player1 = playerFactory('x')
const player2 = playerFactory('o')

//Gameboard module
const Gameboard = (() => {
  let arr = []
  const player = (item, index) => {
    if(item == 'x'){
    arr[index] = item 
    arr.splice(9, 1)
    return arr
    } else if(item == 'o'){
      arr[index] = item 
      arr.splice(9, 1)
      return arr
      }
  }
  return {player}
})()

//Display controller's module
const displayController = (() => {

   const controller = (board) => {
    
    if (board[0] =='x' && board[1] =='x' && board[2] =='x') console.log(player1Name() + ' is the winner')
    if (board[3] =='x' && board[4] =='x' && board[5] =='x') console.log(player1Name() + ' is the winner')
    if (board[6] =='x' && board[7] =='x' && board[8] =='x') console.log(player1Name() + ' is the winner')
    if (board[0] =='x' && board[3] =='x' && board[6] =='x') console.log(player1Name() + ' is the winner')
    if (board[1] =='x' && board[4] =='x' && board[7] =='x') console.log(player1Name() + ' is the winner')
    if (board[2] =='x' && board[5] =='x' && board[8] =='x') console.log(player1Name() + ' is the winner')
    if (board[0] =='x' && board[4] =='x' && board[8] =='x') console.log(player1Name() + ' is the winner')
    if (board[2] =='x' && board[4] =='x' && board[6] =='x') console.log(player1Name() + ' is the winner')

    if (board[0] =='o' && board[1] =='o' && board[2] =='o') console.log(player2Name() + ' is the winner')
    if (board[3] =='o' && board[4] =='o' && board[5] =='o') console.log(player2Name() + ' is the winner')
    if (board[6] =='o' && board[7] =='o' && board[8] =='o') console.log(player2Name() + ' is the winner')
    if (board[0] =='o' && board[3] =='o' && board[6] =='o') console.log(player2Name() + ' is the winner')
    if (board[1] =='o' && board[4] =='o' && board[7] =='o') console.log(player2Name() + ' is the winner')
    if (board[2] =='o' && board[5] =='o' && board[8] =='o') console.log(player2Name() + ' is the winner')
    if (board[0] =='o' && board[4] =='o' && board[8] =='o') console.log(player2Name() + ' is the winner')
    if (board[2] =='o' && board[4] =='o' && board[6] =='o') console.log(player2Name() + ' is the winner')
  }

  return {controller}

})()

let toggle = 0

function show(e) {

  const marker = e.target.parentNode.parentNode.parentNode.children[1].dataset.choice

  if (marker == 'X'){

    let boxId = e.target.id
    if (e.target.hasAttribute('data-marker')) return
    toggle++

    if(toggle == 1) {
      Gameboard.player(player1.marker, boxId)
      displayController.controller(Gameboard.player(player1.marker, boxId))
      e.target.dataset.marker = player1.marker
      e.target.innerText = player1.marker
      console.log(player1.name)
    }

    if (toggle == 2) {
      Gameboard.player(player2.marker, boxId)
      displayController.controller(Gameboard.player(player2.marker, boxId))
      e.target.dataset.marker = player2.marker
      e.target.innerText = player2.marker
      toggle = 0
      console.log(player2.name)
    }

  }

  if (marker == 'O'){

    let boxId = e.target.id
    if (e.target.hasAttribute('data-marker')) return
    toggle++

    if(toggle == 2) {
      Gameboard.player(player1.marker, boxId)
      displayController.controller(Gameboard.player(player1.marker, boxId))
      e.target.dataset.marker = player1.marker
      e.target.innerText = player1.marker
      toggle = 0
    }

    if (toggle == 1) {
      Gameboard.player(player2.marker, boxId)
      displayController.controller(Gameboard.player(player2.marker, boxId))
      e.target.dataset.marker = player2.marker
      e.target.innerText = player2.marker
    }

  }
  
}

clicker.forEach(element => element.addEventListener('click', show))






