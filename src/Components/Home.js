import { Link } from "react-router-dom";
import restaurant from '../images/interrieur-restaurant.jpg'
import plat from '../images/pate.jpg'
import burger from '../images/burger1.jpg'
import dessert from '../images/burger1.jpg'

export function Home() {
    return (
        <>
            <div className="img-cover">
                <div>
                    <img src={restaurant} alt="interrieur restaurant" className="img-restaurant" />
                </div>
                <div className="img-title">
                    <h1>Restaurant gastronomique</h1>
                    <h1>LE QUAI ANTIQUE</h1>
                </div>
            </div>
            <h1>Etes-vous prêt à vivre une experience gustative? </h1>
            <div className="galery">
                <img src={plat} alt="plat" />
                <img src={burger} alt="burger" />
                <img src={dessert} alt="dessert" />
            </div>
            <div>
                <button ><Link to="/carte">Notre carte</Link></button>
                <button ><Link to="/carte/menu">Nos menu</Link></button>
                <button ><Link to="/reservation">Reserver une table</Link></button>
            </div>
            

        </>
        );
    }
    