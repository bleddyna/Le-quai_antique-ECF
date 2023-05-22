
import veggie1 from '../images/veggie1.jpg'
import veggie2 from '../images/veggie2.jpg'

export const Veggie = () => {
    return (
      <div className="carteMenu">
       <h1>Espace végétarien</h1>
       <div className="carte-menuItem">
        <img src={veggie1} alt="veggie 1" />
        <p>description</p>
        <p>prix</p>
      </div>
      <div className="carte-menuItem">
        <img src={veggie2} alt="veggie 2" />
        <p>description</p>
        <p>prix</p>
      </div>
      </div>
    )
  }