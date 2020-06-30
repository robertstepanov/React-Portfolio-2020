import React  from 'react'
import Footer from './Footer'
import logo from '../images/RS_logo.png';
import resume from '../images/resume_icon.png';
import Typical from 'react-typical';
import { StyledHome } from '../styles/StyledHome';
import Resume from '../assets/Resume.pdf'



import {faEnvelope, faFile} from '@fortawesome/free-solid-svg-icons'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedinIn, faReact, faPython, faNodeJs, faHtml5, faCss3Alt, faJs, faSass } from '@fortawesome/free-brands-svg-icons'
import { dom } from '@fortawesome/fontawesome-svg-core'
dom.watch()



library.add(faGithub, faLinkedinIn, faEnvelope, faFile, faReact, faPython, faNodeJs, faHtml5, faCss3Alt, faJs,faSass)


export default function Home() {
    return (
        <StyledHome>

            <div className='container'>
            <div className='logo'>
            <img className='logo' src={logo} alt='logo with initials RDS' />
            </div>
            <div className='title'>
            <h1>Robert Stepanov</h1>
            <Typical className='banner' steps={['Web Designer', 2000, 'Software Developer', 2000, 'Welcome to my Portfolio!', 2000]}
            loop = {1}
            wrapper = 'b' />
            </div>
            </div>
            <div className='icons'>
               
                            <a href="mailto:robertdstepanov@gmail.com" target="_blank"><icon className="fas fa-envelope"></icon></a>
                            <a href="https://www.linkedin.com/in/robert-stepanov-7b7739aa/" target="_blank"><icon alt="linked in logo" className="fab fa-linkedin-in"></icon></a>
                            <a href="https://github.com/robertstepanov" target="_blank"><icon alt="github logo" className="fab fa-github"></icon></a>
                            <a href={Resume} download='Resume.pdf ' className='resume'><span className='tooltip'>Resume</span><icon alt="resume logo" className="fas fa-file-pdf"></icon></a>
                            
                           
                            
            </div>
            <a href="Projects"><button className='cta-button'>My Work</button></a>
            
            <Footer footerClass={''} />
    
        </StyledHome>
    )
}