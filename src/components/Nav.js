
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  let [toggle, setToggle] = React.useState(true)

  let [current, setCurrent] = React.useState(false)
  
  /*
  let [width, setWidth] = React.useState({
    winWidth: window.innerWidth
  })

  //Window width
  function fWidth() {
    setWidth({ winWidth: window.innerWidth })

    if(width < 699) {
      setCurrent(!current)
    } if(width > 700) {
      setCurrent(current)
    }
  }

  useEffect(() => {

    window.addEventListener('resize', fWidth)

    return () => {
      window.removeEventListener('resize', fWidth)
    }
  }, [width])
  */

  let style = {
    textDecoration: 'none',
    color: 'rgb(237,237,237)',
    margin: '0 0 0 0.5rem',
    fontSize: current ? '2.5rem' : '1.5rem'
  }

  /*
  console.log(width.winWidth)
  console.log(style.fontSize)
  */

  function fTog() {
    setToggle(!toggle)
  }

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
