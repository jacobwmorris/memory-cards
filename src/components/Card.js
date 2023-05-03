import cavatappi from "../images/cavatappi-s.jpg"
import farfalle from "../images/farfalle-s.jpg"
import fettuccine from "../images/fettuccine-s.jpg"
import gnocchi from "../images/gnocchi-s.jpg"
import lasagna from "../images/lasagna-s.jpg"
import macaroni from "../images/macaroni-s.jpg"
import penne from "../images/penne-s.jpg"
import ravioli from "../images/ravioli-s.jpg"
import rigatoni from "../images/rigatoni-s.jpg"
import spaghetti from "../images/spaghetti-s.jpg"
import tortellini from "../images/tortellini-s.jpg"
import ziti from "../images/ziti-s.jpg"
import "../styles/Card.css"

const pastaPics = {
  cavatappi, farfalle, fettuccine, 
  gnocchi, lasagna, macaroni,
  penne, ravioli, rigatoni,
  spaghetti, tortellini, ziti
}

function Card({name, disabled, onClick}) {
  return (
    <button type="button" disabled={disabled} onClick={onClick} data-name={name} className="Card-button">
      <p className="Card-name">{name}</p>
      <img src={pastaPics[name]} alt={name} className="Card-picture"></img>
    </button>
  )
}

export default Card
