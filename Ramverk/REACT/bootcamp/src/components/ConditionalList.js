import { useState } from 'react'
import style from '../module/index.module.scss'
import { TabOne, TabTwo, TabThree, TabFour } from './Tab/Tab-1'


export const ToggleButton = () => {
        const [ toggle, setToggle ] = useState('ON')
        const showToggle = ()=>{
             toggle =='ON' ? setToggle('OFF') : setToggle('ON')
            }
          return (
                <div className={style.Btn}>
                    <button style={{backgroundColor : toggle == 'ON' ? 'red' : 'yellow'}}
                    onClick={showToggle}>{toggle}</button>
                </div>
              )
            }

export const ToggleBtn = () => {
    const [text, setText] = useState("ON");
    const toggleView = () =>{
        if(text === "ON"){
            setText("OFF")
        }

        if(text === "OFF"){
            setText("ON")
        }
    }
  return (
      <div className={style.toggleBtn}>

      {/* <button onClick={toggleView}>{text}</button> */}
      <button style={{backgroundColor : text == 'ON' ? 'white' : 'darkgray'}} onClick={toggleView}>{text}</button>
      </div>
  )
}




export const Fruits = () => {
    const data = ['äpple', 'päron','mango','ananas','banan','äpple', 'päron','mango','ananas','banan']

  return (
    <div className={style.Fruits}>
        <ul>
            {data.map((fruit, index)=>{
                return <li key={index}>{fruit}</li>
            })}
        </ul>

    </div>
  )
}


export const Shröedingers = () => {
    const [show, setShow] = useState(true)
    const [index, setIndex] = useState(null)
    const developer = ['FRONTEND', 'BACKEND']
    const openBox = ()=>{
        if(show ){
            const random = Math.floor(Math.random() * 2)
            setIndex(random)
            setShow(false)

        }
    }
  return (
    <div className={style.Shröedingers}>
        <h1>SHOW</h1>
            {show && (<h3>WHO IS THIS GUY?</h3>)}
            {!show && (<p style={{fontSize: '3rem' , color: index === 0 ? "#fa2a55" : "cyan",}}>
            {developer[index]}
            </p>)}

        <button onClick={openBox}>OPEN THE BOX</button>
    </div>
  )
}



export const TabView = () => {
    const [tab, setTab] = useState(1)
  return (
    <div className={style.Tab}>
        <div className={style.TabBtn}>
            <button onClick={()=> setTab(1)}>Tab1</button>
            <button onClick={()=> setTab(2)}>Tab2</button>
            <button onClick={()=> setTab(3)}>Tab3</button>
        </div>

        {tab === 1 ? <TabOne/> : <TabFour/>}
        {tab === 2 ? <TabTwo/> : <TabFour/>}
        {tab === 3 ? <TabThree/> : <TabFour/>}
    </div>
  )
}
