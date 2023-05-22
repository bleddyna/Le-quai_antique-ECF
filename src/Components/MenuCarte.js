import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export function MenuCarte() {
  return (
    <>
    <NavLink className={({ isActive, isPending }) =>
        isPending ? "menuNavItems" : isActive ? "activeMenuNavItems" : "menuNavItems"
      }
    to="/carte/menu">Notre menu</NavLink>
    <NavLink 
        className={({ isActive, isPending }) =>
        isPending ? "menuNavItems" : isActive ? "activeMenuNavItems" : "menuNavItems"
      }
    to='/carte/entree'>Les entrées</NavLink>
    <NavLink  className={({ isActive, isPending }) =>
        isPending ? "menuNavItems" : isActive ? "activeMenuNavItems" : "menuNavItems"
      } to='/carte/végétarien'>Végétarien</NavLink>
    <NavLink  className={({ isActive, isPending }) =>
        isPending ? "menuNavItems" : isActive ? "activeMenuNavItems" : "menuNavItems"
      } to='/carte/viandes'>Les viandes</NavLink>
    <NavLink  className={({ isActive, isPending }) =>
        isPending ? "menuNavItems" : isActive ? "activeMenuNavItems" : "menuNavItems"
      } to='/carte/burgers'>Les burgers</NavLink>
    <NavLink  className={({ isActive, isPending }) =>
        isPending ? "menuNavItems" : isActive ? "activeMenuNavItems" : "menuNavItems"
      } to='/carte/desserts'>Les desserts</NavLink>
    <Outlet/>

    </>
  )
}