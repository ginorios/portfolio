
import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './main.scss'

import Nav from './components/Nav'
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <HashRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Projects' element={<Projects />} />
        <Route path='Contact' element={<Contact />} />
      </Routes>
    </HashRouter>
  )
}
