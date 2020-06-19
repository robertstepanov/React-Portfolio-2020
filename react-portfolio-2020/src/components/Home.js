import React  from 'react'
import Footer from './Footer'
import logo from '../images/RDSWeb.png';
import Typical from 'react-typical';
import { StyledHome } from '../styles/StyledHome';

import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub} from '@fortawesome/free-brands-svg-icons'






export default function Home() {
    return (
        <StyledHome>

        <div>
    <a href="#"><FontAwesomeIcon icon={faEnvelope} /></a>
    <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
  </div>

            <div>
            <img src={logo} alt='logo with initials RDS' />
            </div>
            <h1>Robert D Stepanov</h1>
            <Typical steps={['Web Designer', 2000, 'Software Developer', 2000, 'Welcome to my Portfolio', 2000]}
            loop = {1}
            wrapper = 'b' />
            <div>
               
                            
            </div>
            <button className='cta-button'><a href="Projects">My Projects</a></button>
            <Footer footerClass={''} />
        </StyledHome>
    )
}