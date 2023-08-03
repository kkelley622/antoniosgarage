import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <ul>
      <li><Link to='/sobre'>Sobre Nosotros</Link></li>
      <li>Localizacion</li>
    </ul>
  )
}

export default Navbar