import globeImg from "../assets/globe.png"

export default function Header() {
  return(
    <header id="page-header">
      <div className="header__details">
        <img src={globeImg} alt="globe image" className="header__img" />
        <span className="header__text"> my travel journal</span>
      </div>
    </header>
  )
}