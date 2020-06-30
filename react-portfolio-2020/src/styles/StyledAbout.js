import styled from 'styled-components';

export const StyledAbout = styled.div`

    background: #353535;
    color: #fff;
    display: flex;
    flex-direction: column;
    height: 90vh;

   
   .skills {
       display: flex;
       width: 75%;
       margin: 0 auto;
       justify-content: space-between;
       margin: 10% auto 0 auto;
   }

   .icon-container {
       margin-top: -50px;
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
     line-height: 1.8;
 }
    `
