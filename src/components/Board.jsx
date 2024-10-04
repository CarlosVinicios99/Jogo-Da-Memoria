import React from 'react'
import Card from './Card'

const Board = ({cards, onCardClick}) => {
  return (
    <div className="board">
        {
          cards.map((card) => (
            <Card key={card.index} card={card} onClick={onCardClick}/>
          ))
        }
    </div>
  )
}

export default Board