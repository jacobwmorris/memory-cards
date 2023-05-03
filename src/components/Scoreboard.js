import "../styles/Scoreboard.css"

function Scoreboard({score, record, isGameFinished, isPerfectScore, handleReset}) {
  return (
    <div className="Scoreboard-body">
      <p className="Scoreboard-score">Score: {score}</p>
      <p className="Scoreboard-record">Record: {record}</p>
      {
        isGameFinished ? (
        <>
          <p className="Scoreboard-endmessage">{endMessage(isPerfectScore)}</p>
          <button type="button" onClick={handleReset} className="Scoreboard-restart">Restart</button>
        </>) : null
      }
    </div>
  )
}

function endMessage(isPerfectScore) {
  if (isPerfectScore) {
    return "Congratulations, you got a perfect score!"
  }
  return "Game over!"
}

export default Scoreboard
