
import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  let [toggle, setToggle] = React.useState(true)
  let style = {
    textDecoration: 'none',
    color: 'rgb(237,237,237)',
    fontSize: '2.5rem'
  }

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

      <nav className={toggle ? 'navClose' : 'navOpen'}>
        <Link onClick={fTog} to='/' style={style}>Home</Link>
        <Link onClick={fTog} to='/projects' style={style}>Projects</Link>
        <Link onClick={fTog} to='/contact' style={style}>Contact</Link>
      </nav>
    </>
  )
}
