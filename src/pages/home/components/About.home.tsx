import React from 'react'
import styled from 'styled-components'

import BARBER_IMG from '../../../assets/images/barber-cutting.webp'

const AboutHome = () => {
    return (
        <AboutHomeStyled>
            <div className="about-photo"></div>
            <div className="about-text">
                <span className="top-title-text">AMAZING THINGS COME FROM </span>
                <span className="passion-text">PASSION</span>
                <div className="about-paragraphs">
                    <p className = 'about-p1 about-p'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. lourem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. lourem ipsum dolor sit amet, consectetur adipiscing elit. 
                    </p> 
                    <p className = 'about-p2 about-p'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. lourem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. lourem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
            </div>
        </AboutHomeStyled>
    )
}

export default AboutHome


const AboutHomeStyled = styled.div`

    .about-photo {
        background-image: url(${BARBER_IMG});
        width: 800px;
        height: 600px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        position: absolute;
        right: 0;
        margin-top: -160px;
    }

    .about-text {
        display: flex;
        flex-direction: column;
        position: relative;
        left: 18%;
        margin: 10rem 0;
    }

    .top-title-text {
        font-family: ${pr => pr.theme.fonts.family.primary};
        font-size: ${pr => pr.theme.fonts.size.heading};
        color: ${pr => pr.theme.colors.primary};
    }

    .passion-text {
        font-family: ${pr => pr.theme.fonts.family.secondary};
        font-size: ${pr => pr.theme.fonts.size.title};
        font-weight: 600;
        color: ${pr => pr.theme.colors.offWhite};
    }

    .about-p{
        font-family: ${pr => pr.theme.fonts.family.primary};
        font-size: ${pr => pr.theme.fonts.size.large};
        color: ${pr => pr.theme.colors.offWhite};
        width: 50%;
        font-weight: 100;
        line-height: 1.5;
    }

    .about-p1 {
        margin-bottom: 2rem;
    }




`