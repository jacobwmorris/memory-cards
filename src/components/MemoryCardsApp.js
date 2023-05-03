import {useState} from "react"
import Scoreboard from "./Scoreboard"
import CardRandomizer from "./CardRandomizer"

function MemoryCardsApp() {
  const [score, setScore] = useState(0)
  const [record, setRecord] = useState(0)
  const [usedCards, setUsedCards] = useState([])
  const [cards, setCards] = useState(pastaCardInfo.slice())
  const [isGameFinished, setIsGameFinished] = useState(false)

  //Callbacks
  function handleReset(event) {
    setScore(0)
    setUsedCards([])
    setIsGameFinished(false)
  }

  function handleCardClick(event) {
    function finishGame(finalScore) {
      if (finalScore > record) {
        setRecord(finalScore)
      }
      setIsGameFinished(true)
    }

    const pastaName = event.currentTarget.getAttribute("data-name")
    
    //If you clicked a card that has already been clicked, game over
    if (usedCards.find((c) => c === pastaName) !== undefined) {
      finishGame(score)
      return
    }
    
    const nextScore = score + 1
    setScore(nextScore)
    setUsedCards(usedCards.concat([pastaName]))
    
    //If all cards clicked, you win
    if (nextScore >= cards.length) {
      finishGame(nextScore)
      return
    }
  }
  
  //Rendering
  const isPerfectScore = (score === cards.length)

  return (
    <div>
      <div>
        <div>
          <h1>Memory Cards</h1>
          <h2>Pasta edition</h2>
          <ul>
            <li>Click on the pasta cards below to gain points.</li>
            <li>Remember each card you click, and don't click the same one twice!</li>
          </ul>
        </div>
        <Scoreboard
          score={score}
          record={record}
          isGameFinished={isGameFinished}
          isPerfectScore={isPerfectScore}
          handleReset={handleReset}
        />
      </div>
      <CardRandomizer
        cardList={cards}
        isGameFinished={isGameFinished}
        handleCardClick={handleCardClick}
      />
    </div>
  )
}

const pastaCardInfo = [
  {name: "spaghetti", id: 0},  {name: "fettuccine", id: 1},
  {name: "lasagna", id: 2},    {name: "ziti", id: 3},
  {name: "macaroni", id: 4},   {name: "ravioli", id: 5},
  {name: "penne", id: 6},      {name: "rigatoni", id: 7},
  {name: "tortellini", id: 8}, {name: "cavatappi", id: 9},
  {name: "farfalle", id: 10},  {name: "gnocchi", id: 11}
]

const pastaCardInfoEasyMode = [
  {name: "spaghetti", id: 0},  {name: "fettuccine", id: 1},
  {name: "lasagna", id: 2}
]

export default MemoryCardsApp
