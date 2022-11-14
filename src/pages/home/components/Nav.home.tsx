import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const NavHome = () => {
  return (
    <NavHomeStyled>
        <NavLink to = '/'> Home </NavLink>
        <NavLink to = '/about'> About </NavLink>
        <NavLink to = '/contact'> Contact </NavLink>
    </NavHomeStyled>
  )
}

export default NavHome

const NavHomeStyled = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 100;
    background-color: black;
    width: 100%;
    display: flex;
    justify-content: flex-end;

    a {
        padding: 1rem;
        color: white;
        text-decoration: none;
    }

`