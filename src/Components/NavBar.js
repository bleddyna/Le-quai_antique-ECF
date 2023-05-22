import React,{useState} from 'react'
import logo from '../images/logo.png'
import { Link, useLocation } from 'react-router-dom'
const NavBar = () => {
    const [toggle, setToggle] = useState(true);
    const handleClick = () => {
        setToggle(!toggle);
      };
      const location = useLocation();
  return (
   <>
   <nav>
   <Link to="/">
        <img src={logo} width={78} height={79} alt='logo'/>
    </Link>
    <div>
        <ul id='navBar' className={toggle?"#navBar":"#navBar mobileActive"}>
            <li>
                <Link to="/" className={`nav-link ${location.pathname === '/' ? '#navBar li a activeNavBar' : '#navBar li a'}`}
                >
                    Acceuil
                </Link>
            </li>
            <li>
                <Link to="/carte"  className={`nav-link ${location.pathname === '/carte' ? '#navBar li a activeNavBar' : '#navBar li a'}`}
>
                    Notre carte
                </Link>
            </li>
            <li>
                <Link to="/reservation" className={`nav-link ${location.pathname === '/reservation' ? '#navBar li a activeNavBar' : '#navBar li a'}`}>
                    Reserver
                </Link>
            </li>
            <li>
                <Link to="/inscription" className={`nav-link ${location.pathname === '/inscription' ? '#navBar li a activeNavBar' : '#navBar li a'}`}>
                    S'inscrire
                </Link>
            </li>
            <li>
                <Link to="/connexion" className={`nav-link ${location.pathname === '/connexion' ? '#navBar li a activeNavBar' : '#navBar li a'}`}>
                    Se connecter
                </Link>
            </li>
        </ul>
    </div>
    <div id='mobile' onClick={handleClick} >
        <i id='bar' className={toggle ?'fas fa-bars':'fas fa-times'}></i>
    </div>
   </nav>
   </>
  )
}

export default NavBar