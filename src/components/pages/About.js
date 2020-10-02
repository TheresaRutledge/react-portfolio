import React from "react";


const About = () => (
    <div className='content-container'>
        <section className='section-content'>
            <div className='content'>
                <h2>About Me</h2>
                <div class='profile-image-container'>
                    <img class='profile-image' src={require('../../assets/profile-pic.jpeg')} alt='Theresa headshot'></img>
               </div>
                <p>
                Hi! I'm Theresa and I'm currently learning skills to become a web developer! My background so far has been as a sales executive selling software. All my time working with technology
                        led me to realize that I wanted to learn how to create not just sell. I'm familiar with HTML, CSS and JavaScript. More skills to come as I continue to learn!
                    
                I live in the San Francisco Bay area with my husband and two cats. When I'm not at a computer I'm hiking, knitting or making fun crafts with my Cricut. 
                </p>
            </div>
        </section>
    </div>
);

export default About;