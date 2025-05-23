import React from 'react'
import "./qualification.css"


const Qualification = () => {
  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        {/* <span className="section__subtitle">My personel journey</span> */}

     <div className="qualification__container container">
       <div className="qualification__tabs">
        <div className="qualifications__button qualification__active button--flex">
           <i className="uil uil-graduation-cap qualification__icon"></i> Education
        </div>

        {/* <div className="qualifications__button button--flex">
           <i className="uil uil-briefcase-alt qualification__icon"></i>Experience 
        </div> */}
        </div> 

        <div className="qualification__section">
            <div className="qualification__content qualification__content-active ">
                <div className="qualification__data">

                <div>
                    {/* <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span> */}
                
                </div>

                    <div>
                        <h3 className="qualification__title">Bachelor of technology</h3>

                        <span className="qualification__subtitle">Jaypee university of engineering and technology</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calender-alt"></i>2021 - present
                        </div>
                        <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                    
                        <div>
                        <h3 className="qualification__title">Modern children higher secondary school, Guna</h3>

                        <span className="qualification__subtitle">High school</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calender-alt"></i>2020 
                        </div>
                    </div>
                    </div>
                    

                </div>


    </div>


</div>

    </div>
    </section>
  )
}

export default Qualification
