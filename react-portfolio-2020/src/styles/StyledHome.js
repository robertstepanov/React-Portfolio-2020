import styled from 'styled-components';

export const StyledHome = styled.div`

    background-color: #353535;
    height: 90vh;
   
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


   a {
       color: white;
       margin: 20px 40px;
       font-size: 2em;
   }

   a:hover {
       color: yellow;
   }
    `