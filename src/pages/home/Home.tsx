import React from 'react'
import styled from 'styled-components'

// components
import HeaderHome from './components/Header.home'
import NavHome from './components/Nav.home'

const Home = (): JSX.Element => {
  return (
    <HomeStyled>
      <NavHome />
      <HeaderHome />
      <span> Home Page </span>
    </HomeStyled>
  )
}

export default Home

const HomeStyled = styled.div`


`