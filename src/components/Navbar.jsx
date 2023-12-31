import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to='/'>Casa</Link></li>
        <li><Link to='/sobre'>Sobre Nosotros</Link></li>
        <li><Link to='/servicios'>Servicios</Link></li>
        <li><Link to='/contacta'>Contacta con Nosotros</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar