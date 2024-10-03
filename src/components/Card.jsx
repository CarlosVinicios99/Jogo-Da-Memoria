import React from 'react'

const Card = ({card}) => {
  return (
    <div className={`card ${card.isFlipped ? "flipped" : ""}`}>
      {card.isFlipped ? card.value : "?"}
    </div>
  )
}

export default Card