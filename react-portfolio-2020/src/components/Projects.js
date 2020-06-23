import React from 'react'
import {projects} from '../db/projects';
import Project from './Project';
import Footer from './Footer'

import { Container } from '../styles/StyledProjects';


export default function Projects() {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Container>
        <h1>Projects</h1>
        <div>
            {projects.map(project => {
                return <Project key={project.id} project={project}/>
            })}
        </div>
        <button onClick={scrollToTop} className='top-btn'>Back to top</button>
        <Footer />
        </Container>
    )
}