import styled from 'styled-components';

export const StyledProject = styled.div`



`

export const CardFront = styled.div`

color: black;

`

export const CardBack = styled.div`

color: #fff;;

.card-back {
    width: 900px;
    height: 500px;

//  @media(max-width: 740px){
//         width: 90%;
//         margin: 2% auto 0 auto;
       
//     }


}




`
export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100vh;
margin-top: -40px;

.project-title {
    color: #fff;
    cursor: pointer;
}

.project-title:hover {
    color: yellow;
}
`

export const ImgDiv = styled.div`
    width: 900px;
    display: flex;
    flex-direction: column;
   justify-content: center;
   align-items: center;
   background-color: black;
   
   .project-image {
       width: 100%;
   }

    @media(max-width: 740px){
        width: 90%;
        margin: 2% auto 0 auto;
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

    .project-icon:hover {
        color: yellow;
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