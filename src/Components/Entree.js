import React from 'react'
import entree1 from '../images/entree1.jpg'
import entree2 from '../images/entree2.jpg'


export function Entree () {
  return (
    <div className="carteMenu">
      <h1>Les entrées</h1>
      <div className="carte-menuItem">
        <img src={entree1} alt="entree 1" />
        <p>description</p>
        <p>prix</p>
      </div>
      <div className="carte-menuItem">
        <img src={entree2} alt="entree 2" />
        <p>description</p>
        <p>prix</p>
      </div>
      </div>
  )
}
