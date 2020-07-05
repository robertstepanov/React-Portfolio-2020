import styled from 'styled-components';

export const StyledAbout = styled.div`

    background: #353535;
    color: #fff;
    width: 100%l
    height: 100vh;

     .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding-bottom: 40px;
    }

    .title {
        margin: 30px auto;
    }
   
   .skills {
       display: flex;
       width: 75%;
       justify-content: space-between;
       margin: 10% auto 0 auto;
   }

   .icon-container:hover {
       color: yellow ;
   }

 .skill-icon {
     font-size: 4rem;
 }
 
 .about-info {
     width: 60%;
     margin: 0 auto;
     text-align: left;
     line-height: 2;
 }

 @media (min-width: 500px) and (max-width: 800px) {
    
    .title {
        margin-bottom: 15px;
    }

    .about-info {
        width: 90%;
        font-size: .85rem;
    }

    .icon-container {
        height: 100px;
        width: 20%;
        margin-right: 15px;
    }

    .icon-container p {
        font-size: .75em;
    }

    .skills {
        flex-wrap: wrap;
    }

    .skill-icon {
        font-size: 1.5rem;
    }
 }
    `
