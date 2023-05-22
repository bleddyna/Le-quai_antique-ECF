import viande1 from '../images/viande1.jpg'
import viande2 from '../images/viande2.jpg'

export const Viandes = () => {
    return (
      <div className="carteMenu">
       <h1>Les viandes</h1>
       <div className="carte-menuItem">
        <img src={viande1} alt="viande 1" />
        <p>description</p>
        <p>prix</p>
      </div>
      <div className="carte-menuItem">
        <img src={viande2} alt="viande 2" />
        <p>description</p>
        <p>prix</p>
      </div>
      </div>
    )
  }