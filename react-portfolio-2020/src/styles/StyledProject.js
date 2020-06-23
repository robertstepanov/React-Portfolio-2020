import styled from 'styled-components';

export const StyledProject = styled.div`



`

export const CardFront = styled.div`

color: black;

`

export const CardBack = styled.div`
color: black;



`
export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 500px;
`

export const ImgDiv = styled.div`
    width: 600px;
    display: flex;
    flex-direction: column;
   justify-content: center;
   align-items: center;
    
`;

export const Img = styled.img`

    width: 500px;
    @media(max-width: 1020px){
        width: 75%;
    }
    @media(max-width: 740px){
        width: 55%;
        margin-top: 4%;
    }
`;