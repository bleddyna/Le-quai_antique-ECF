import React from 'react'

export function LogIn () {
  return (
    <>
    <h1>Connection</h1>
    <form >
      <div>
        <label htmlFor="email">Votre adresse mail</label>
        <input type="email" />
      </div>
      <div>
        <label htmlFor="password">votre mot de passe</label>
        <input type="password" />
      </div>
      <button type="submit">Se connecter</button>
    </form>
    </>
  )
}
