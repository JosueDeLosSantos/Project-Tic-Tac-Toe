


const clicker = document.querySelectorAll('.box')
const data = document.querySelectorAll('[data-box-number]')


//Players factory function
const playerFactory = (selection, index) => {
  const announcement = () => console.log(selection + ' is the winner!')
  return{selection, index, announcement}
}

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
    
    if (board[0] =='x' && board[1] =='x' && board[2] =='x') player1.announcement()
    if (board[3] =='x' && board[4] =='x' && board[5] =='x') player1.announcement()
    if (board[6] =='x' && board[7] =='x' && board[8] =='x') player1.announcement()
    if (board[0] =='x' && board[3] =='x' && board[6] =='x') player1.announcement()
    if (board[1] =='x' && board[4] =='x' && board[7] =='x') player1.announcement()
    if (board[2] =='x' && board[5] =='x' && board[8] =='x') player1.announcement()
    if (board[0] =='x' && board[4] =='x' && board[8] =='x') player1.announcement()
    if (board[2] =='x' && board[4] =='x' && board[6] =='x') player1.announcement()

    if (board[0] =='o' && board[1] =='o' && board[2] =='o') player2.announcement()
    if (board[3] =='o' && board[4] =='o' && board[5] =='o') player2.announcement()
    if (board[6] =='o' && board[7] =='o' && board[8] =='o') player2.announcement()
    if (board[0] =='o' && board[3] =='o' && board[6] =='o') player2.announcement()
    if (board[1] =='o' && board[4] =='o' && board[7] =='o') player2.announcement()
    if (board[2] =='o' && board[5] =='o' && board[8] =='o') player2.announcement()
    if (board[0] =='o' && board[4] =='o' && board[8] =='o') player2.announcement()
    if (board[2] =='o' && board[4] =='o' && board[6] =='o') player2.announcement()
  }

  return {controller}

})()

let toggle = 0

function show(e) {

  let boxId = e.target.id
  if (e.target.hasAttribute('data-marker')) return
  toggle++

  if(toggle == 1) {
    Gameboard.player(player1.selection, boxId)
    displayController.controller(Gameboard.player(player1.selection, boxId))
    e.target.dataset.marker = player1.selection
    e.target.innerText = player1.selection
  }

  if (toggle == 2) {
    Gameboard.player(player2.selection, boxId)
    displayController.controller(Gameboard.player(player2.selection, boxId))
    e.target.dataset.marker = player2.selection
    e.target.innerText = player2.selection
    toggle = 0
  }
  
}

clicker.forEach(element => element.addEventListener('click', show))






