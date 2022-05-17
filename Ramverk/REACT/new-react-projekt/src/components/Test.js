import {useState} from 'react'
// added boolean till state och gör en toggle
export default function Test() {
    const [flag, setFlag] = useState(true);

  return (
      <div>

    <button onClick={()=>setFlag(!flag)}>TOGGLE!</button>
    {flag && (<p>lorem öskdjfaöskjf lksfjlskdfjas ölksjdföaskdfjhaö ölaksföaskjdhf</p>)}

      </div>
  )
}


export  function Hello() {
    const [flag, setFlag] = useState(true);

  return (
      <div>

    <button onClick={()=>setFlag(!flag)}>TOGGLE!</button>
    {flag && (<p>lorem öskdjfaöskjf lksfjlskdfjas ölksjdföaskdfjhaö ölaksföaskjdhf</p>)}

      </div>
  )
}

