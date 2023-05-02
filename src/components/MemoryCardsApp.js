import Scoreboard from "./Scoreboard"
import CardRandomizer from "./CardRandomizer"

function MemoryCardsApp() {
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
        <Scoreboard/>
      </div>
      <CardRandomizer/>
    </div>
  )
}

export default MemoryCardsApp
