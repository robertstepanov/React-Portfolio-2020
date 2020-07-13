import styled from 'styled-components';

export const StyledContact = styled.div`
    background-color:  #1d1e22;
     height: 90vh;
    width: 100%;

h2 {
    color:#d4d4dc;
    margin: 40px auto;
}
.container {
    display: flex;
    flex-direction: column;
   justify-content: center;
    width: 60%;
    margin: 0 auto;

    // h2 {
    //     // flex-grow: 1;
    //     margin-bottom: auto;
    // }
}

.contact-form-class {
    background-color:  #1d1e22;
    width: 100%;
   margin: 0 auto;
    padding: 5% 0;
    outline: 1px solid #d4d4dc;

     .icons {
       margin: 0 auto;
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
        color: #d4d4dc;
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

}

textarea {
    width: 60%;
    resize: none;
    color:#d4d4dc;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #d4d4dc;
    padding: 5px;
}

.submit-btn {
    background-color: #d4d4dc;
    color: #2a2a2a;
    padding: 5px 0;
    margin: 20px auto 0 auto;
    text-transform: uppercase;
    width: 20%;
    cursor: pointer;
}

.submit-btn:hover {
    border: 1px solid #feda6a;
    background-color: #1d1e22;
    color: #d4d4dc;
}

 input {
     color: #d4d4dc;
     background-color: transparent;
     border: none;
     border-bottom: 1px solid #d4d4dc;
     width: 60%;
     padding: 5px;
     margin-bottom: 20px;
 }

 @media (min-width: 375px) and (max-width: 800px) {

     .submit-btn {
         width: 60%;
     }
 }
 




`