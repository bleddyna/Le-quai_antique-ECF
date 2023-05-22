import dessert1 from '../images/dessert1.jpg'
import dessert2 from '../images/dessert2.jpg'
export const Desserts = () => {
    return (
      <div className="carteMenu">
       <h1>Les desserts</h1>
       <div className="carte-menuItem">
        <img src={dessert1} alt="dessert 1" />
        <p>description</p>
        <p>prix</p>
      </div>
      <div className="carte-menuItem">
        <img src={dessert2} alt="dessert 2" />
        <p>description</p>
        <p>prix</p>
      </div>
      </div>
    )
  } 