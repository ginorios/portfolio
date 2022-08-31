
import React from 'react'
import email from '../img/email.svg'

export default function Contact() {
  return (
    <div className='footer'>
      <div className='email'>
        <img className='emailImg' src={email}/><p><a href='mailto:gino.h.rios@gmail.com'>Shoot me an email.</a></p>
      </div>
      <p>Gino Rios &#169; 2022</p>

    </div>
  )
}
