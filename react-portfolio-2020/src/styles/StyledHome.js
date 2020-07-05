import styled from 'styled-components';

export const StyledHome = styled.div`

    background-color: #353535;
    height: 90vh;
    width: 100%;
   
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding-bottom: 40px;
    }

    .title {
        width: 500px;
        padding-top: 50px;
    }

    .logo {
        width: 300px;
        padding-top: 20px;
    }

    h1 {
        color: #fff;
        margin-top: 0;
    }

    .banner {
        color: #fff;
        font-size: 1.5rem;
    }

   .cta-button {
       border-radius: 5px;
       padding: 10px 30px;
       background-color: white;
       color: black;
       width: 150px;
   }

   .cta-button:hover {
       color: yellow;
       background-color: #353535;
       border: 2px solid yellow;
       cursor: pointer;
   }
   
   .icons {
       margin: 30px auto;
   }

   .resume {
       position: relative;
       display: inline-block;
   }

   .resume .tooltip {
        top: 5px;
        left: 140%;
}

.tooltip {
    font-size: 1rem;
}

   .resume  .tooltip {
        visibility: hidden;
        width: 100px;
        background-color: black;
        color: #fff;
        text-align: center;
        padding: 5px 0;
        border-radius: 6px;
        position: absolute;
        z-index: 1;
    }

    .resume:hover .tooltip {
        visibility: visible;
    }

   a {
       color: white;
       margin: 20px 40px;
       font-size: 2em;
   }

   a:hover {
       color: yellow;
   }

   @media (min-width: 375px) and (max-width: 800px) {
           height: 90vh;
           overflow: hidden;


       .logo {
           width: 200px;
       }

       .container {
           flex-direction: column;
           width: 100%;
       }

       .icons {
           margin: 0 auto;
       }
   }
    `