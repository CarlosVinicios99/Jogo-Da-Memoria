import React, { useState } from 'react'
import Board from './Board'


const shuffleArray = (array) => {
  let j = 0

  for (let i = array.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1))
    if (array[i] && array[j]) {
      [array[i], array[j]] = [array[j], array[i]]
    }
  }

  return array
}

const generateCards = () => {
  const values = ["A", "B", "C", "D", "E", "F", "G", "H"]

  const cards = values.map((value) => ({
    value,
    isFlip: false,
  }))

  const duplicatedCards = cards
    .concat([...cards])
    .map((card, index) => ({ ...card, index }))

  return shuffleArray(duplicatedCards)
}


generateCards()

const Game = () => {

  const [cards, setCards] = useState(generateCards())

  const [flippedCards, setFlippedCards] = useState([])

  const [chances, setChances] = useState(6)

  const result = cards.filter((card) => card.isFlipped).length

  return (
    <div className="game">
        <Board cards={cards}/>
        {chances === 0 ? (<p>Suas tentativas acabaram!</p>)
        : result === cards.length 
        ? (<h2>Parabéns, você ganhou!</h2>)
        : (<p>Você possuí {chances} tentativas</p>)
        }
        <button className="btn">Reiniciar o jogo</button>
    </div>
  )
}

export default Game