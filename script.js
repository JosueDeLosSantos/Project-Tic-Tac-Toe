
/* Tic-Tac-Toe GAME*/

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
const restartb = document.querySelectorAll('.restartb')
const restart = document.querySelector('#restart')
const finalMessage = document.querySelector('.finalMessage')
const draw = document.querySelector('.draw')

start.addEventListener('click', function showChoices(){
  welcome.hidden = true
  form.hidden = false
})

continueb.addEventListener('click', function showBoard(e){
  //Whatever is inside each input will be the their attribute value 
  e.target.parentNode.parentNode.children[1].dataset.value = playerX.value
  e.target.parentNode.parentNode.children[2].dataset.value = playerO.value
  form.hidden = true
  startingPlayers.hidden = false
})

choice.forEach(choice => choice.addEventListener('click', function showForm(e){
  //Whatever is inside each div's innerText will be the their attribute value 
  e.target.parentNode.parentNode.dataset.choice = e.target.innerText
  startingPlayers.hidden = true
  gameboardSection.hidden = false
}))

//Players factory function
const playerFactory = (marker) => {
  return{marker}
}

//the player$Name functions return the content of each input dataset value
const player1Name = () => {return window.document.body.children[2].children[0].children[0].children[1].dataset.value}
const player2Name = () => {return window.document.body.children[2].children[0].children[0].children[2].dataset.value}
const player1 = playerFactory('x')
const player2 = playerFactory('o')

//Gameboard module
const Gameboard = (() => {
/*this module saves an argument at a given index position inside the array below*/
  let arr = []
  const player = (item, index) => {
    if(item == 'x'){
    arr[index] = item 
    //the code below keeps the array from adding aditional spots
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
    
    if (board[0] =='x' && board[1] =='x' && board[2] =='x') {
      gameboardSection.hidden = true
      restart.hidden = false
      finalMessage.children[0].innerText = `${player1Name()}` + ' is the winner'
      
    }
    if (board[3] =='x' && board[4] =='x' && board[5] =='x') {
      gameboardSection.hidden = true
      restart.hidden = false
      finalMessage.children[0].innerText = `${player1Name()}` + ' is the winner'
    }
    if (board[6] =='x' && board[7] =='x' && board[8] =='x') {
      gameboardSection.hidden = true
      restart.hidden = false
      finalMessage.children[0].innerText = `${player1Name()}` + ' is the winner'
    }
    if (board[0] =='x' && board[3] =='x' && board[6] =='x') {
      gameboardSection.hidden = true
      restart.hidden = false
      finalMessage.children[0].innerText = `${player1Name()}` + ' is the winner'
    }
    if (board[1] =='x' && board[4] =='x' && board[7] =='x') {
      gameboardSection.hidden = true
      restart.hidden = false
      finalMessage.children[0].innerText = `${player1Name()}` + ' is the winner'
    }
    if (board[2] =='x' && board[5] =='x' && board[8] =='x') {
      gameboardSection.hidden = true
      restart.hidden = false
      finalMessage.children[0].innerText = `${player1Name()}` + ' is the winner'
    }
    if (board[0] =='x' && board[4] =='x' && board[8] =='x') {
      gameboardSection.hidden = true
      restart.hidden = false
      finalMessage.children[0].innerText = `${player1Name()}` + ' is the winner'
    }
    if (board[2] =='x' && board[4] =='x' && board[6] =='x') {
      gameboardSection.hidden = true
      restart.hidden = false
      finalMessage.children[0].innerText = `${player1Name()}` + ' is the winner'
    }

    if (board[0] =='o' && board[1] =='o' && board[2] =='o') {
      gameboardSection.hidden = true
      restart.hidden = false
      finalMessage.children[0].innerText = `${player2Name()}` + ' is the winner'
    }
    if (board[3] =='o' && board[4] =='o' && board[5] =='o') {
      gameboardSection.hidden = true
      restart.hidden = false
      finalMessage.children[0].innerText = `${player2Name()}` + ' is the winner'
    }
    if (board[6] =='o' && board[7] =='o' && board[8] =='o') {
      gameboardSection.hidden = true
      restart.hidden = false
      finalMessage.children[0].innerText = `${player2Name()}` + ' is the winner'
    }
    if (board[0] =='o' && board[3] =='o' && board[6] =='o') {
      gameboardSection.hidden = true
      restart.hidden = false
      finalMessage.children[0].innerText = `${player2Name()}` + ' is the winner'
    }
    if (board[1] =='o' && board[4] =='o' && board[7] =='o') {
      gameboardSection.hidden = true
      restart.hidden = false
      finalMessage.children[0].innerText = `${player2Name()}` + ' is the winner'
    }
    if (board[2] =='o' && board[5] =='o' && board[8] =='o') {
      gameboardSection.hidden = true
      restart.hidden = false
      finalMessage.children[0].innerText = `${player2Name()}` + ' is the winner'
    }
    if (board[0] =='o' && board[4] =='o' && board[8] =='o') {
      gameboardSection.hidden = true
      restart.hidden = false
      finalMessage.children[0].innerText = `${player2Name()}` + ' is the winner'
    }
    if (board[2] =='o' && board[4] =='o' && board[6] =='o') {
      gameboardSection.hidden = true
      restart.hidden = false
      finalMessage.children[0].innerText = `${player2Name()}` + ' is the winner'
    }

    if(board[0] && board[1] && board[2] && board[3] && board[4] && board[5] && board[6] && board[7] && board[8]){
      draw.hidden = false
    }

  }

  return {controller}

})()

let toggle = 0

function show(e) {
  //the line below targets the starting player marker
  const marker = e.target.parentNode.parentNode.parentNode.children[1].dataset.choice

  if (marker == 'X'){

    let boxId = e.target.id
    //the line below keeps players from playing in spots that are already taken
    if (e.target.hasAttribute('data-marker')) return
    toggle++

    if(toggle == 1) {
      Gameboard.player(player1.marker, boxId)
      displayController.controller(Gameboard.player(player1.marker, boxId))
      e.target.dataset.marker = player1.marker
      e.target.innerText = player1.marker
    }

    if (toggle == 2) {
      Gameboard.player(player2.marker, boxId)
      displayController.controller(Gameboard.player(player2.marker, boxId))
      e.target.dataset.marker = player2.marker
      e.target.innerText = player2.marker
      toggle = 0
    }
  }

  if (marker == 'O'){

    let boxId = e.target.id
    //the line below keeps players from playing in spots that are already taken
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

restartb.forEach(element => element.addEventListener('click', function showRestart(){
  location.reload()
}))