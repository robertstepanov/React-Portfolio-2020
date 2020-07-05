import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import {  CardFront, CardBack, Container, ImgDiv, Img, BtnDiv } from '../styles/StyledProject';
import {fas} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { dom } from '@fortawesome/fontawesome-svg-core'
dom.watch()

library.add( fas)

export default function Project(props) {
    const {project} = props;
    const [isFlipped, setIsFlipped] = useState(false)

    const handleClick = e => {
        e.preventDefault();
        setIsFlipped(!isFlipped);
    }

    // return (
    //     <div>
    //     {/* <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'> */}
    //         <div className='front-card'><a href={project.url} target='_blank'><h2>{project.title}</h2></a></div>
    //         <div><a href={project.url} target='_blank'><img alt={project.alt} src={project.image}/></a></div>

    //         <div className='back-card'>
    //             <h2>Back</h2>
    //         </div>
    //     {/* </ReactCardFlip> */}
    //     </div>
    // )

return (
    <Container>
        <div className='flip-div'>
        <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
            <CardFront>
                <ImgDiv className='card-front'>
                <a href={project.url} target='_blank' className='project-title'><h2>{project.title}</h2></a>
                <a href={project.url} target='_blank' ><Img alt={project.alt} src={project.image} className='project-image'/></a>
                <BtnDiv>
                <div className='project-btn'><a href={project.repo} target='_blank'><icon alt="github logo" className="fab fa-github project-icon"></icon></a></div>
                <div className='project-btn'><a href={project.url} target='_blank'><icon alt="link to website" className="fas fa-link project-icon" ></icon></a></div>
                <div className='project-btn' onClick={handleClick}><icon alt="flips card" className="fas fa-info-circle project-icon" ></icon></div>
                </BtnDiv>
                </ImgDiv>
            </CardFront>

            <CardBack>
                <ImgDiv className='card-back'>
                    <h2>{project.title}</h2>
                    <h3>{project.skills}</h3>
                    <h3 className='project-desc'>{project.desc}</h3>
                     <BtnDiv>
                <div className='project-btn'><a href={project.repo} target='_blank'><icon alt="github logo" className="fab fa-github project-icon"></icon></a></div>
                <div className='project-btn'><a href={project.url} target='_blank'><icon alt="link to website" className="fas fa-link project-icon" ></icon></a></div>
                <div className='project-btn' onClick={handleClick}><icon alt="flips card" className="fas fa-info-circle project-icon" ></icon></div>
                </BtnDiv>
                    {/* <button onClick={handleClick}>More Info</button> */}
                 </ImgDiv>
            </CardBack>
        </ReactCardFlip>
        </div>

    </Container>
)
}

