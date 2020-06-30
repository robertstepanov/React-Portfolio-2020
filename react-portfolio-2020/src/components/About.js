import React from 'react'
import { StyledAbout } from '../styles/StyledAbout';
import Footer from './Footer'

export default function About() {
    return (
        <StyledAbout>
        <div className='container'>
        <h2 className='title'>About</h2>
        <p className='about-info'>Hey there, my name is Robert and I'm a native of the Tampa Bay/St. Pete area of the west coast of Florida. After pursuing a minor degree in Biology and with the intention of completing a major in Environmental Science, I decided it wasn't for me. I enjoy the field, but decided I missed the more artistic and creative side of my personality and opted to embark on a new journey. So here I am, a new graduate again, with a Web Design and Development degree and a passion to put it to use. I have always had an interest and ability in drawing and art in general and combined with my love of technology it seemed natural to follow it in this direction. The immediate gratification of seeing something coded and come to fruition is such a fulfilling feeling. My goal is to use my innate imagination and creativity to build things to share with everyone. I sincerely hope that the things I create bring as much pleasure to my clients as the joy and fulfillment it brings to myself.</p>
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