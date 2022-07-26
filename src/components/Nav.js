
import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  let [toggle, setToggle] = React.useState(true)

  function fTog() {
    setToggle(!toggle)
  }
  console.log(toggle)

  return (
    <>
      <div onClick={fTog} className={toggle ? 'menu' : 'close'}>
        <div className='bar top'></div>
        <div className='bar mid'></div>
        <div className='bar bot'></div>
      </div>

      <nav onClick={fTog} className={toggle ? 'navClose' : 'navOpen'}>
        <Link to='/' style={
          {
            textDecoration: 'none',
            color: 'rgb(237,237,237)',
            fontSize: '2.5rem'
          }
        }>Home</Link>
        <Link to='/projects' style={
          {
            textDecoration: 'none',
            color: 'rgb(237,237,237)',
            fontSize: '2.5rem'
          }
        }>Projects</Link>
        <Link to='/contact' style={
          {
            textDecoration: 'none',
            color: 'rgb(237,237,237)',
            fontSize: '2.5rem'
          }
        }>Contact</Link>
      </nav>
    </>
  )
}
