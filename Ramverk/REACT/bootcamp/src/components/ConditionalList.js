import { useState } from 'react'
import style from '../module/index.module.scss'
import { TabOne, TabTwo, TabThree, TabFour } from './Tab/Tab-1'


export const ToggleButton = () => {
        const [ toggle, setToggle ] = useState('ON')
        const showToggle = ()=>{
             toggle ==='ON' ? setToggle('OFF') : setToggle('ON')
            }
          return (
                <div className={style.Btn}>
                    <button style={{backgroundColor : toggle === 'ON' ? 'red' : 'yellow'}}
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
      <button style={{backgroundColor : text === 'ON' ? 'white' : 'darkgray'}} onClick={toggleView}>{text}</button>
      </div>
  )
}




export const Fruits = () => {
    const data = ['äpple', 'päron','mango','ananas','banan','äpple', 'päron','mango','ananas','banan']

  return (
    <div className={style.Fruits}>
      <h1>Fruits</h1>
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
      <h1>Shröedingers</h1>
        <h3 style={{color: 'lightgreen'}}>SHOW</h3>
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
          <h1>TabView</h1>
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




export const FakedLogin = ()=>{
  const data = {email: "omarhuba@gmail.com", password: "password"}
  const [msg, setMsg] = useState('')
  const [email, setEmail] = useState('')
  const [passowrd, setPassword] = useState('')


  const userLogin = (e)=>{
    e.preventDefault()

   data.email === email && data.password === passowrd
    ? setMsg('You are inloged!')
    : setMsg('Invalid email or password!')
  }
  return(
    <div className={style.Login}>
      <h1>FakedLogin</h1>
      <h3>Login</h3>
      <p style={{ color: msg ==='You are inloged!' ? 'green' : 'red'}}>{msg}</p>
      <form onSubmit={userLogin} >
        <input type="email" onChange={(e)=>setEmail(e.target.value)}  placeholder='your email' />
        <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder='your password' />
        <button type='submit'>Login</button>
      </form>
    </div>
)
}



export const Modal = ()=>{
  const [modal, setModal] = useState(false)
  const showModal = ()=>{
    !modal ? setModal(true) : setModal(false)
  }

  return(
    <div className={style.Modal}>
      <h1>Modal</h1>
      {modal && (<div style={{ width: '200px', height: '120px', backgroundColor: 'yellow', marginBottom: '200px'}} >
        <p>I am here!</p>
        {modal && (<button onClick={showModal}>Hide</button>)}
      </div>)}


      {!modal && (<button onClick={showModal}>Show</button>)}


    </div>
  )
}



// export const FruitSalad = () =>{
//   const fruits = ['äpple', 'päron', 'banan', 'ananas', 'kiwi']
//   const [arr2, setNewArr] = useState([])

//   const Handler = () =>{}
//   return(
//     <div className={style.FruitSalad}>
//       <h1>FruitSallad</h1>
//        <ul>
//          {fruits.map((fruit, i)=> {
//       console.log('fruit', i);
//            return (
//              <li onClick={Handler} key={i}>
//                {fruit}</li>
//            )
//          })}
//        </ul>
//        {arr2}
//     </div>
//   )
// }


export const FruitSalad = () => {
  const arr1 = ["Apple", "Orange", "Banana", "Pear", "Grapes"];
  const [arr2, setArr2] = useState([]);

  const arryHandeler = () => {

  };

  return (
    <div className={style.FruitSalad}>
      <h1 style={{ textDecoration: "underline", fontSize: "1.8rem" }}>
        Fruit Salad
      </h1>
      <ul>
        {arr1.map((fruit, index) => {
          console.log(fruit, index);
          return (
            <li
              onClick={arryHandeler}
              key={index}
              style={{ cursor: "pointer" }}
            >
              {fruit}
            </li>
          );
        })}
      </ul>
      {arr2}
    </div>
  );
};