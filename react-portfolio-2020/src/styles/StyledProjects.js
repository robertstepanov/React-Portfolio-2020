import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
background-color:  #1d1e22;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
flex-wrap: wrap;
padding-bottom: 120px;


h1 { 
    color:#d4d4dc;
    padding-top: 30px;
}

.projects-list {
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-gap: 5%;
    height: 100%;
    width: 90%;
    justify-content: center;
    padding-bottome: 30px;      
    

@media (min-width: 375px) and (max-width: 812px){
   
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        }    

}

.top-btn {
    padding-top: 4%;
}

.to-top {
    font-size: 2rem;
    color:#feda6a;
    cursor: pointer;
}
`