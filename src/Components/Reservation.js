import React,{useState,useRef} from 'react'

export function Reservation () {
    const [date, setDate] = useState('');
    const dateInputRef = useRef(null);
    
    const [person,setPerson] = useState('');
    const [hour,SetHour] = useState('');
    const handleChange = (e) => {
    setDate(e.target.value);
    };
    const handleChangePerson = (p)=>{
      setPerson(p.target.value);
    }

    const handleClick = (h) => {
      SetHour(h.target.value);
    };

  return (
    <>
    <h1>Réserver une table</h1>
    <form >
    <div>
        <label >Choisir une date </label>
<input
type="date"
onChange={handleChange}
ref={dateInputRef}
/></div>
      <div>
      <label >Nombre de couverts</label>
      <input type='number' onChange={handleChangePerson}></input>
      </div>
      <br></br>
<h3>Déjeuner</h3>
<button onClick={handleClick}></button>
<button >11h15</button>
<button >11h30</button>
<button >11h45</button>
<button >12h</button>
<button >12h15</button>
<button >12h30</button>
<button >12h45</button>
<button >13h</button>
<br /><br />
<h3>Diner</h3>
<button >19h</button>
<button >19h15</button>
<button>19h30</button>
<button>19h45</button>
<button>20h</button>
<button>20h15</button>
<button>20h30</button>
<button>20h45</button>
<button>21h</button>
<br></br>
<label>vous avez choisi le {date} pour {person} personnes à {hour}</label>
<br />
<button type="submit">Réserver</button>
    </form>
    </>
  )
}
