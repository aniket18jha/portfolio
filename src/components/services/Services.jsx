import React, { useState } from 'react'
import "./services.css";


const Services = () => {

    const[toggleState, setToggleState] =useState(0);

    const toggleTab=(index)=>{
        setToggleState(index);
    }

  return (
    <section className="services section" id="services">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">All projects</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid servics__icon"></i>
                    <h3 className="services__title">Product <br/> Designer </h3>

                    <span className="services__button" onClick={()=> toggleTab(1)}>View More <i className="uil uil-arrow-right"></i></span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Product Designer</h3>    
                        <p className="services__modal-description">
                            Services with more than 3 years of experience. Providing quality work to clients and companies.
                        </p>

                        <ul className="services__modal-services">

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I develop the user interface.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Web page development</p>
                            </li>

<li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I positon you company brand</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Design and mockups of products for companies.</p>
                            </li>                                                      
                        </ul>
                        </div>
                    </div>
                </div>
            </div>


{/* second */}

            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">UI/UX <br/>Designer</h3>

                    <span onClick={()=> toggleTab(2)} className="services__button">View More <i className="uil uil-arrow-right"></i></span>

                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">UI/UX Designer</h3>    
                        <p className="services__modal-description">
                            Services with more than 3 years of experience. Providing quality work to clients and companies.
                        </p>

                        <ul className="services__modal-services">

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I develop the user interface.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Web page development</p>
                            </li>

<li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I positon you company brand</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Design and mockups of products for companies.</p>
                            </li>                                                      
                        </ul>
                        </div>
                    </div>
                </div>
            </div>

              {/* -----------Third ----------- */}

<div className="services__content">
                <div>
                    <i className="uil uil-edit servics__icon"></i>
                    <h3 className="services__title">Visual <br/>Designer</h3>

                    <span className="services__button" onClick={()=> toggleTab(3)}>View More <i className="uil uil-arrow-right"></i></span>

                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Visual Designer</h3>    
                        <p className="services__modal-description">
                            Services with more than 3 years of experience. Providing quality work to clients and companies.
                        </p>

                        <ul className="services__modal-services">

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I develop the user interface.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Web page development</p>
                            </li>

<li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I positon you company brand</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Design and mockups of products for companies.</p>
                            </li>                                                      
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services
