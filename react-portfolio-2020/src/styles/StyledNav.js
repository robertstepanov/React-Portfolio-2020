import styled from 'styled-components';

export const StyledNav = styled.nav`

    background: #feda6a;
    height: 8vh;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1;

    .nav-link {
        color: #1d1e22;
        text-decoration: none;
        margin-right: 30px;
        padding: 5px 15px;
    }

    .nav-link:hover {
        border-bottom: 2px solid  #1d1e22;
    }

    .nav-link:focus {
        background-color:  #1d1e22;
         color: #d4d4dc;
    }

    @media (min-width: 375px) and (max-width: 800px) {

        justify-content: center;

        .nav-link {
            margin-right: 0;
        }
   }

    `