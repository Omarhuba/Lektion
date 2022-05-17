import React, { useState } from 'react'


export default function Counter() {
    const [counter, setCounter] = useState(0)
    const plus = ()=>{
        setCounter(count => count +1 )
    }
    const minus = ()=>{
        if(counter > 0){
            setCounter( count => count -1)
        }
    }
    const reset = ()=>{
        setCounter ( count => 0)
    }
  return (<>
  <span>
      <button onClick={plus}>Click(++)</button>
      <button onClick={minus}>Click(--)</button>
      <button onClick={reset}>Click(reset)</button>
  </span>
      <h2>{counter}</h2>

  </>
  )
}

