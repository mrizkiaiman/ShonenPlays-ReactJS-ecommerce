import styled from 'styled-components'
//Components
import {NavLink as Link} from 'react-router-dom'

export const Nav = styled.nav`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 700;
`

export const NavTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const NavBotContainer = styled.div`
  display: flex;
`

export const NavTitleOrange = styled(Link)`
  color: #ffb244;
  font-size: 60px;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  padding: 30px 0;

  @media (max-width: 603px) {
    font-size: 24px;
  }
`

export const NavTitleGreen = styled(Link)`
  color: #006266;
  font-size: 60px;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  padding: 30px 0;

  @media (max-width: 603px) {
    font-size: 24px;
  }
`

export const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 34px;
  flex-wrap: wrap;

  p {
    @media (max-width: 603px) {
      margin: 12px 20px;
    }
  }
`

export const NavIconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const NavIcon = styled.img`
  margin: 0px 35px;

  cursor: pointer;
  display: block;

  @media (max-width: 603px) {
    margin: 12px 20px;
  }

  :hover {
    border: 2px solid black;
    padding: 10px;
    transition-timing-function: ease-in-out;
    transition: 0.3s;
    border-radius: 40px;
  }
`
