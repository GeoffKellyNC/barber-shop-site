import React from 'react'
import styled from 'styled-components'


// IMAGE IMPORTS
import BLADE_BARBER from '../../../assets/images/blade-barber.webp'
import KID_BARBER from '../../../assets/images/kid-barber.webp'

//ICONS IMPORTS
import { BsScissors } from 'react-icons/bs'
import { GiBeard, GiPerson } from 'react-icons/gi'
import { MdChildCare } from 'react-icons/md'



const PricingHome = () => {
    return (
        <PricingHomeStyled>
            <div className="big-barber-text">
                <h1 className = 'big-text'> BARBER </h1>
            </div>
            <div className="price-img-container">
                <img 
                    src={BLADE_BARBER} 
                    alt="blade barber"
                    className = 'blade' 
                />
                <img
                    src={KID_BARBER}
                    alt="kid barber"
                    className = 'kid'
                />
            </div>
            <div className="price-text-container">
                <h1 className = 'price-text-title'> WHAT WE DO </h1>
                <div className="pricing-grid-container">
                    <div className="pricing-grid-item">
                        <BsScissors className = 'scissors-icon price-icon' />
                        <h1 className = 'pricing-grid-item-title'> HAIRCUT </h1>
                        <p className = 'pricing-grid-item-text'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        <span className = 'pricing-grid-item-price'> $20 </span>
                    </div>
                    <div className="pricing-grid-item">
                        <GiBeard className = 'beard-icon price-icon' />
                        <h1 className = 'pricing-grid-item-title'> BEARD TRIM </h1>
                        <p className = 'pricing-grid-item-text'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        <span className = 'pricing-grid-item-price'> $15 </span>
                    </div>
                    <div className="pricing-grid-item">
                        <GiPerson className = 'discount-icon price-icon' />
                        <h1 className = 'pricing-grid-item-title'> SENIORS </h1>
                        <p className = 'pricing-grid-item-text'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        <span className = 'pricing-grid-item-price'> $12 </span>
                    </div>
                    <div className="pricing-grid-item">
                        <MdChildCare className = 'kid-icon price-icon' />
                        <h1 className = 'pricing-grid-item-title'> KIDS HAIRCUT </h1>
                        <p className = 'pricing-grid-item-text'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        <span className = 'pricing-grid-item-price'> $10 </span>
                    </div>
                </div>
            </div>
        </PricingHomeStyled>
    )
}

export default PricingHome


const PricingHomeStyled = styled.div`
    color: white;
    display: flex;

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

    .blade {
        width: 650px;
        height: 750px;
        opacity: 0.2;
        position: absolute;
        left: 0;
    }

    .kid {
        width: 500px;
        height: 600px;
        padding-left: 4rem;
        position: absolute;
        left: 9rem;
        margin-top: 5rem;
        opacity: 0.8;
        background-image: rgba(0, 87, 0, 0.5);
    }

    .price-text-container {
        margin-top: 8rem;
    }

    .price-text-title {
        font-family: ${pr => pr.theme.fonts.family.primary};
        font-size: ${pr => pr.theme.fonts.size.title};
        color: ${pr => pr.theme.colors.primary};
        font-weight: 700;
        margin-top: -2rem;
    }

    .pricing-grid-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 5rem;
        width: 100%;
        position: relative;
        left: -10rem;
    }

    .pricing-grid-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 2rem;
    }

    .pricing-grid-item-title {
        font-family: ${pr => pr.theme.fonts.family.primary};
        font-size: ${pr => pr.theme.fonts.size.xxl};
        color: ${pr => pr.theme.colors.primary};
        margin-top: 1rem;
    }

    .pricing-grid-item-text {
        font-family: ${pr => pr.theme.fonts.family.primary};
        font-size: ${pr => pr.theme.fonts.size.medium};
        color: ${pr => pr.theme.colors.offWhite};
        margin-top: 1rem;
        width: 200px;
        font-weight: 100;
    }

    .pricing-grid-item-price {
        font-family: ${pr => pr.theme.fonts.family.primary};
        font-size: ${pr => pr.theme.fonts.size.xxl};
        color: ${pr => pr.theme.colors.primary};
        margin-top: 1rem;
    }

    .price-icon {
        font-size: 3rem;
        color: ${pr => pr.theme.colors.offWhite};
    }


`