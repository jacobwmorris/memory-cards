
function Card({name, disabled, onClick}) {
  return (
    <button type="button" disabled={disabled} onClick={onClick} data-name={name}>
      <p>{name} here</p>
    </button>
  )
}

export default Card
