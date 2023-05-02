
function Scoreboard({score, record, isGameFinished, isPerfectScore, handleReset}) {
  return (
    <div>
      <p>Score: {score}</p>
      <p>Record: {record}</p>
      {
        isGameFinished ? (
        <>
          <p>{endMessage(isPerfectScore)}</p>
          <button type="button" onClick={handleReset}>Restart</button>
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
