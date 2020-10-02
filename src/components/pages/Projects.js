import React from "react";



function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('../../assets/project-images', false, /\.(gif|jpe?g|svg)$/));

const Projects = () => {

    const projectList = [
        {
            name: 'Cosmopolitan Tastes',
            image: 'cosmotastes.jpeg',
            url: 'http://cosmopolitan-tastes.herokuapp.com',
            githubUrl: 'https://github.com/TheresaRutledge/CosmopolitanTastes'
        },
        {
            name: 'Wine and Dine',
            image:'wine-dine.jpg',
            url:'https://theresarutledge.github.io/wine-and-dine/',
            githubUrl:'https://github.com/TheresaRutledge/wine-and-dine'
        },
        {
            name:'Run Buddy',
            image:'run-buddy.jpg',
            url:'https://theresarutledge.github.io/run-buddy/',
            githubUrl:'https://github.com/TheresaRutledge/run-buddy'
        },
        {
            name:'Daily Planner',
            image:'daily-planner.jpeg',
            url:'https://theresarutledge.github.io/daily-planner/',
            githubUrl:'https://github.com/TheresaRutledge/daily-planner'
        },
        {
            name:'Weather',
            image:'weather.jpeg',
            url:'https://theresarutledge.github.io/weather-dashboard/',
            githubUrl:'https://github.com/TheresaRutledge/weather-dashboard'
        },
        {
            name:'Secret Santa',
            image:'secret-santa.jpg',
            url:'https://theresarutledge.github.io/secret-santa/',
            githubUrl:'https://github.com/TheresaRutledge/secret-santa'
        },
    ];


    return (
        <div className='content-container'>
            <section className='section-content'>
                <div className='content'>
                    {
                        projectList.map((project) => (
                            <div className='project-container'>
                                <img className='project' src={images[project.image]} alt={project.name}></img>
                                <div className='project-links'>
                                    <a href={project.url} className='project-link project-name' target='_blank' >{project.name}</a>
                                    <a href={project.githubUrl} className='project-link' target='_blank'>
                                        <img src={require('../../assets/GitHub-Mark-32px.png')}></img>
                                    </a>
                                </div>
                            </div>
                        ))}

                </div>
            </section>

        </div>
    )
};

export default Projects;