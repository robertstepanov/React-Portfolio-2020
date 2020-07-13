import styled from 'styled-components';

export const StyledFooter = styled.footer`

    background: #1d1e22;
    color:  #d4d4dc;
    height: 8vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
   font-size: .8rem;
   border-top: 1px solid #feda6a;

    @media (max-width: 500px) {

      width: 100%;
   }
    `