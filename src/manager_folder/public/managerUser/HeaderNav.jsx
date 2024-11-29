import React from 'react'
import "../../static/manageUserStatic/headerStyle.css"

function HeaderNav() {
  return (
    <>
    <nav className="header__nav">
            <ul className="nav__list">
                <li className="list__element">
                    <div className="list__element-img-container">

                    </div>
                </li>                
            </ul>
            <ul className="nav__list sections--item">
                <li className="list__element">
                    <a href="#" className="list__element-link">Nosotros</a>
                </li>
                <li className="list__element">
                    <a href="#" className="list__element-link">Cursos</a>
                </li>
                <li className="list__element signin--button">
                    <a href="login.html" className="list__element-link ">Unirse</a>
                </li>
                <li className="menu--button">
                    <label><span className="menu-button__icon">&#9776;</span>
                        <input type="checkbox" id="menu-button"/>                        
                    </label>
                </li>
                <li className="user-menu__container">
                    <button className="user-menu__button" id="user-menu-button">
                        <span className="user-menu__username" id="user-menu-username">
                        </span>
                    </button>
                    <div className="user-menu" id="user-menu">                
                        <div className="user-menu__dropdown" id="user-menu-dropdown">
                            <a href="#" id="logout-button" className="user-menu__item">Cerrar sesión</a>
                            <a href="/bill-manager" id="bill-button" className="user-menu__item">Gestionar gastos</a>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default HeaderNav