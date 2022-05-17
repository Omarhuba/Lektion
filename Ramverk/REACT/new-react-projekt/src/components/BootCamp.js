import imgFile from '../assets/betty_white.jpeg'
import Styling from './Styling.css'
import React, { useState } from 'react'


export  function Memory() {
    const data = {
        name: 'Betty White',
        job: 'Actress',
        life: 'January 17, 1922 – December 31, 2021',
        imgFile: './assets/betty_white.jpeg',
        quote: 'My mother always used to say, “The older you get, the better you get. Unless you’re a banana.”'
      }
  return (
    <div className='Memory'>
        <h1 className='name'>{data.name}</h1>
        <h2 className='job'>{data.job}</h2>
        <p className='life'>{data.life}</p>
        <img className='imgFile' src={imgFile}></img>
        <p className='quote'>{data.quote}</p>
    </div>
  )
}




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


export const InputDuplication = () => {
  const [text, setVal] = useState('')
   return (
      <div>
           <input style={{margin:'24px'}} type='text' value={text} onChange={(e)=>setVal(e.target.value)} />
           <p style={{color:'red'}}>{text}</p>
      </div>
  )
}


// export const DiceRoller = ()=>{
//   const [text, setVal] =
// }


export const SubmitPrevention = ()=>{
  const [text , setText] = useState('')
  const showMessage = (e)=>{
    e.preventDefault();
    setText('hello world')
  }
  return (
    <div>
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

// export const FormSubmitPrevention = () => {
//   let [text, setText] = useState("");

//   const showText = (e) => {
//     setText("omar");
//     e.preventDefault();
//   };

//   return (
//     <div>
//       <form onSubmit={showText}>
//         <input onChange={(e) => setText(e.target.value)} />
//         <button type="submit">Submit</button>
//       </form>

//       <p style={{ color: "red" }}>{text}</p>
//     </div>
//   );
// };
