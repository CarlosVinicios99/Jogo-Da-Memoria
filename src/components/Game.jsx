import React from 'react'
import Board from './Board'


const shuffleArray = (array) => {

}

const generateCards = () => {
  const values = ["A", "B", "C", "D", "E", "F", "G", "H"]

  const cards = values.map((value) => ({
    value,
    isFlip: false
  }))

  const duplicatedCards = cards.concat([...cards]).map((card, index) => ({...card, index}))

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