
import React from 'react'
import Nav from './Nav'
import Projects from './Projects'
import Contact from './Contact'

export default function Home() {
  return (
    <>
      <div className='header'>

        <h1>Hey, I'm Gino</h1>
        <p>Web Developer</p>
        <p>Coffee Poser</p>

      </div>

      <Projects />
      <Contact />
    </>
  )
}
