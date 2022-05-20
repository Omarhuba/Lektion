import React from 'react'
import style from '../../module/index.module.scss'
import imgFile from '../../assets/poster.png'


function Header() {
    // const imgFile ="../../assets/poster.png"
    return (
      <div className={style.Header}>
          <img src={imgFile} alt='inga-bra-bygg' style={{width: '1440px'}}/>



      </div>
    );
  }

  export default Header;


