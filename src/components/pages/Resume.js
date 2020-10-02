import React from "react";

const Resume = () => {
const proficiencies =['HTML','CSS','JavaScript','JQuery','React','Bootstrap','Materialize','APIs','Node','Express','MySQL (Sequelize)',"MongoDB (Mongoose)"]
    return (
    <div className='content-container'>
    <section className='section-content'>
    <div className='content'>
        {/* <h2 className='content-title'>Resume</h2> */}
        <div className='proficiencies'>
            <h4>Proficiencies:</h4>
            <ul>
              {proficiencies.map((item) => (
                  <li>{item}</li>
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