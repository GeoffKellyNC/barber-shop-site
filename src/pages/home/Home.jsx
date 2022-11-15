import React from 'react'
import styled from 'styled-components'

// components
import AboutHome from './components/About.home'
import HeaderHome from './components/Header.home'
import NavHome from './components/Nav.home'
import PricingHome from './components/Pricing.home'

const Home = () => {


  return (
    <HomeStyled>
      <NavHome />
      <HeaderHome />
      <AboutHome />
      <PricingHome />
      
    </HomeStyled>
  )
}

export default Home

const HomeStyled = styled.div`


`