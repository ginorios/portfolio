
import React from 'react'

export default function Display(props) {

  return (
    <div className='projDisplay'>
      <p className='projGif'>{props.gif}</p>
      <p className='projTitle'>{props.projectTitle}</p>
      <a href='https://github.com' target='_blank' className='projLink'>{props.projectLink}</a>
      <p className='projDesc'>{props.projectDescription}</p>
    </div>
  )
}
