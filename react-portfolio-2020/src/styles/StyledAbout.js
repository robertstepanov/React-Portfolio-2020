import styled from 'styled-components';

export const StyledAbout = styled.div`

    background:  #1d1e22;
    color:  #d4d4dc;
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
        margin: 40px  auto;
        color:  #d4d4dc;
    }
   
   .skills {
       display: flex;
       width: 75%;
       justify-content: space-between;
       margin: 5% auto 0 auto;
       padding-bottom: 5%;
   }

   .icon-container:hover {
       color:#feda6a ;
   }

 .skill-icon {
     font-size: 4rem;
     color:  #d4d4dc;
 }

 .skill-icon:hover {
     color: #feda6a;
 }
 
 .about-info {
     width: 60%;
     margin: 0 auto;
     text-align: left;
     line-height: 2;
    }

 @media (min-width: 375px) and (max-width: 812px)  {

    .title {
        margin-bottom: 15px;
    }

    .about-info {
        width: 90%;
        font-size: .85rem;
    }

    .icon-container {
        height: 100%;
        width: 20%;
        margin-right: 15px;
    }

    .icon-container p {
        font-size: .75em;
        padding-bottom: 30px;
    }

    .skills {
        flex-wrap: wrap;
        width: 100%;
        
    }

    .skill-icon {
        font-size: 1.5rem;
    }
 }
    `
