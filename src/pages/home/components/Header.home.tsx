import React from 'react'
import barberShopCTA from '../../../assets/images/barbershop-cta.webp'
import styled from 'styled-components'

import LOGO from '../../../assets/images/logo.png'

const HeaderHome = () => {
    return (
        <HomeHeaderStyled>
            <div className = 'header-body'>
                <div className="header-box">
                    <img 
                        src = {LOGO}
                        alt = 'logo'
                        className = 'logo-large' />
                </div>
            </div>
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
    

    .header-body {
        color: white;
        padding-top: 7%;
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }

    .header-box {
        background: rgba( 24, 23, 23, 0.55 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 4px );
        -webkit-backdrop-filter: blur( 4px );
        border: none;    }
    
    .logo-large {
        width: 50%;
        height: 40%;
        margin-left: 25%;
    }


`