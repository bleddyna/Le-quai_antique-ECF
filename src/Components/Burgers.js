import burger1 from '../images/burger1.jpg'
import burger2 from '../images/burger2.jpg'

export const Burgers = () => {
    return (
      <div className="carteMenu">
       <h1>Les burgers</h1>
       <div className="carte-menuItem">
        <img src={burger1} alt="burger 1" />
        <p>description</p>
        <p>prix</p>
      </div>
      <div className="carte-menuItem">
        <img src={burger2} alt="burger 2" />
        <p>description</p>
        <p>prix</p>
      </div>
      </div>
    )
  }