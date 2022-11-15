import React from 'react'
import styled from 'styled-components'

const PricingHome = () => {
    return (
        <PricingHomeStyled>
            <div className="big-barber-text">
                <h1 className = 'big-text'> BARBER </h1>
            </div>
        </PricingHomeStyled>
    )
}

export default PricingHome


const PricingHomeStyled = styled.div`
    color: white;

    .big-text {
        font-size: 12rem;
        font-weight: 700;
        font-family: ${pr => pr.theme.fonts.family.secondary};
        letter-spacing: 2rem;
        color: ${pr => pr.theme.colors.primary};
        text-shadow: 0 0 0.6rem ${pr => pr.theme.colors.primary};
        opacity: 0.2;
        margin: -8rem 1rem 0rem 13rem;

    }


`