import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const NavHome = () => {
    return (
        <NavHomeStyled>
            <div className="links">
                <NavLink to = '/'> Home </NavLink>
                <NavLink to = '/about'> Schedule </NavLink>
                <NavLink to = '/contact'> Contact </NavLink>
                <NavLink to ='/hours'> Hours </NavLink>
            </div>
        </NavHomeStyled>
    )
}

export default NavHome

const NavHomeStyled = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 100;
    width: 100%;
    display: flex;
    gap: 3rem;
    justify-content: flex-end;
    background: rgba( 24, 23, 23, 0.55 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border: none;
    height: 100px;

    a {
        padding: 1rem;
        color: white;
        text-decoration: none;
        font-family: ${pr => pr.theme.fonts.family.primary};
        font-size: ${pr => pr.theme.fonts.size.large};
    }

    a:hover {
        color: ${pr => pr.theme.colors.primary};
    }

    .active {
        color: ${pr => pr.theme.colors.primary};
    }

    .links {
        display: flex;
        align-items: center;
        gap: 2rem;
    }

`