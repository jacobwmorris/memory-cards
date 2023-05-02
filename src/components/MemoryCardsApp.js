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
      <CardRandomizer/>
    </div>
  )
}

const pastaCardInfo = [
  {name: "spaghetti", id: 0},  {name: "fettuccine", id: 1},
  {name: "lasagna", id: 2},    {name: "ziti", id: 3},
  {name: "macaroni", id: 4},   {name: "ravioli", id: 5},
  {name: "penne", id: 6},      {name: "rigatoni", id: 7},
  {name: "tortellini", id: 8}, {name: "cavatappi", id: 9},
  {name: "farfalle", id: 10},  {name: "gnocci", id: 11}
]

export default MemoryCardsApp
