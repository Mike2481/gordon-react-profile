// For each project you feature in your portfolio, you should include the following:

// An image of the deployed application (either a GIF or a screenshot)

// The title of the project

// A link to the deployed application

// A link to the corresponding GitHub repository
// import all images for projects
import React from 'react';
import runBuddy from '../../assets/images/rb.png'
import foodFlick from '../../assets/images/food-flick-screenshot.png'
import fluffyPotato from '../../assets/images/fluffy-potato-screenshot.png'
import weatherForecaster from '../../assets/images/weather-dashboard.png'
import budgetTracker from '../../assets/images/budget-tracker.png'
import noteTaker from '../../assets/images/note-taker.png'


const ProjectList = () => {
    return (
        // set up container for project grid
        <section className='grid-container'>
            <article className='grid-item'>
                
                <p><a href='https://mike2481.github.io/run-buddy/' rel="noreferrer" target={"_blank"}><h3>Run Buddy Website</h3></a></p>
                <img src={runBuddy} classname="project-image" alt='run buddy website' />
                <p><a href='https://github.com/Mike2481/run-buddy' rel="noreferrer" target={"_blank"}>GitHub Link  <i className="fab fa-github-square fa-lg"></i></a></p>
            </article>
            <article className='grid-item'>
                
                <p><a href='https://brandonespencer.github.io/Food-and-a-Flick/' rel="noreferrer" target={"_blank"}><h3>Food N Flick</h3></a></p>
                <img src={foodFlick} classname="project-image" alt='run buddy website' />
                <p><a href='https://github.com/brandonespencer/Food-and-a-Flick' rel="noreferrer" target={"_blank"}>GitHub Link  <i className="fab fa-github-square fa-lg"></i></a></p>
            </article>
            <article className='grid-item'>
                
                <p><a href='https://rocky-river-85271.herokuapp.com/' rel="noreferrer" target={"_blank"}><h3>Fluffy Potato Website</h3></a></p>
                <img src={fluffyPotato} classname="project-image" alt='run buddy website' />
                <p><a href='https://github.com/matthewpetriella/fluffy-potato' rel="noreferrer" target={"_blank"}>GitHub Link  <i className="fab fa-github-square fa-lg"></i></a></p>
            </article>
            <article className='grid-item'>
                
                <p><a href='https://mike2481.github.io/Mike-s-Weather-Forecaster/' rel="noreferrer" target={"_blank"}><h3>Weather Forecast Website</h3></a></p>
                <img src={weatherForecaster} className="project-image" alt='run buddy website' />
                <p><a href='https://github.com/Mike2481/Mike-s-Weather-Forecaster' rel="noreferrer" target={"_blank"}>GitHub Link  <i className="fab fa-github-square fa-lg"></i></a></p>
            </article>
            <article className='grid-item'>
                
                <p><a href='https://fierce-lake-77648.herokuapp.com/' rel="noreferrer" target={"_blank"}><h3>Budget Tracker</h3></a></p>
                <img src={budgetTracker} className="project-image" alt='run buddy website' />
                <p><a href='https://github.com/Mike2481/gordon-budget-tracker' rel="noreferrer" target={"_blank"}>GitHub Link  <i className="fab fa-github-square fa-lg"></i></a></p>
            </article>
            <article className='grid-item'>
                
                <p><a href='https://agile-brook-83776.herokuapp.com/' rel="noreferrer" target={"_blank"}><h3>Note Taker</h3></a></p>
                <img src={noteTaker} className="project-image" alt='run buddy website' />
                <p><a href='https://github.com/Mike2481/Gordon-Note-Taker' rel="noreferrer" target={"_blank"}>GitHub Link  <i className="fab fa-github-square fa-lg"></i></a></p>
            </article>
        </section>
    )
};

export default ProjectList;