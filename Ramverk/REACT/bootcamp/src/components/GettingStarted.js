import React from 'react'
import imgFile from '../assets/betty_white.jpeg'
import style from '../module/index.module.scss'

export const GettingStarted = () => {
    const data = {
        name: 'Betty White',
        job: 'Actress',
        life: 'January 17, 1922 – December 31, 2021',
        imgFile: './assets/betty_white.jpeg',
        quote: 'My mother always used to say, “The older you get, the better you get. Unless you’re a banana.”'
      }
  return (
    <div className={style.Memory}>
        <h1 className='name'>{data.name}</h1>
        <h2 className='job'>{data.job}</h2>
        <p className='life'>{data.life}</p>
        <img className='imgFile' src={imgFile}></img>
        <p className='quote'>{data.quote}</p>
    </div>

  )
}
