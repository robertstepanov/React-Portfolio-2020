import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import { StyledProject, CardFront, CardBack, Container, ImgDiv, Img } from '../styles/StyledProject';


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
        <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal' className='flip-div'>
            <CardFront>
                <ImgDiv>
                <a href={project.url} target='_blank'><h2>{project.title}</h2></a>
                <a href={project.url} target='_blank' ><Img alt={project.alt} src={project.image}/></a>
                <button onClick={handleClick}>More Info</button>
                </ImgDiv>
            </CardFront>

            <CardBack>
                <h2>Back</h2>
                 <button onClick={handleClick}>More Info</button>
            </CardBack>
        </ReactCardFlip>

    </Container>
)
}

