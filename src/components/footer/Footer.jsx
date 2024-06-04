import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Aniket</h1>
<ul className="footer__list">
    <li>
        <a href="#about" className="footer__link">About</a>
    </li>

    <li>
    <a href="#portfolio" className="footer__link">Projects</a>
    </li>


</ul>


<div className="footer__social">
<a href="https://www.linkedin.com/in/aniket17jha/" className="home__social-icon" target ="_blank">
            <i class="bx bxl-linkedin"></i>
        </a>


        <a href="https://github.com/aniket18jha" className="home__social-icon" target ="_blank">
        <i class="bx bxl-github"></i>
        </a>
        </div>
        </div>
        <span className="footer__copy">&#169; Aniket_jha. All rigths reserved</span>
    </footer>
  )
}

export default Footer
