import React from 'react'

export function SignUp () {
  return (
    <>
    <h1>Inscription</h1>
    <form >
      <div>
        <label htmlFor="name">Votre Prénom</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Votre nom</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="birth">Votre date de naissance</label>
        <input type="date" />
      </div>
      <div>
        <label htmlFor="email">Votre adresse mail</label>
        <input type="email" />
      </div>
      <div>
        <label htmlFor="password1">votre mot de passe</label>
        <input type="password" />
      </div>
      <div>
        <label htmlFor="passwordConfirm">Confirmez votre mot de passe</label>
        <input type="password" />
      </div>
      <div>
        <label htmlFor="guests">Nombre d'invités qui viendront habituellement avec vous</label>
        <input type="number" />
      </div>
      <div>
        <label htmlFor="allergy">allergie connues</label><br></br>
        <textarea />
      </div>

      <button type="submit">Se connecter</button>
    </form>
    </>
  )
}
