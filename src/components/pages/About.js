import React from "react";


const About = () => (
    <div className='content-container'>
        <section className='section-content'>
            <div className='content'>
                <h2 className='col-12'>About Me</h2>
                <div className='row'>
                <div className='profile-image-container '>
                    <img className='profile-image' src={require('../../assets/profile-pic.jpeg')} alt='Theresa headshot'></img>
               </div>
                <p className='about-me-content '>
                A passionate problem solver, I have broad software experience working with enterprise clients across a variety of industries. My efforts drive customer satisfaction, process efficiency and 
                revenue growth.
                I recently completed a full-stack web development certification course and am looking to use that knowledge along with my experience in software sales to pursue a career in solution engineering. 

                <br/>
                <br/>
                On a personal note, I live in the San Francisco Bay area with my husband and two cats. In my freetime I enjoy hiking, skiing, knitting or crafting with my Cricut. Tennis has also been a recent
                addition to my hobbies as I'm learning how to play for the first time! 
                </p>
                </div>
            </div>
        </section>
    </div>
);

export default About;