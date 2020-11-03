import React from "react";

const Resume = () => {
const proficiencies =['HTML','CSS','JavaScript','JQuery','React','Bootstrap','Materialize','APIs','Node','Express','MySQL (Sequelize)',"MongoDB (Mongoose)"]
    return (
    <div className='content-container'>
    <section className='section-content'>
    <div className='content'>
        <div className='proficiencies'>
            <h4>Proficiencies:</h4>
            <ul className="content skills-list">
              {proficiencies.map((item) => (
                  <li className="m-3">{item}</li>
              ))}
            </ul>
        </div>

        <a href={require('../../assets/Rutledge_Theresa.pdf')} download>Download Theresa's Resume</a>
</div>
    </section>
</div>
    )
};

export default Resume;