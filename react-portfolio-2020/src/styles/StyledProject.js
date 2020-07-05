import styled from 'styled-components';

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
padding: 50px 0; 

@media (min-width: 500px) and (max-width: 800px) {
    width: 100%;
    height: 100%;
}
`

export const CardFront = styled.div`
.card-front {
    width: 900px;


@media (min-width: 500px) and (max-width: 800px){
        width: 90%;
    }
    
}

.project-title {
    color: #fff;
    cursor: pointer;
    padding: 20px 0;
}

.project-title:hover {
    color: yellow;
}
`

export const CardBack = styled.div`

color: #fff;;

h2, h3 {
    margin-bottom: 30px;
}
// .project-desc {
//     margin: 30px auto;
// }

.card-back {
    width: 900px;
    height: 400px;

 @media (min-width: 500px) and (max-width: 800px){
        width: 90%;
    }


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

    @media (min-width: 500px) and (max-width: 800px){
        width: 90%;
        margin: 0 auto;
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
`

export const Img = styled.img`

    width: 500px;

    @media (min-width: 500px) and (max-width: 800px){
        width: 75%;
    }
    
`;