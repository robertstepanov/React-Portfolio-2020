import styled from 'styled-components';

export const StyledContact = styled.div`
    background-color: #353535;
     height: 90vh;
    width: 100%;

h2 {
    color: #fff;
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
    background-color: #2a2a2a;
    width: 100%;
   margin: 0 auto;
    padding: 5% 0;
    

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

}

textarea {
    width: 60%;
    resize: none;
    color: #fff;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #fff;
    padding: 5px;
}

.submit-btn {
    background-color: #fff;
    color: #2a2a2a;
    padding: 5px 0;
    margin: 20px auto 0 auto;
    text-transform: uppercase;
    width: 20%;
}

 input {
     color: #fff;
     background-color: transparent;
     border: none;
     border-bottom: 1px solid #fff;
     width: 60%;
     padding: 5px;
     margin-bottom: 20px;
 }


 




`