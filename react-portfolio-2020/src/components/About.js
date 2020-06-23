import React from 'react'
import { StyledAbout } from '../styles/StyledAbout';
import Footer from './Footer'

export default function About() {
    return (
        <StyledAbout>
        <div className='container'>
        <h2 className='title'>About</h2>
        <p className='about-info'>I'm a devleoper from Tampa/St Pete.</p>
        <div className='skills'>
        <div className='icon-container'>
        <icon alt='html5 logo' className='fab fa-html5 skill-icon'></icon>
        <p>HTML5</p>
        </div>
         <div className='icon-container'>
         <icon alt='css3 logo' className='fab fa-css3-alt skill-icon'></icon>
        <p>CSS3</p>
        </div>
         <div className='icon-container'>
         <icon alt='javascript logo' className='fab fa-js skill-icon'></icon>
        <p>Javascript</p>
        </div>
         <div className='icon-container'>
         <icon alt='sass logo' className='fab fa-sass skill-icon'></icon>
        <p>Sass</p>
        </div>
         <div className='icon-container'>
         <icon alt='react logo' className='fab fa-react skill-icon'></icon>
        <p>ReactJS</p>
        </div>
         <div className='icon-container'>
         <icon alt='python logo' className='fab fa-python skill-icon'></icon>
        <p>Python</p>
        </div>
         <div className='icon-container'>
         <icon alt='node logo' className='fab fa-node-js skill-icon'></icon>
        <p>NodeJS</p>
        </div>
        </div>
        </div>
         <Footer footerClass={''} />
        </StyledAbout>
    )
}