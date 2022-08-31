
import React from 'react'

export default function Display(props) {

  return (
    <div className='projDisplay'>
      <img className='projGif' src={props.gif} />
      <a href={props.projectLink} target='_blank' className='projLink'>Click Here</a>
      <p className='projTitle'>{props.projectTitle}</p>
      <p className='projDesc'>{props.projectDescription}</p>
    </div>
  )
}
