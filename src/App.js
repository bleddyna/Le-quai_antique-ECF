import { Route, Routes } from 'react-router-dom';
import './App.css'
import * as React from "react"
import {Home} from './Components/Home'
import {Carte} from './Components/Carte';
import {Menu} from './Components/Menu';
import {Entree} from './Components/Entree';
import {Veggie} from './Components/Veggie';
import {Viandes} from './Components/Viandes';
import {Burgers} from './Components/Burgers';
import {Desserts} from './Components/Desserts';
import {NotFound} from './Components/NotFound';
import { MenuCarte } from './Components/MenuCarte';
import NavBar from './Components/NavBar';
import { Reservation } from './Components/Reservation';
import { SignUp } from './Components/SignUp';
import { LogIn } from './Components/LogIn';



function App() {
  return (<>
  <header>
   <NavBar/>
  </header>
  <main>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/carte" element={<MenuCarte/>} >
        <Route index element={<Carte/>}/>
        <Route path="menu" element={<Menu/>}/>
        <Route path="entree" element={<Entree/>}/>
        <Route path="végétarien" element={<Veggie/>}/>
        <Route path="viandes" element={<Viandes/>}/>
        <Route path="burgers" element={<Burgers/>}/>
        <Route path="desserts" element={<Desserts/>}/>
      </Route>
      <Route path='/reservation' element={<Reservation/>}/>
      <Route path='/inscription' element={<SignUp/>}/>
      <Route path='/connexion'element={<LogIn/>} />
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  </main>
  <footer>
    <h2>Quand sommes-nous ouvert?</h2>
    <br />
    <div className="footer-schedules">
    <h3>Lundi & mardi</h3>
    <p>Fermé</p>
    <h3>Du mercredi au samedi</h3>
    <p>11h-14h & 19h-22h</p>
    <h3>Dimanche</h3>
    <p>11h-14h</p>
    </div>
  </footer>
  </>
  );
}

export default App;
