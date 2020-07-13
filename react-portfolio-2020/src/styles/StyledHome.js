import styled from 'styled-components';


export const StyledHome = styled.div`
    background-color: #1d1e22;
    height: 90vh;
    width: 100%;
    background-image: url('https://live.staticflickr.com/65535/50094334946_da7d7eea1b_m.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;


    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding-top: 40px;
    }

    .title {
        width: 500px;
        padding-top: 50px;
    }

    .logo {
        width: 275px;
        height: 300px;
        padding-top: 20px;
    }

    

    .cls-1 {
        fill:  #feda6a;
    }

    h1 {
        color: #d4d4dc;
        margin-bottom: 15px;
        font-size: 2.5rem;
    }

    .banner {
        color: #feda6a;
        font-size: 1.2rem;
    }

   .cta-button {
       border-radius: 5px;
       padding: 10px 30px;
       background-color:#feda6a;
       color: black;
       width: 250px;
   }

   .cta-button:hover {
       color: #feda6a;
       background-color: #1d1e22;
       border: 2px solid #feda6a;
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
       color: #d4d4dc;
       margin: 20px 40px;
       font-size: 2em;
   }

   a:hover {
       color: #feda6a;
   }

   @media (min-width: 375px) and (max-width: 800px) {
           height: 90vh;
           overflow: hidden;


       .logo {
           width: 200px;
           padding-top: 0;
       }

       .title {
           padding-top: 0;
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