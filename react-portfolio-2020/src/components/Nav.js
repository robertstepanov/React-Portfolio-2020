import React from 'react'
import { NavLink } from 'react-router-dom';
import { StyledNav } from '../styles/StyledNav';


export default function Nav() {
    return (
        <StyledNav>
            <NavLink to = '/' exact={true} className='nav-link'>Home</NavLink>
            <NavLink to = '/about' className='nav-link'>About</NavLink>
            <NavLink to = '/projects' className='nav-link'>Projects</NavLink>
            <NavLink to = '/contact' className='nav-link'>Contact</NavLink>
        </StyledNav>
    )
}