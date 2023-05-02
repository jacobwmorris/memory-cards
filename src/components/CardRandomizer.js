import Card from "./Card"

function CardRandomizer({cardList, isGameFinished, handleCardClick}) {
  const cardsRendered = shuffle(cardList).map((card) => {
    return <Card key={card.id} name={card.name} disabled={isGameFinished} onClick={handleCardClick}/>
  })

  return (
    <div>
      {cardsRendered}
    </div>
  )
}

function shuffle(items) {
  const indeces = items.map((item, index) => index)
  const shuffled = new Array(items.length)
  items.forEach((item) => {
    const randIndex = Math.floor(Math.random() * indeces.length)
    shuffled.splice(indeces[randIndex], 1, item)
    indeces.splice(randIndex, 1)
  })
  
  return shuffled
}

export default CardRandomizer
