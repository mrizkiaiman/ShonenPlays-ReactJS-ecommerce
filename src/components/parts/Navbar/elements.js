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
  border-bottom: 1px solid #e5e7eb;

  @media (min-width: 1820px) {
    margin: 0 250px;
  }
`

export const NavTitle = styled(Link)`
  color: black;
  font-size: 54px;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  padding: 30px 0;
`

export const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 34px;
  flex-wrap: wrap;

  @media (min-width: 1820px) {
    margin: 0 250px;
  }

  p {
    font-size: 18px;
    margin: 0 30px;

    @media (max-width: 603px) {
      margin: 12px 20px;
    }
  }
`
