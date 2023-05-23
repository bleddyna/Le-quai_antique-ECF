import React,{useState } from 'react'

export function Reservation () {
    const [date, setDate] = useState();
    
    const [person,setPerson] = useState('');

    const [hour,setHour] = useState('');

    const handleChange = (e) => {
    setDate(e.target.value);
    };
    const handleChangePerson = (p)=>{
      setPerson(p.target.value);
    }
    const handleChangeHour = (h)=>{
      setHour(h.target.value);
    }
  return (
    <>
    <h1>Réserver une table</h1>
    <form >
    <div>
        <label >Choisir une date </label>
<input
type="date"
onChange={handleChange}
/></div>
      <div>
      <label >Nombre de couverts</label>
      <input type='number' onChange={handleChangePerson}></input>
      </div>
      <br></br>
      <label >Pour quelle heure?</label>
<select onChange={handleChangeHour}>
<option value="">--Déjeuner--</option>
    		<option value="11h">11h</option>
    		<option value="11h15">11h15</option>
    		<option value="11h30">11h30</option>
    		<option value="11h45">11h45</option>
        <option value="12h">12h</option>
    		<option value="12h15">12h15</option>
    		<option value="12h30">12h30</option>
    		<option value="12h45">12h45</option>
        <option value="13h">13h</option>
   		</select>
       <select onChange={handleChangeHour}>
<option value="">--Diner--</option>
    		<option value="19h">19h</option>
    		<option value="19h15">19h15</option>
    		<option value="19h30">19h30</option>
    		<option value="19h45">19h45</option>
        <option value="20h">20h</option>
    		<option value="20h15">20h15</option>
    		<option value="20h30">20h30</option>
    		<option value="20h45">20h45</option>
        <option value="21h">21h</option>
   		</select>

<br></br>
<label>vous avez choisi le {date} pour {person} personne(s) à {hour}</label>
<br />
<button type="submit">Réserver</button>
    </form>
    </>
  )
}
