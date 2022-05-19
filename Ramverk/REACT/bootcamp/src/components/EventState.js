import { useState } from 'react'
import style from '../module/index.module.scss'


export  function Counter() {
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
  return (<div className={style.counter}>
    <h1>Counter</h1>
  <span>
      <button onClick={plus}>Click(++)</button>
      <button onClick={minus}>Click(--)</button>
      <button onClick={reset}>Click(reset)</button>
  </span>
      <h2>{counter}</h2>
  </div>
  )
}


export const InputDuplication = () => {
  const [text, setVal] = useState('')
   return (
      <div className={style.InputDuplication}>
        <h1>InputDuplication</h1>
           <input style={{margin:'24px'}} type='text' value={text} onChange={(e)=>setVal(e.target.value)} />
           <h2 style={{color:'red'}}>{text}</h2>
      </div>
  )
}



export const DiceRoller = () => {
    let [text, setText] = useState('')
    let output;
    const randomNumber = () => {
        const random = Math.floor(Math.random(text) * 10)
        if(text !== null){
            text = ''
        }
      return  output = random
    }
    randomNumber()
    return (
        <div className={style.DiceRoller}>
            <h1>Dice Roller</h1>
             <input style={{margin:'24px'}} type='text' value={text} onChange={(e)=>setText(e.target.value)} />
             <h2 style={{color:'red'}}>{output}</h2>
        </div>
    )
}

export const SubmitPrevention = ()=>{
  const [text , setText] = useState('')
  const showMessage = (e)=>{
    e.preventDefault();
    setText('hello world')
  }
  return (
    <div className={style.SubmitPrevention}>
      <h1>SubmitPrevention</h1>
      <form onSubmit={showMessage}>
        {/* <input onChange={(e) =>setText(e.target.value)} style={{margin: "10px"}}/> */}
        <input type="text" onKeyUp={(e)=> setText(e.target.value)}/>
        <button type='submit'>Click</button>
        <p style={{color:"cyan"}}>{text}</p>
        {/* <p>{text}</p> */}
      </form>
    </div>
  )
}