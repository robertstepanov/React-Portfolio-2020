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

`

export const ImgDiv = styled.div`
    width: 900px;
    height: 700px;
    display: flex;
    flex-direction: column;
   justify-content: center;
   align-items: center;
   
   .project-image {
       width: 100%;
   }
    
`

  export const BtnDiv = styled.div`
    height: 50px;
    width: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
   

    .project-icon {
        font-size: 2rem;
        color: white;
        cursor: pointer;
    }

   
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