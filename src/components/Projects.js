
import React from 'react'
import Display from './Display'
import paradise from '../img/paradiseLarge.gif'

export default function Projects() {
  let projects = [
    {
      id: 1,
      gif: paradise,
      projectLink: 'https://paradise.ginorios.com',
      projectTitle: 'Paradise - [Tech: React/JavaScript, CSS/SCSS, HTML]',
      projectDescription: 'Welcome to Paradise! This is a simple travel guide to get you on your way to have a good time in Paradise(Get it?). There are some countries in this site that details the different cultures practiced. Also, there are directions & links to places of interest & restaurants that you may want to check out.'
    }, 
      
  ]

  let proj = projects.map((mProj) => {
    return (
      <Display
        key={mProj.id}
        {...mProj}
      />
    )
  })

  return (
    <div className='section'>
      {proj}

    </div>

  )
}
