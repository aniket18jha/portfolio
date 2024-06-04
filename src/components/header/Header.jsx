import React, { useState } from "react";
import "./header.css";


const Header = () => {
  
  const [Toggle, showMenu] = useState(false);

  return (
    <header className ="header">
      <nav className="nav container">
        <a href="index.html" className="nav_logo">Aniket</a>

        <div className={Toggle ? "nav__menu show-menu" :"nav__menu"}>
          <ul className="nav__list grid">

            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="nav__icon" class="uil uil-estate"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="nav__icon" class="uil uil-user"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="nav__icon" class="uil uil-file-alt" ></i> Skills
              </a>
            </li>

            {/* <li className="nav__item">
              <a href="#services" className="nav__link">
                <i className="nav__icon" class="uil uil-briefcase-alt"></i> Projects
              </a>
            </li> */}

            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <i className="nav__icon" class="uil uil-scenery"></i> Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="nav__icon" class="uil uil-message"></i> Contact
              </a>
            </li>

          </ul>
          <i class="uil uil-times nav__close" onClick={()=> showMenu(!Toggle)}></i>
        </div>
      <div className="nav__toggle" onClick={()=> showMenu(!Toggle)}>
        <i class="uil uil-apps"></i>
      </div>

      </nav>
    </header>
  )
}

export default Header
