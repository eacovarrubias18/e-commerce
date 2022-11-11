import React, { useState } from "react"
import { Link } from "react-router-dom"
import SplitButton from './SplitButton'

const Navbar = () => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex absolute'>
         
          <div className='catgrories d_flex '>
              <SplitButton/>
          </div>

          <div className='navlink '>
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
              {/*<ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>*/}
              <li>
                <Link to='/'>Inicio</Link>
              </li>
              <li>
                <Link to='/categories'>Categorias</Link>
              </li>
              <li>
                <Link to='/contact'>Contactanos</Link>
              </li>
              <li>
                <Link to='/aboutUs'>Sobre Nosotros</Link>
              </li>
              <li>
                <Link to='/qa'>Preguntas Frecuentes</Link>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
