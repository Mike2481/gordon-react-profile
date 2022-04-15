// For each project you feature in your portfolio, you should include the following:

// An image of the deployed application (either a GIF or a screenshot)

// The title of the project

// A link to the deployed application

// A link to the corresponding GitHub repository

// import foodFlick from '../images/food-flick-screenshot.png'
import React from 'react';
import runBuddy from '../../assets/images/rb.png'

const ProjectList = () => {
    return (
        <section>
            <article>
                <img src={runBuddy} classname="project-image" alt='run buddy website' />
                <h3>Run Buddy Website</h3>
            </article>
        </section>
    )
};

export default ProjectList;