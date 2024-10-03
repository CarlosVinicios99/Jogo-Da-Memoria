import React from 'react'
import Board from './Board'


const shuffleArray = (array) => {

  for(let i = array.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1))
    [array[i], array[j]] = [array[j], array[i]]
  }

  return array

}

const generateCards = () => {
  const values = ["A", "B", "C", "D", "E", "F", "G", "H"]

  const cards = values.map((value) => ({
    value,
    isFlip: false
  }))

  const duplicatedCards = cards.concat([...cards]).map((card, index) => ({...card, index}))

  console.log(shuffleArray(duplicatedCards))
  console.log(cards)
}

generateCards()

const Game = () => {
  return (
    <div className="game">
        <Board/>
    </div>
  )
}

export default Game