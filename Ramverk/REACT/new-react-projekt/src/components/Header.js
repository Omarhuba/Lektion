import React from 'react'
import './HeaderStyle.css';
// import styles from './HeaderStyle.module.css'


// const styling = { color: 'cyan'}
export default function Header() {
    function showAlert (){
        alert('show Alert!')
    }
  return (
   <>
   <button onClick={showAlert}>Click!</button>
    {/* <div style={styling} >Header</div> */}
    {/* <div className='body'> Hello my body</div> */}
    {/* <div className={styles.myClass}> Hello my andra body</div> */}

  </>
  )
}
