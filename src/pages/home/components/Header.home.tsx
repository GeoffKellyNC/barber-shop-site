import React from 'react'
import barberShopCTA from '../../../assets/images/barbershop-cta.webp'
import styled from 'styled-components'

const HeaderHome = () => {
    return (
        <HomeHeaderStyled>
            <div className = 'header-body'>
                <span> Header Info</span>
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
    }


`