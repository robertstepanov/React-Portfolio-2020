import styled from 'styled-components';

export const Container = styled.div`

// display: flex;
// justify-content: center;
// align-items: center;
width: 100%;
padding: 50px 0; 

a {
    text-decoration: none;
}

@media (min-width: 375px) and (max-width: 812px) {
    width: 100%;
    height: 100%;
}
`

export const CardFront = styled.div`
.card-front {
    // width: 500px;
    // height: 400px;
    background-color: #1d1e22;
    border: 1px solid #d4d4dc;
    


@media (min-width: 375px) and (max-width: 812px){
        width: 90%;
    }
    
}

.project-title {
    color:#d4d4dc;
    cursor: pointer;
    padding: 20px 0;
}

.project-title:hover {
    color: #feda6a;
}
`

export const CardBack = styled.div`
color: #d4d4dc;


h2, h3 {
    margin-bottom: 30px;
}
// .project-desc {
//     margin: 30px auto;
// }

.card-back {
    // width: 500px;
    height: 400px;
    padding: 10px 30px;
    outline: 1px solid #d4d4dc;
    background-color: #1d1e22;

 @media (min-width: 375px) and (max-width: 812px){
        width: 90%;
    }


}
`

export const ImgDiv = styled.div`
    // 
    height: 400px;
    display: flex;
    flex-direction: column;
   justify-content: center;
   align-items: center;
   
   
//    .project-image {
//        width: 100%;
//        height: 250px;;
       
//    }

    @media (min-width: 375px) and (max-width: 812px){
        width: 90%;
        margin: 0 auto;
    }
    
`


  export const BtnDiv = styled.div`
    height: 50px;
    width: 80%;
    display: flex;
    margin: 10px 0;
    justify-content: space-around;
    align-items: center;
   

    .project-icon {
        font-size: 2rem;
        color: white;
        cursor: pointer;
    }

    .project-icon:hover {
        color: #feda6a;;
    }
`

export const Img = styled.img`

    width: 100%;
    height: 250px;
    object-fit: contain;

    @media (min-width: 375px) and (max-width: 812px){
        width: 75%;
    }
    
`;