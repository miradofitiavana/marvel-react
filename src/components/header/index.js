import React from 'react'

import styled from 'styled-components'
import HeaderLogout from '../headerLogout'

const Header = () => {
  return (
    <HeaderContainer>
      <Navigation>
        <div>
          <NavTop>
            <div></div>
            <div>MARVEL</div>
            <div>
              <HeaderLogout></HeaderLogout>
            </div>
          </NavTop>
          <div></div>
        </div>
      </Navigation>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  background-color: red;
`
const Navigation = styled.nav`
  height: 50px;
  background-color: #202020;
  color: #fff;
`
const NavTop = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  max-width: 1200px;
  margin: auto;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`

export default Header
