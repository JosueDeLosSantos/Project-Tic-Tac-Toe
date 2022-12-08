


const clicker = document.querySelectorAll('.box')
const data = document.querySelectorAll('[data-box-number]')




const Gameboard = (() => {
  let arr = []
  const player = (item, index) => {
    if(item == 'x'){
    arr[index] = item 
    arr.splice(9, 1)
    console.log(arr)
    } else if(item == 'o'){
      arr[index] = item 
      arr.splice(9, 1)
      console.log(arr)
      }
  }
  return {player}
})()

const playerFactory = (selection, index) => {
  const announcement = () => console.log(selection + ' is the winner!')
  return{selection, index, announcement}
}

let toggle = 0

function show(e) {
  let boxId = e.target.id
  let player1 = playerFactory('x', boxId)
  let player2 = playerFactory('o', boxId)
  toggle++

  if(toggle == 1) {
    Gameboard.player(player1.selection, boxId)
    e.target.dataset.boxNumber = player1.selection
    e.target.innerText = player1.selection
  }
  if (toggle == 2) {
    Gameboard.player(player2.selection, boxId)
    e.target.dataset.boxNumber = player2.selection
    e.target.innerText = player2.selection
    toggle = 0
  }
  
  console.log(window.document.body.children[0])
  
}

clicker.forEach(element => element.addEventListener('click', show))








