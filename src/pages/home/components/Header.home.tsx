import React from 'react'
import barberShopCTA from '../../../assets/images/barbershop-cta.webp'
import styled from 'styled-components'

import LOGO from '../../../assets/images/logo.png'

const HeaderHome = () => {
    return (
        <HomeHeaderStyled>
                <div className="header-box"></div>
                <img 
                    src = {LOGO}
                    alt = 'logo'
                    className = 'logo-large' />
            <button className="header-book-now"> Book Now </button>
        </HomeHeaderStyled>
    )
}

export default HeaderHome


const HomeHeaderStyled = styled.div`
    background-image: url(${barberShopCTA});
    height: 100vh;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: -2;
    

    .header-body {
        color: white;
        padding-top: 7%;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        
    }

    .header-box {
        width: 100%;
        height: 100vh;
        background-color: rgba( 24, 23, 23, 0.55 );
        position: absolute;
        z-index: -1;
    }
    
    .logo-large {
        width: 38%;
        height: 65%;
        position: relative;
        top: -3%;
    }

    .header-book-now {
        background-color: ${pr => pr.theme.colors.primary};
        color: white;
        font-family: ${pr => pr.theme.fonts.family.primary};
        border: none;
        padding: 1rem 2rem;
    }


`